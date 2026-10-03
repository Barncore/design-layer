import assert from 'node:assert/strict';
import {checkDesignParameters} from './check-design-parameters.mjs';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = relative => JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8'));
const portable = read('plugin.json');
const compatibility = read('.codex-plugin/plugin.json');
for (const field of ['name', 'version', 'license']) assert.equal(portable[field], compatibility[field], field);
assert.equal(portable.name, 'design-layer');
assert.equal(portable.license, 'Apache-2.0');
const marketplace = read('.agents/plugins/marketplace.json');
assert.equal(marketplace.plugins.length, 1);
assert.equal(marketplace.plugins[0].name, portable.name);
assert.equal(path.resolve(root, marketplace.plugins[0].source.path), root);
const expected = ['design-audit','design-critique','design-deslop','design-execute','design-explore','design-feedback','design-live','design-router'];
const actual = fs.readdirSync(path.join(root, 'skills')).filter(name => fs.statSync(path.join(root,'skills',name)).isDirectory()).sort();
assert.deepEqual(actual, expected);
for (const skill of actual) {
  const entry = fs.readFileSync(path.join(root,'skills',skill,'SKILL.md'),'utf8');
  assert.match(entry, new RegExp(`^---\\r?\\nname: ${skill}\\r?\\n`));
  assert.match(entry, /\ndescription: .+/);
  assert.ok(fs.existsSync(path.join(root,'skills',skill,'agents','openai.yaml')));
}
const defaults = read('config/defaults.json');
assert.equal(defaults.taste.primary, null);
assert.equal(defaults.taste.fallback, null);
const provenance = read('runtime/impeccable/provenance.json');
for (const [relative, expectedHash] of Object.entries(provenance.files)) {
  const data = fs.readFileSync(path.join(root,'runtime/impeccable/engine',relative));
  assert.equal(crypto.createHash('sha256').update(data).digest('hex'), expectedHash, relative);
}
function files(directory) {
  return fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry => {
    if (['.git','node_modules'].includes(entry.name)) return [];
    const file = path.join(directory,entry.name);
    assert.ok(!entry.isSymbolicLink(), `Unexpected symlink: ${file}`);
    return entry.isDirectory() ? files(file) : [file];
  });
}
let links = 0;
for (const file of files(root).filter(file => file.endsWith('.md'))) {
  const text = fs.readFileSync(file,'utf8');
  for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const local = decodeURIComponent(target.split('#')[0]);
    const resolved = path.resolve(path.dirname(file),local);
    assert.ok(resolved === root || resolved.startsWith(root + path.sep), `Link escapes package: ${target}`);
    assert.ok(fs.existsSync(resolved), `Missing link in ${path.relative(root,file)}: ${target}`);
    links++;
  }
}
assert.ok(fs.existsSync(path.join(root,'LICENSE')));
assert.ok(fs.existsSync(path.join(root,'NOTICE.md')));
const fieldGuide = checkDesignParameters(root);
console.log(`Field guide OK: ${fieldGuide.parameters} parameters, ${fieldGuide.domains} domains, ${fieldGuide.sources} sources, routed from four skills.`);
console.log(`Package OK: ${actual.length} skills, ${links} local links, neutral preferences, matching manifests and pinned engine hashes.`);
