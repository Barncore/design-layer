import assert from 'node:assert/strict';
import {checkDesignParameters} from '../scripts/check-design-parameters.mjs';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import test from 'node:test';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const router = 'skills/design-router/scripts/';
const feedback = 'skills/design-feedback/scripts/';
const audit = 'skills/design-audit/scripts/normalize-impeccable.mjs';

function sandbox(t) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(),'design-layer-test-'));
  t.after(() => {
    // Delete only the exact temporary directory allocated for this test.
    assert.equal(path.dirname(path.resolve(tmp)), path.resolve(os.tmpdir()));
    assert.ok(path.basename(tmp).startsWith('design-layer-test-'));
    fs.rmSync(tmp,{recursive:true,force:true});
  });
  const home = path.join(tmp,'home');
  const project = path.join(tmp,'project');
  fs.mkdirSync(home); fs.mkdirSync(project);
  // A child-process home keeps tests away from the installer's real profile.
  const env = {...process.env,HOME:home,USERPROFILE:home};
  delete env.DESIGN_LAYER_TASTE_PRIMARY;
  delete env.DESIGN_LAYER_TASTE_FALLBACK;
  return {tmp,home,project,env};
}
function run(script,args,s) {
  const result = spawnSync(process.execPath,[path.join(root,script),...args],{
    cwd:s.project,env:s.env,encoding:'utf8',windowsHide:true,timeout:10000});
  assert.ifError(result.error);
  return result;
}
function json(script,args,s) {
  const result=run(script,args,s);
  assert.equal(result.status,0,result.stderr);
  return JSON.parse(result.stdout);
}
function fixture(name) { return path.join(root,'tests/fixtures',name); }
function eventFile(s,event,name='event.json') {
  const file=path.join(s.tmp,name);
  fs.writeFileSync(file,JSON.stringify(event));
  return file;
}
function event(id,project='example-a',polarity='support') {
  return {eventId:id,projectId:project,artifactId:'sample-screen',eventType:'selection',
    decision:'Selected the compact comparison.',scope:'project',confidence:0.9,
    evidence:'The same information is easier to scan in this version.',
    provenance:{source:'user',captureMode:'paraphrase'},
    signal:{key:'information-density',value:'compact',polarity}};
}

test('fresh install resolves an existing brief without requiring a profile or writing files',t=>{
  const s=sandbox(t);
  fs.writeFileSync(path.join(s.project,'DESIGN-BRIEF.md'),'# Example brief\n');
  const before=fs.readdirSync(s.project);
  const result=json(router+'resolve-context.mjs',['--root',s.project],s);
  assert.equal(result.files.designBrief.exists,true);
  assert.equal(result.files.tastePrimary.path,null);
  assert.equal(result.files.tasteFallback.path,null);
  assert.equal(result.sideEffects,false);
  assert.deepEqual(fs.readdirSync(s.project),before);
  assert.deepEqual(fs.readdirSync(s.home),[]);
});

test('optional profile configuration stays outside the package and is read-only',t=>{
  const s=sandbox(t),profile=path.join(s.tmp,'preferences.md');
  fs.writeFileSync(profile,'# Synthetic preferences\n');
  json(router+'configure-user.mjs',['--write','--primary',profile],s);
  const result=json(router+'resolve-context.mjs',['--root',s.project],s);
  assert.equal(result.files.tastePrimary.path,profile);
  assert.equal(result.files.tastePrimary.exists,true);
  assert.equal(fs.readFileSync(profile,'utf8'),'# Synthetic preferences\n');
  assert.ok(fs.existsSync(path.join(s.home,'.codex/design-layer/config.json')));
});

test('context initialization requires a write flag and preserves existing files',t=>{
  const s=sandbox(t);
  assert.equal(run(router+'init-context.mjs',['--root',s.project],s).status,2);
  assert.deepEqual(fs.readdirSync(s.project),[]);
  fs.writeFileSync(path.join(s.project,'PRODUCT.md'),'Existing product truth.');
  const result=json(router+'init-context.mjs',['--root',s.project,'--write'],s);
  assert.ok(result.preserved.includes(path.join(s.project,'PRODUCT.md')));
  assert.equal(fs.readFileSync(path.join(s.project,'PRODUCT.md'),'utf8'),'Existing product truth.');
});

test('correction appends preserve history and remove corrected evidence from the overlay',t=>{
  const s=sandbox(t),first=event('sample-event-001');
  json(feedback+'append-event.mjs',['--root',s.project,'--event',eventFile(s,first)],s);
  const correction={...event('sample-event-002'),eventType:'correction',correctsEventId:first.eventId,
    decision:'The comparison was only appropriate for the dense table.',evidence:'Keep that choice scoped to the table.'};
  json(feedback+'append-event.mjs',['--root',s.project,'--event',eventFile(s,correction)],s);
  const result=json(feedback+'build-overlay.mjs',['--root',s.project],s);
  assert.equal(result.events,2); assert.equal(result.active,1);
  const overlay=fs.readFileSync(result.overlay,'utf8');
  assert.ok(overlay.includes(correction.decision));
  assert.ok(!overlay.includes(first.decision));
  const ledger=fs.readFileSync(path.join(s.project,'.design-layer/events.jsonl'),'utf8').trim().split('\n');
  assert.equal(ledger.length,2);
  assert.equal(JSON.parse(ledger[0]).eventId,first.eventId);
  assert.notEqual(run(feedback+'append-event.mjs',['--root',s.project,'--event',eventFile(s,correction)],s).status,0);
});

