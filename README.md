# Design Layer

**A project-led design workflow for Codex, from understanding the brief to inspecting the finished work.**

Design Layer is a plugin with eight focused skills for designing and refining visible artifacts. Its central idea is that the user understands their project, while the agent should take responsibility for translating that understanding into creative choices.

Instead of asking someone to prescribe spacing, fonts and effects before they have seen anything, it helps the agent discover the project's purpose, audience and character, consider different interpretations, and make a direction concrete enough to discuss. Those decisions then carry into implementation, technical checks, aesthetic critique and explicit feedback.

The intended result is distinctive work suited to its brief, with fewer late corrections caused by misunderstood intent. This is a workflow designed toward that outcome, not a measured guarantee of better design.

## What changes when you use it

- **Discovery gathers creative material.** Questions explore the product or brand as well as missing requirements. The agent considers different readings before settling on a direction.
- **The brief stays alive.** Confirmed intent, provisional interpretations, reasons and open choices live in one evolving document instead of competing chat summaries.
- **Visuals test understanding.** An image can expose an assumption the conversation missed. Agreement with its feeling does not automatically approve every pictured font, colour or layout.
- **Craft follows the project.** Composition, type, motion and imagery develop a coherent character. A favourite style from another project remains contextual evidence.
- **Review separates different kinds of claims.** A broken keyboard flow is a defect. A glow or asymmetrical composition is a design choice to evaluate in context. Automated warnings do not get to decide the project's aesthetic.
- **Feedback can inform later work without becoming dogma.** Explicit reactions are recorded with their scope and reasons. Broader preferences remain proposals for the user to approve.

The plugin is particularly developed for websites and app interfaces. It also routes documents, slides, visualizations and other visible artifacts, while relying on the host's appropriate tools for those formats. It contains no website template, prescribed component library or personal taste profile.

## Start using it

You need a local Codex environment that supports plugins and can read project files. The included helpers use Node.js 22 or later, with no npm dependencies. Image generation and browser inspection use capabilities available in your host; they are not supplied by this repository.

Add this repository as a marketplace:

```text
codex plugin marketplace add Barncore/design-layer
```

Install **Design Layer** from that marketplace in your plugin browser, then begin a new task. In CLI versions that support direct installation:

```text
codex plugin add design-layer@design-layer
```

See [installation and compatibility](docs/installation.md) for local setup, platform limits and the difference between a GitHub release and directory listing.

Start with `$design-router` when the right workflow is unclear. For example:

> Use $design-router to help design this app. Read the existing project material, interview me about what it needs to achieve, and develop a visual direction before building.

Or invoke a focused skill:

> Use $design-critique to explain why this screen feels crowded. Preserve the underlying visual identity and leave the files unchanged.

> Use $design-explore to compare a few ways to make this reading experience more immersive without making navigation harder.

## The intent interview

For a new website or app direction, the normal shape is three rounds with roughly 3–7 focused questions per round:

1. **Discover.** Learn about purpose, people, context, ambitions and distinctive details. Develop three provisional interpretations internally.
2. **Refine the discovery.** Ask project-grounded questions that distinguish, challenge or deepen those interpretations. Allow a better direction to emerge instead of steering the user toward a premature favourite.
3. **Make the interpretation visible.** Open with an image expressing the strongest current reading, or a focused comparison when useful. Use reactions to correct assumptions and resolve consequential choices.

At the close, the user can start building, continue questioning, or see a revised or alternative image. The sequence adapts to existing context, scoped edits and requests to skip it. A user with an approved direction does not need to repeat discovery. If images are unavailable or unwanted, the agent uses a useful alternative representation.

The [full interview guidance](skills/design-router/references/intent-interview.md) explains the process. The [creative philosophy](skills/design-router/references/creative-philosophy.md) explains what it is trying to preserve across different styles.

## The eight skills

| Skill | Use it for | Result |
| --- | --- | --- |
| `design-router` | Understanding the request and finding relevant context | A compact brief and the smallest suitable workflow |
| `design-explore` | Developing a direction or comparing controlled variants | Concrete alternatives and a reasoned recommendation |
| `design-execute` | Building or materially refining a visible artifact | Implemented work with relevant states and verification |
| `design-audit` | Checking correctness, accessibility and operating limits | Evidence-backed defects, contextual warnings and untested areas |
| `design-critique` | Judging hierarchy, character, coherence and experience | A read-only diagnosis and focused refinement advice |
| `design-feedback` | Recording explicit selections, rejections and reactions | An event record, project guidance and optional preference proposals |
| `design-deslop` | Cleaning introduced code, copy or visual clutter | A smaller, clearer change that preserves intentional craft |
| `design-live` | Selecting an element in a local browser and trying edits | Scoped live variants, using the optional Windows tool |

Only relevant skills and references are loaded. The supporting repertoire covers frontend and motion mechanics, optical and typographic detail, translating reactions into changes, concept fidelity, native platform considerations, and component/effect families. Reference catalogues such as 21st.dev are optional sources of ideas, not required installations.

## Context and feedback

The agent reads whichever project materials exist. `PRODUCT.md` describes the product, `DESIGN.md` holds approved design decisions, and `DESIGN-BRIEF.md` carries the evolving discovery brief. These files are conventions, not prerequisites that must all be filled before work can begin.

Explicit feedback can be saved in `.design-layer/events.jsonl`. Corrections are appended; they do not erase the earlier record. A helper derives project guidance from active feedback. Another can propose broader preferences from repeated evidence, but never changes a global profile itself. This is ordinary file-based continuity, not model training or a background memory service.

Optional personal preferences live outside the plugin and are read-only. The shipped configuration contains no profile or personal paths. See [configuration and data handling](docs/configuration.md) for authority, files, write boundaries and setup.

## Tools, evidence and limits

Most of Design Layer is guidance followed by the active agent. It does not start a background agent, enforce every instruction through software, or replace judgment with an originality score.

The optional Impeccable engine is bundled for **Windows x64 only**. It adds supplementary source/browser detection and experimental local live editing. Its notices and exact package/binary identifiers are retained. The ordinary design, critique and audit guidance does not require it.

Testing has covered helper behavior, package structure and a bounded Windows detector/live-edit pilot. That pilot also exposed limitations, including a missed unlabelled input and cleanup risks with minified HTML. Broad framework compatibility and consistent creative improvement are not established. See [validation and known limits](docs/validation.md).

There is no bundled MCP server, API key, hook or automatic dependency installer. Normal host subscriptions, image-tool access and project dependencies remain separate.

## Development and lineage

Run the portable package and helper checks from this checkout:

```text
node scripts/check-package.mjs
node --test tests/public-release.test.mjs
```

Read the [lineage map](docs/lineage.md) for sources and adaptations, the [architecture](docs/architecture.md) for how the parts connect, and [NOTICE.md](NOTICE.md) for attribution. Contributions should preserve project-led judgment, honest evidence boundaries and the distinction between user intent and an agent's inference.

Design Layer's own code and documentation are licensed under [Apache 2.0](LICENSE). Third-party material retains its stated licence and notices. This project is independent of the source projects and their authors.
