# Configuration and data handling

## Project files

| File | Purpose | Authority or write behavior |
| --- | --- | --- |
| `PRODUCT.md` | Audience, problem, job and product constraints | Project product authority |
| `DESIGN.md` | Approved visual system and interaction decisions | Project design authority |
| `DESIGN-BRIEF.md`, or the established brief | Current interview synthesis, reasons, interpretations and open choices | Records confirmed intent separately from provisional ideas |
| `.design-layer/config.json` | Documented detector dispositions | Cannot approve away protected accessibility candidates |
| `.design-layer/events.jsonl` | Explicit user reactions and corrections | Appended when feedback recording is authorized |
| `.design-layer/project-overlay.md` | Derived project preference guidance | Rebuildable; ranks below `DESIGN.md` |

Existing context is reused. Reading and resolving context create no files. Design discovery includes maintaining its brief unless writes are prohibited. The optional initializer creates missing files only with `--write` and preserves existing files.

Review-only work does not authorize source edits or automatic feedback records. The optional detector runner does create its requested report directory and reports; invoke it only when those output writes are within the task's scope.

## Optional external preferences

No profile is needed to use the plugin. Its defaults have `null` profile paths. To use your own preference document, ask the agent to run `configure-user.mjs` with `--write`, `--primary` and, optionally, `--fallback`, using the actual document paths. It writes a user configuration under the operating system's home directory at `~/.codex/design-layer/config.json`.

The resolver checks preference paths in this order:

1. `DESIGN_LAYER_TASTE_PRIMARY` and `DESIGN_LAYER_TASTE_FALLBACK` environment variables.
2. The user configuration above.
3. The distributed `config/defaults.json`.

Configured documents remain external and read-only. A summary of a primary profile is not independent evidence. If nothing is configured, the brief and project context are sufficient.

Explicit task instructions and project requirements outrank preference evidence. A preference for another artifact or domain does not automatically apply here. See the [authority order](../skills/design-router/references/authority.md).

## Feedback proposals

The event ledger contains actual user statements or faithful paraphrases, with scope and provenance. It may therefore be private project data. The generated overlay contains a readable subset of that evidence.

The promotion helper operates only on ledgers explicitly supplied to it. It defaults to three supportive events across at least two projects or named domains, mean support confidence of 0.75, and support outnumbering contradictions. Its `--min-count` and `--min-confidence` flags change these thresholds. The `feedback` values in `config/defaults.json` document defaults; the helper does not automatically load them.

It reports contradictory evidence for judgment. Confidence measures certainty of capture and scope, not how strongly somebody likes a design. Qualifying signals become proposals, never automatic edits to global preferences.

The ledger writer checks event shape, duplicate IDs and correction targets, but has no cross-process writer lock. Serialize writes to the same ledger. The overlay is a convenience view, not the complete history; inspect the underlying records when a decision depends on older context.

## Local data and external services

The included context and feedback scripts work on local files. The detector runner writes reports; live editing can create `.impeccable/` state and temporarily modify application source. Live session tokens are credentials and should not be committed.

The plugin adds no telemetry uploader, credential store or hosted service. The host agent and tools you ask it to use have their own data handling. Image generation, web browsing and remote project services remain subject to those tools' behavior and permissions.

This repository's ignore rules exclude common local context, feedback and live-session files. They are only a precaution: inspect the actual files before publishing a project or submitting a contribution. Do not include private profiles, real feedback ledgers, screenshots with personal information or session logs in bug reports.
