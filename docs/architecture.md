# How the workflow fits together

Design Layer coordinates decisions across a design task. Its skills are instructions followed by the host agent; its scripts handle narrower, repeatable file operations. Installing it does not launch an independent agent or background process.

## From context to a direction

`design-router` identifies the task and reads only relevant context. Project facts and explicit instructions outrank broad preference evidence. Its resolver reports which files exist without creating them.

A new website or app direction can enter the intent interview. The user describes the project from knowledge they already have. The agent infers possible design consequences, asks questions that distinguish competing interpretations, and produces a visual expression of its current understanding. An evolving brief records the result of that discussion.

`design-explore` can develop concepts or vary a single aspect of an established direction. Comparable fidelity matters: a polished option should not win merely because its alternative was presented poorly. The agent recommends based on the brief and the remaining uncertainty.

The shared [parameter field guide](../skills/design-router/references/design-parameters.md) makes the research repertoire available inside the package. Its index routes to twelve domain files containing all 86 stable parameter IDs, alternatives, mechanisms and project-decision guidance. Router, exploration, execution and critique link to it directly, and intent discovery uses it for the agent's creative translation. Domain files connect to the more specialised craft references. Package checks verify completeness and local reachability; the original research folder is not a runtime dependency.

## From a direction to working design

`design-execute` preserves the approved system and implements the relevant states and interactions. Supporting references supply mechanisms when they help: typography, composition, motion, platform adaptation and fine craft. The model still decides how to apply them.

Further execution references are conditional: colour systems for palette and theme work, direct manipulation for gestures, and interaction craft for measurement, lifecycle, sound and loading details. Exploration can use a portable full-size variant picker when behaviour needs comparison. These are principles and implementation lenses; they do not impose one author's visual style or add a runtime dependency.

The shared [repertoire](../skills/design-explore/references/component-repertoire.md) offers optional discovery through 21st.dev, Designeer and Recent. Recent supplies concrete visual examples for exploration, discussion and focused comparison. A task-specific question leads to catalogue candidates, then original examples or primary documentation, and a reasoned choice in the existing brief. Designeer can be queried through browser tools when available; readable links preserve the ordinary browsing route. Catalogue contents remain external and introduce no runtime dependency.

Exploration and execution share an [expressive interaction reference](../skills/design-explore/references/expressive-interaction.md). It connects intended material and spatial behaviour to techniques and rendering choices. It is loaded when those qualities could define the experience, including when the brief implies them without naming a technology. Motion restraint is contextual: a frequent-use task interface and an immersive experience have different needs.

An image that checked understanding is different from an approved implementation target. Execution follows the confirmed intent and selected relationships. Literal image fidelity becomes a requirement only when the user chooses that role for the reference.

## Two kinds of review

`design-audit` checks demonstrable requirements and reports the scope of its evidence. Static inspection cannot establish runtime behavior. A detector finding that might indicate an accessibility failure remains a candidate until verified.

`design-critique` interprets character, hierarchy, composition and experience. It gives reasons and confidence rather than dressing taste up as an objective score. Both workflows default to read-only unless the task authorizes fixes or report files.

The optional detector runner writes report files when deliberately invoked. Its empty findings array does not establish a complete audit. Its operating failure must not be reported as a pass.

`design-deslop` removes introduced clutter while protecting behavior, accessibility and intentional expressive details. Line-count reduction is not a quality metric.

## Feedback and later decisions

`design-feedback` records explicit reactions. The event ledger preserves scope, evidence and provenance; correction events supersede earlier evidence without deleting it. A generated project overlay makes active feedback convenient to read and ranks below approved project design decisions.

The promotion helper can inspect supplied ledgers for recurring structured signals. It reports supporting and contradicting evidence and never edits a global preference file. Its thresholds qualify a proposal for review; they do not establish a universal preference.

This separation is intended to prevent one successful project from imposing its style on every later project. It also makes mistaken inferences correctable without erasing how they arose.

## Runtime boundaries

The context and feedback helpers use Node's standard library. Browser inspection, images and document formats depend on the host's available tools. The bundled Impeccable executable is optional and limited to Windows x64; ordinary source editing and host browser comparison remain alternatives.

`design-live` runs a local editing helper only for an authorized live-edit task. It can inject temporary browser-selection controls and scaffold variants in source. The workflow therefore requires a recoverable snapshot and cleanup checks. It is not intended for deployed sites.

See [configuration](configuration.md) for exact file locations and [validation](validation.md) for what has actually been tested.

## Maintaining the parameter library

The canonical installed content is `skills/design-router/references/design-parameters.md` plus its `design-parameters/` domain files and source guide. Edit the relevant domain's alternatives, mechanism and brief-led decision guidance together. Keep stable parameter IDs and update `manifest.json` deliberately when catalogue structure changes; the original 86 IDs are the integration baseline. The source hash records provenance, not a file that must exist on an installer's machine.

`scripts/check-design-parameters.mjs` is called by the ordinary package check. It checks IDs, required content fields, source anchors, the index's domain links and the four skill entrypoint routes. The regression tests deliberately remove a parameter and disconnect execution to ensure those failures are caught. These checks preserve availability and completeness; they do not judge the quality of creative choices.
