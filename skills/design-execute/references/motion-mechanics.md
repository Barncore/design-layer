# Motion mechanics

## Gate motion first

Name its purpose: feedback, spatial consistency, state indication, transition continuity, explanation, or rare delight. If no purpose survives, ship no custom motion.

High-frequency and keyboard-driven interactions should be instant or nearly imperceptible. Reserve expressive motion for rare moments. Data the user must read or act on should not move decoratively.

## Implementation order

1. Use the cheapest suitable primitive: CSS transition, CSS animation, WAAPI, then an existing motion library only when springs, gestures, layout, or exit orchestration require it.
2. Prefer compositor-friendly `transform` and `opacity`; avoid animating layout properties without a real need.
3. Entrances/exits generally need strong ease-out; on-screen travel generally needs ease-in-out; repeated feedback stays short.
4. Transitions retarget better than keyframes for rapidly interrupted actions.
5. Motion must not be the only state cue.
6. Gate hover motion with hover/pointer capability.
7. Respect `prefers-reduced-motion` with a gentler, less spatial alternative.

Inspect enter, interruption, reversal, and exit. A beautiful entrance with a confused exit is still confused.

This reference adapts general mechanics from the pinned Emil Kowalski skills; values should first reuse the project's existing motion tokens.
