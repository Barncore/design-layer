# Attribution and third-party notices

Design Layer

Copyright 2026 Design Layer contributors.

Design Layer's own code and documentation are distributed under Apache License 2.0. Included third-party material retains its original licence. This notice describes source influence and redistribution; it does not imply endorsement by upstream authors.

## Adapted guidance

The guidance combines project-specific orchestration with selected, rewritten mechanics from these sources. It does not install their original skill packs or reproduce a complete upstream workflow.

| Source | Contribution | Licence evidence |
| --- | --- | --- |
| [Anthropic frontend-design](https://github.com/anthropics/skills/tree/b29e7cf65e5cb78a5ac33d582270551bc74a14eb/skills/frontend-design) | Subject grounding, deliberate visual direction and self-critique | [Original Apache 2.0 text](licenses/anthropic-frontend-design.txt) |
| [Emil Kowalski skills](https://github.com/emilkowalski/skills/tree/de33dbed000212b54400a33767d1e4d03654db2a) | Motion gating, interruption and interaction craft | [Original MIT text and copyright](licenses/emilkowalski-skills.txt) |
| [Jakub Krehel skills](https://github.com/jakubkrehel/skills/tree/a67333399dabbc71d7778962cb9c4fb9b86a00d0) | Interface craft, accessibility, type, colour and layout | [Original MIT text and copyright](licenses/jakubkrehel-skills.txt) |
| [Vercel Labs agent-skills](https://github.com/vercel-labs/agent-skills/tree/7c180d9044c9ae2b442b567aad4e42a28dd5ed62) | Reference influence: concise, source-located interface review | MIT is declared in the [pinned README](https://github.com/vercel-labs/agent-skills/blob/7c180d9044c9ae2b442b567aad4e42a28dd5ed62/README.md). That revision has no standalone licence file. No Vercel implementation is bundled. |
| [Paul Bakaus's Impeccable](https://github.com/pbakaus/impeccable/tree/a075d89bdbe60b2b00220cb0527fb5091e84215e) | Product/design context separation, transformation lenses and optional tool integration | [Original Apache 2.0 text](licenses/impeccable.txt) and [upstream notices](licenses/impeccable-NOTICE.md) |

The 0.4.0 craft expansion also adapts selected principles from these separately pinned sources:

| Source | Contribution | Licence evidence |
| --- | --- | --- |
| [Emil Kowalski: apple-design, prototype and animation-vocabulary](https://github.com/emilkowalski/skills/tree/e8a175de22ae1e49370fc144c1f3bb9aeedf988d/skills) | Direct manipulation, realistic interactive comparisons and descriptive motion vocabulary | [Original MIT text](licenses/emilkowalski-craft-expansion.txt) |
| [Jakub Krehel: OKLCH](https://github.com/jakubkrehel/oklch-skill/tree/0e81f040e16d48fcc61d3e1b7ea548542371321f) | Palette construction, gamut and theme relationships, with contrast guidance checked against W3C | [Original MIT text](licenses/jakubkrehel-oklch.txt) |
| [Raphael Salaja: User Interface Wiki](https://github.com/raphaelsalaja/userinterface-wiki/tree/256a954080c8bcf1b1ceb1e2a4079d1f24cf593a) | Selected principles for measurement, lifecycle, sound, prefetch, icon and type craft | [Original MIT text](licenses/userinterface-wiki.txt) |

Adaptations narrow the sources to the current brief, separate subjective advice from objective defects, and add Design Layer's own routing, evidence and feedback boundaries. Exact recorded revisions are in [sources.lock.json](sources.lock.json).

## Bundled executable

`runtime/impeccable/engine/` contains the unmodified `@impeccable/cli-windows-x64` package version `0.1.5`. The executable reports version `4.0.0`; those are different labels, both retained rather than reconciled by assumption. The package's [licence](runtime/impeccable/engine/LICENSE), metadata and file hashes are included. [Provenance](runtime/impeccable/provenance.json) records registry integrity and the exact executable hash. The launcher and finding adapter are Design Layer code.

## Linked reference material

Rauno Freiberg's [interaction design guidance](https://rauno.me/craft/interaction-design), Apple and Android documentation, and the 21st.dev catalogue are linked references. No catalogue component code, downloaded image collection or upstream platform skill pack is included. Check the licence of any implementation subsequently retrieved from those sources.

The upstream Impeccable notice credits ehmo's `platform-design-skills` for its platform references. That notice is preserved; Design Layer does not claim authorship of those sources.

Personal taste profiles, private comparison archives and development transcripts are not part of this distribution. See [the lineage map](docs/lineage.md) for the distinction between inherited mechanics, Design Layer's own workflow and runtime dependencies.
