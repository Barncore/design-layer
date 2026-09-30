# Motion mechanics

## Match motion to the brief

Name its purpose: feedback, spatial consistency, state indication, transition continuity, explanation, delight, atmosphere or play. Let that purpose determine its role and intensity.

By default, reserve expressive motion for occasional moments in frequent-use task interfaces, unless the user or project brief calls for a richer motion language. In exploratory or immersive experiences, motion may be central to how the interface communicates and responds. Keep repeated actions responsive and essential information readable.

## Implementation order

1. Choose the simplest approach that preserves the intended behaviour: CSS transitions or animations, WAAPI, or an existing motion library for springs, gestures and orchestration. For deformable surfaces, optical effects or spatial scenes, use the rendering guidance in [expressive-interaction.md](../../design-explore/references/expressive-interaction.md); ordinary element animation may not express the defining effect.
2. For DOM motion, prefer compositor-friendly `transform` and `opacity`; avoid animating layout properties without a real need.
3. For conventional UI transitions, entrances/exits generally need strong ease-out; on-screen travel generally needs ease-in-out; repeated feedback stays short.
4. Transitions retarget better than keyframes for rapidly interrupted actions.
5. Motion must not be the only state cue.
6. Gate hover motion with hover/pointer capability.
7. Respect `prefers-reduced-motion` with a gentler, less spatial alternative.

Inspect enter, interruption, reversal, and exit. A beautiful entrance with a confused exit is still confused.

This reference adapts general mechanics from the pinned Emil Kowalski skills; values should first reuse the project's existing motion tokens.
