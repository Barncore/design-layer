#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

function argsOf(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith('--')) out[argv[i].slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
  }
  return out;
}

function readEvents(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); } catch { throw new Error(`Invalid JSON at ${file}:${index + 1}`); }
  });
}

function safe(text) { return String(text || '').replace(/\s+/g, ' ').trim(); }

const args = argsOf(process.argv.slice(2));
const root = path.resolve(String(args.root || process.cwd()));
const eventsFile = path.join(root, '.design-layer', 'events.jsonl');
const output = path.join(root, '.design-layer', 'project-overlay.md');
const events = readEvents(eventsFile).sort((a, b) => String(a.timestamp).localeCompare(String(b.timestamp)));
const corrected = new Set(events.filter((e) => e.eventType === 'correction').map((e) => e.correctsEventId));
const active = events.filter((e) => !corrected.has(e.eventId));

const lines = [
  '# Design Layer project overlay',
  '',
  '> Derived from explicit append-only feedback. This ranks below DESIGN.md and does not modify global taste.',
  '',
  `Events: ${events.length}; active evidence: ${active.length}.`,
  ''
];

if (!active.length) {
  lines.push('_No explicit feedback recorded yet._', '');
} else {
  const groups = new Map();
  for (const event of active) {
    const key = event.axis || event.signal?.key || 'general';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(event);
  }
  for (const key of [...groups.keys()].sort()) {
    lines.push(`## ${safe(key)}`, '');
    for (const event of groups.get(key).slice(-12)) {
      const choice = event.selected ? ` Selected: ${safe(event.selected)}.` : '';
      const rejected = event.rejected?.length ? ` Rejected: ${event.rejected.map(safe).join(', ')}.` : '';
      lines.push(`- **${event.eventType}** (${event.scope}, confidence ${Number(event.confidence).toFixed(2)}): ${safe(event.decision)}${choice}${rejected}`);
      lines.push(`  Evidence: ${safe(event.evidence)} - \`${event.eventId}\``);
    }
    lines.push('');
  }
}

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${lines.join('\n')}\n`, 'utf8');
process.stdout.write(`${JSON.stringify({events: events.length, active: active.length, overlay: output}, null, 2)}\n`);
