#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

function argsOf(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith('--')) out[argv[i].slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
  }
  return out;
}

const args = argsOf(process.argv.slice(2));
if (!args.write || !args.primary) {
  console.error('Usage: node configure-user.mjs --write --primary <TASTE.md> [--fallback <capsule.md>]');
  process.exit(2);
}

const primary = path.resolve(String(args.primary));
const fallback = args.fallback ? path.resolve(String(args.fallback)) : null;
if (!fs.existsSync(primary)) throw new Error(`Primary taste file does not exist: ${primary}`);
if (fallback && !fs.existsSync(fallback)) throw new Error(`Fallback taste file does not exist: ${fallback}`);

const file = path.join(os.homedir(), '.codex', 'design-layer', 'config.json');
const payload = {
  schemaVersion: 1,
  taste: { primary, fallback, readOnly: true }
};
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
process.stdout.write(`${JSON.stringify({configured: file, taste: payload.taste}, null, 2)}\n`);
