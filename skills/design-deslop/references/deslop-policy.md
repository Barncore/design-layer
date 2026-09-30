# Deslop policy

## Evidence boundary

Prefer an actual diff. Classify each proposed removal as introduced by the current work, pre-existing debt, or uncertain. Touch pre-existing debt only when the user explicitly includes it or it blocks safe cleanup.

## Common cruft

- wrappers with no semantic, styling, layout, or state function
- duplicate components or tokens created instead of reusing the system
- abstraction used once that hides simpler local logic
- decorative chips, dividers, icon tiles, gradients, glows, or cards with no brief-level purpose
- vague headings, fake metrics, repeated helper copy, or promotional filler
- comments that narrate syntax rather than explain constraints
- dependency added for a primitive already available

## Protected material

Do not remove code solely because it looks verbose when it supplies accessibility, keyboard behavior, reduced motion, responsive states, error recovery, validation, security, localization, analytics required by the product, or browser compatibility.

Do not normalize away the approved signature idea. "Deslop" is not a beigeification engine.

## Proof

Run tests proportionate to the change. For visual work, compare representative before/after renders and primary interaction states. If visual or runtime comparison is unavailable, report that limit.
