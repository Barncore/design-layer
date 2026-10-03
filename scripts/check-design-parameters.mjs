import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Stable catalogue IDs and file routes make lost research detectable at packaging time.
export function checkDesignParameters(root) {
  const relative = 'skills/design-router/references/design-parameters';
  const directory = path.join(root, relative);
  const manifest = JSON.parse(fs.readFileSync(path.join(directory, 'manifest.json'), 'utf8'));
  const expectedCounts = {composition:9, spacing:7, typography:10, colour:8, imagery:6,
    material:7, motion:8, interaction:7, navigation:7, narrative:6, generative:6, adaptation:5};
  assert.equal(manifest.parameterCount, 86, 'Field guide must retain all 86 parameters');
  assert.equal(manifest.sourceCount, 44, 'Field guide must retain all 44 sources');
  assert.deepEqual(manifest.domains.map(d => d.id).sort(), Object.keys(expectedCounts).sort());
  assert.equal(manifest.sourceIds.length, 44, 'Unexpected source ID count');
  assert.equal(new Set(manifest.sourceIds).size, 44, 'Duplicate or missing source IDs');
  const sources = fs.readFileSync(path.join(directory, 'sources.md'), 'utf8');
  const sourceAnchors = [...sources.matchAll(/<a id="([^"]+)"><\/a>/g)].map(m => m[1]);
  assert.deepEqual(sourceAnchors.sort(), [...manifest.sourceIds].sort(), 'Source targets disagree');
  const allIds = [];
  const domainFiles = [];
  for (const domain of manifest.domains) {
    const file = path.resolve(directory, domain.file);
    assert.equal(path.dirname(file), path.resolve(directory), 'Domain file must stay in its directory');
    domainFiles.push(file);
    assert.equal(domain.parameters.length, expectedCounts[domain.id], domain.id);
    const text = fs.readFileSync(file, 'utf8');
    const sections = [...text.matchAll(/^## ([a-z]+-\d{2}): (.+)\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];
    assert.deepEqual(sections.map(m => ({id:m[1], title:m[2].trim()})), domain.parameters,
      `Missing, duplicate or mismatched parameter in ${domain.file}`);
    for (const [index, parameter] of domain.parameters.entries()) {
      assert.equal(parameter.id, `${domain.id}-${String(index+1).padStart(2,'0')}`);
      for (const field of ['Alternatives', 'What changes', 'Apply to the brief']) {
        assert.match(sections[index][3], new RegExp(`\\*\\*${field}:\\*\\* \\S`),
          `Missing ${field} for ${parameter.id}`);
      }
      allIds.push(parameter.id);
    }
    for (const id of domain.sourceIds) {
      assert.ok(manifest.sourceIds.includes(id), `Unknown source ${id}`);
      assert.ok(text.includes(`](sources.md#${id})`), `Unlinked source ${id} in ${domain.file}`);
    }
  }
  assert.equal(new Set(allIds).size, 86);
  function localMarkdownLinks(file) {
    const text = fs.readFileSync(file, 'utf8');
    return [...text.matchAll(/\]\(([^)]+)\)/g)].flatMap(m => {
      if (/^(https?:|mailto:|#)/.test(m[1])) return [];
      const target = path.resolve(path.dirname(file), decodeURIComponent(m[1].split('#')[0]));
      return target.endsWith('.md') && target.startsWith(path.resolve(root)+path.sep) ? [target] : [];
    });
  }
  const guide = path.resolve(directory, '../design-parameters.md');
  const indexLinks = localMarkdownLinks(guide);
  for (const file of domainFiles) assert.ok(indexLinks.includes(file), `Unreachable domain: ${path.basename(file)}`);
  for (const lane of ['design-router','design-explore','design-execute','design-critique']) {
    const entry = path.join(root, 'skills', lane, 'SKILL.md');
    assert.ok(localMarkdownLinks(entry).includes(guide), `Missing field-guide route from ${lane}`);
  }
  return {parameters:allIds.length, domains:domainFiles.length, sources:manifest.sourceIds.length};
}
