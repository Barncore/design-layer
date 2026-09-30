#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function argsOf(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith('--')) out[argv[i].slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
  }
  return out;
}

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function existsFile(file) {
  try { return fs.statSync(file).isFile(); } catch { return false; }
}

const args = argsOf(process.argv.slice(2));
const root = path.resolve(String(args.root || process.cwd()));
const pluginDefaults = fileURLToPath(new URL('../../../config/defaults.json', import.meta.url));
const userConfig = path.join(os.homedir(), '.codex', 'design-layer', 'config.json');
const defaults = readJson(pluginDefaults) || {};
const user = readJson(userConfig) || {};
const taste = { ...(defaults.taste || {}), ...(user.taste || {}) };
if (process.env.DESIGN_LAYER_TASTE_PRIMARY) taste.primary = process.env.DESIGN_LAYER_TASTE_PRIMARY;
if (process.env.DESIGN_LAYER_TASTE_FALLBACK) taste.fallback = process.env.DESIGN_LAYER_TASTE_FALLBACK;

const candidates = {
  product: path.join(root, 'PRODUCT.md'),
  design: path.join(root, 'DESIGN.md'),
  designBrief: path.join(root, 'DESIGN-BRIEF.md'),
  projectConfig: path.join(root, '.design-layer', 'config.json'),
  projectOverlay: path.join(root, '.design-layer', 'project-overlay.md'),
  feedbackEvents: path.join(root, '.design-layer', 'events.jsonl'),
  tastePrimary: taste.primary ? path.resolve(taste.primary) : null,
  tasteFallback: taste.fallback ? path.resolve(taste.fallback) : null
};

const files = Object.fromEntries(Object.entries(candidates).map(([key, file]) => [key, {
  path: file,
  exists: Boolean(file && existsFile(file)),
  authority: key === 'product' ? 3 : key === 'design' ? 4 : key === 'projectOverlay' ? 5 : key.startsWith('taste') ? 6 : null
}]));

const result = {
  schemaVersion: 1,
  root,
  sideEffects: false,
  configSources: {
    pluginDefaults: { path: pluginDefaults, exists: existsFile(pluginDefaults) },
    userConfig: { path: userConfig, exists: existsFile(userConfig) }
  },
  files,
  notes: [
    'Load only relevant files reported as present.',
    'tasteFallback is a compact derivative when it points to the configured capsule; do not treat it as independent corroboration.',
    'Do not create missing files during review-only work.'
  ]
};

process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
