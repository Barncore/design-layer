# Frontend execution mechanics

## Ground the direction

Name the real subject, audience, and page/screen job. Derive imagery, structure, labels, visual rhythm, and metaphors from that world. If the design could be relabelled for an unrelated startup without structural change, it is probably too generic.

## Plan before code

Define a compact system:

- palette roles and actual values
- type roles and scale
- spacing and layout logic
- surfaces, borders, radii, and elevation
- interaction and state language
- one signature element

Review the plan against the brief and project system before implementing. Reuse existing tokens where possible rather than creating a rival mini-constitution in the CSS.

## Craft floor

- Use semantic HTML and native controls first.
- Give every interactive element an accessible name and visible focus state.
- Support keyboard flow, touch targets, hover capability detection, reduced motion, and zoom/text growth.
- Design loading, empty, error, disabled, success, destructive, and long-content states where relevant.
- Keep content concrete and user-facing. Controls use stable, direct verbs.
- Specify transition properties; avoid `transition: all`.
- Avoid ornamental numbers, pills, cards, gradients, icon tiles, or glow unless they encode the subject or approved language.
- Use one icon family and match icon optical weight to adjacent type.
- Keep nested corner radii visually concentric where nested rounded surfaces are intentional.

## Visual verification

Render the artifact at representative wide and narrow viewports. Inspect the actual pixels, not just the DOM. Exercise the primary flow and relevant states. When images or screenshots are part of the brief, verify cropping, focal point, contrast, and responsive behavior.

This reference adapts mechanics from the pinned Anthropic, Jakub Krehel, Vercel Labs, and Impeccable sources listed in the plugin `NOTICE.md`.
