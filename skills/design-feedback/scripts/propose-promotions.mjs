#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

function parse(argv) {
  const out = { events: [] };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--events') out.events.push(path.resolve(argv[++i]));
    else if (argv[i] === '--min-count') out.minCount = Number(argv[++i]);
    else if (argv[i] === '--min-confidence') out.minConfidence = Number(argv[++i]);
  }
  return out;
}

function read(file) {
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); } catch { throw new Error(`Invalid JSON at ${file}:${index + 1}`); }
  });
}

const args = parse(process.argv.slice(2));
if (!args.events.length) {
  console.error('Usage: node propose-promotions.mjs --events <events.jsonl> [--events <more.jsonl>]');
  process.exit(2);
}
const minCount = Number.isFinite(args.minCount) ? args.minCount : 3;
const minConfidence = Number.isFinite(args.minConfidence) ? args.minConfidence : 0.75;
const allEvents = args.events.flatMap((file) => read(file).map((event) => ({...event, sourceFile: file})));
const unique = new Map();
for (const event of allEvents) {
  const identity = `${event.projectId}\u0000${event.eventId}`;
  if (unique.has(identity)) throw new Error(`Duplicate projectId/eventId across supplied ledgers: ${event.projectId}/${event.eventId}`);
  unique.set(identity, event);
}
const uniqueEvents = [...unique.values()];
const corrected = new Set(uniqueEvents.filter((event) => event.eventType === 'correction').map((event) => `${event.projectId}\u0000${event.correctsEventId}`));
const events = uniqueEvents.filter((event) => !corrected.has(`${event.projectId}\u0000${event.eventId}`) && event.signal);
const groups = new Map();
for (const event of events) {
  const id = `${event.signal.key}\u0000${event.signal.value}`;
  if (!groups.has(id)) groups.set(id, []);
  groups.get(id).push(event);
}

const proposals = [];
for (const items of groups.values()) {
  const support = items.filter((e) => e.signal.polarity === 'support');
  const contradict = items.filter((e) => e.signal.polarity === 'contradict');
  const distinctProjects = new Set(support.map((e) => e.projectId));
  const distinctDomains = new Set(support.map((e) => e.domain).filter((value) => typeof value === 'string' && value.trim()));
  const independentlyRepeated = distinctProjects.size >= 2 || distinctDomains.size >= 2;
  const meanConfidence = support.length ? support.reduce((sum, e) => sum + Number(e.confidence || 0), 0) / support.length : 0;
  const contradictConfidence = contradict.length ? contradict.reduce((sum, e) => sum + Number(e.confidence || 0), 0) / contradict.length : 0;
  if (support.length < minCount || !independentlyRepeated || meanConfidence < minConfidence || contradict.length >= support.length) continue;
  const { key, value } = support[0].signal;
  const summarize = (event) => ({
    eventId: event.eventId,
    projectId: event.projectId,
    domain: event.domain || null,
    artifactId: event.artifactId,
    scope: event.scope,
    confidence: event.confidence,
    evidence: event.evidence
  });
  proposals.push({
    key,
    value,
    candidateWording: `When project and domain context permit, prefer ${value} for ${key}.`,
    supportEventIds: support.map((e) => e.eventId),
    contradictEventIds: contradict.map((e) => e.eventId),
    supportingEvidence: support.map(summarize),
    contradictingEvidence: contradict.map(summarize),
    supportCount: support.length,
    contradictCount: contradict.length,
    distinctProjects: distinctProjects.size,
    distinctDomains: distinctDomains.size,
    meanConfidence: Number(meanConfidence.toFixed(3)),
    meanContradictConfidence: Number(contradictConfidence.toFixed(3)),
    scopeCaveat: contradict.length ? 'Contradictory evidence exists; preserve contextual exceptions and do not generalize without user review.' : 'Evidence spans contexts but remains a proposal, not a universal rule.',
    status: contradict.length ? 'proposal-with-contradictions-requires-user-approval' : 'proposal-requires-user-approval'
  });
}

process.stdout.write(`${JSON.stringify({
  schemaVersion: 1,
  thresholds: {minCount, minConfidence},
  eligibilityRule: 'Support count must meet minCount, span at least two projects or named domains, meet mean confidence, and outnumber contradictions. Contradiction confidence and contextual specificity are reported but do not independently veto a proposal.',
  proposals
}, null, 2)}\n`);
