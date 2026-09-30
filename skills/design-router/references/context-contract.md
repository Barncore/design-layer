# Context contract

## Global, external, read-only

The user's canonical taste sources live outside the plugin. Resolve their paths from:

1. `DESIGN_LAYER_TASTE_PRIMARY` and `DESIGN_LAYER_TASTE_FALLBACK` environment variables.
2. `~/.codex/design-layer/config.json` in the operating system's home directory.
3. The plugin's `config/defaults.json`.

The distributed defaults contain no taste paths or personal profile. If no profile is configured, continue from the project brief and conversation. A taste profile is optional, not a prerequisite for design work.

Treat any configured sources as read-only. If a fallback summarizes the primary, it is a compact aid rather than independent corroboration. See the repository's `docs/configuration.md` for optional setup.

## Project-local

- `PRODUCT.md`: audience, need, use context, core job, product constraints.
- `DESIGN.md`: approved design language, tokens, components, interaction and motion principles, anti-references.
- `DESIGN-BRIEF.md`, or the project's established brief: evolving interview synthesis, including confirmed intent, provisional interpretations, reasons and open questions. Include visual interpretation references and what the user confirmed or corrected; a positive reaction to an interpretation does not approve every pictured design detail. Carry a non-default brief path in the handoff. A draft interpretation has no independent authority over explicit instructions or approved project decisions.
- `.design-layer/config.json`: local options and documented detector overrides.
- `.design-layer/events.jsonl`: append-only explicit feedback events.
- `.design-layer/project-overlay.md`: derived project-local preference guidance.

The overlay ranks below `DESIGN.md`. It is rebuilt from events and may be deleted/recreated without losing evidence.

## Write boundary

Resolving and reading context must be side-effect free. Requested design discovery includes maintaining its evolving brief under [intent-interview.md](intent-interview.md), unless the task explicitly forbids writes. Other project files require authorization for setup or implementation. Review, audit, and critique requests do not authorize creation.
