# Audit gate policy

## Hard gates

Use `fail` only for demonstrable violations of requirements such as:

- inaccessible name, keyboard trap, unreachable control, invisible focus, or unusable contrast
- unsafe/destructive action without required confirmation or recovery
- broken required flow, invalid output format, missing required content, build/runtime error
- responsive clipping or overlap that hides required content or control
- motion that ignores a hard reduced-motion requirement or creates a material safety/usability problem
- semantic deception, false system state, or feedback that contradicts the result

Severity:

- critical: safety, irreversible loss, or broadly unusable primary flow
- high: blocks a primary task or a required accessibility path
- medium: materially impairs a secondary path or common state
- low: objective defect with narrow impact

## Heuristic warnings

Use `warn` for likely but contextual problems: inconsistent tokens, card nesting, unclear hierarchy, weak empty states, excessive animation, arbitrary ornament, copy friction, or a maintainability hazard without demonstrated failure.

## Critique

Use `critique` for subjective interpretation: visual identity, emotional register, originality, intentional glow/gradient/asymmetry, density preference, balance, or taste fit.

## Evidence standard

Every finding names the check, observed evidence, location, impact, and proposed fix. If a runtime claim has not been exercised, mark it unverified.
