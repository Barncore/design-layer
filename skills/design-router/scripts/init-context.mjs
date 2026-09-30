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

const args = argsOf(process.argv.slice(2));
const root = path.resolve(String(args.root || process.cwd()));
if (!args.write) {
  console.error('Refusing to write without --write. Context initialization is never implicit.');
  process.exit(2);
}

const files = new Map([
  [path.join(root, 'PRODUCT.md'), `# Product\n\n## Audience\n\n## Need and context\n\n## Single job\n\n## Required behavior\n\n## Constraints\n`],
  [path.join(root, 'DESIGN.md'), `# Design\n\n## Direction\n\n## Visual language\n\n## Typography and color\n\n## Layout and components\n\n## Interaction and motion\n\n## Accessibility commitments\n\n## Anti-references\n`],
  [path.join(root, '.design-layer', 'config.json'), `${JSON.stringify({schemaVersion: 1, audit: {impeccable: {overrides: {}}}}, null, 2)}\n`],
  [path.join(root, '.design-layer', 'events.jsonl'), ''],
  [path.join(root, '.design-layer', 'project-overlay.md'), '# Design Layer project overlay\n\n_No explicit feedback recorded yet._\n']
]);

const created = [];
const preserved = [];
for (const [file, content] of files) {
  if (fs.existsSync(file)) { preserved.push(file); continue; }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  created.push(file);
}

process.stdout.write(`${JSON.stringify({root, created, preserved}, null, 2)}\n`);