test('orphan corrections cannot create a misleading ledger',t=>{
  const s=sandbox(t),orphan={...event('sample-event-003'),eventType:'correction',correctsEventId:'missing-event'};
  assert.notEqual(run(feedback+'append-event.mjs',['--root',s.project,'--event',eventFile(s,orphan)],s).status,0);
  assert.ok(!fs.existsSync(path.join(s.project,'.design-layer/events.jsonl')));
});

test('promotion requires independent support and remains a proposal with contradictory evidence',t=>{
  const s=sandbox(t),ledger=path.join(s.tmp,'synthetic-events.jsonl');
  const events=[event('sample-event-004'),event('sample-event-005'),event('sample-event-006')];
  fs.writeFileSync(ledger,events.map(e=>JSON.stringify(e)).join('\n'));
  assert.equal(json(feedback+'propose-promotions.mjs',['--events',ledger],s).proposals.length,0);
  events[2].projectId='example-b';
  events.push(event('sample-event-007','example-c','contradict'));
  fs.writeFileSync(ledger,events.map(e=>JSON.stringify(e)).join('\n'));
  const before=fs.readFileSync(ledger,'utf8');
  const result=json(feedback+'propose-promotions.mjs',['--events',ledger],s);
  assert.equal(result.proposals.length,1);
  assert.equal(result.proposals[0].status,'proposal-with-contradictions-requires-user-approval');
  assert.equal(result.proposals[0].contradictingEvidence.length,1);
  assert.equal(fs.readFileSync(ledger,'utf8'),before);
  assert.deepEqual(fs.readdirSync(s.home),[]);
});

test('corrected-away support cannot qualify a promotion',t=>{
  const s=sandbox(t),ledger=path.join(s.tmp,'synthetic-events.jsonl');
  const events=[event('sample-event-008'),event('sample-event-009'),event('sample-event-010','example-b')];
  events.push({...event('sample-event-011'),eventType:'correction',correctsEventId:'sample-event-008',signal:undefined});
  fs.writeFileSync(ledger,events.map(e=>JSON.stringify(e)).join('\n'));
  assert.equal(json(feedback+'propose-promotions.mjs',['--events',ledger],s).proposals.length,0);
});

test('detector candidates survive a project attempt to approve them away',t=>{
  const s=sandbox(t);
  const result=json(audit,['--input',fixture('impeccable-findings.json'),'--config',fixture('audit-protected-override.json')],s);
  const candidate=result.findings.find(f=>f.candidateHardGate);
  assert.ok(candidate);
  assert.equal(candidate.disposition,'warn');
  assert.equal(candidate.requiresVerification,true);
  assert.ok(result.adapterWarnings.some(w=>w.type==='rejected-protected-override'));
});

test('documented style overrides retain their evidence and reason',t=>{
  const s=sandbox(t);
  const result=json(audit,['--input',fixture('impeccable-findings.json'),'--config',fixture('audit-config.json')],s);
  const approved=result.findings.find(f=>f.disposition==='approved');
  assert.ok(approved);
  assert.ok(approved.overrideReason);
  assert.ok(approved.overrideSourceRef);
});


test('field guide preserves all parameters and is reachable from working skills', () => {
  assert.deepEqual(checkDesignParameters(root), {parameters:86, domains:12, sources:44});
});

function guideSandbox(t) {
  const s = sandbox(t);
  fs.cpSync(path.join(root,'skills'), path.join(s.project,'skills'), {recursive:true});
  return s.project;
}

test('field guide check rejects a lost parameter even when its domain file remains', t => {
  const isolated = guideSandbox(t);
  const file = path.join(isolated,'skills/design-router/references/design-parameters/imagery.md');
  const text = fs.readFileSync(file,'utf8');
  const start = text.indexOf('## imagery-03:');
  const end = text.indexOf('## imagery-04:');
  assert.ok(start >= 0 && end > start);
  fs.writeFileSync(file, text.slice(0,start)+text.slice(end));
  assert.throws(() => checkDesignParameters(isolated), /Missing, duplicate or mismatched parameter/);
});

test('field guide check rejects a complete catalogue disconnected from execution', t => {
  const isolated = guideSandbox(t);
  const file = path.join(isolated,'skills/design-execute/SKILL.md');
  fs.writeFileSync(file, fs.readFileSync(file,'utf8').replace(
    '[design parameter field guide](../design-router/references/design-parameters.md)',
    'design parameter field guide'));
  assert.throws(() => checkDesignParameters(isolated), /Missing field-guide route from design-execute/);
});
