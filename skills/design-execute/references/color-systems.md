# Colour systems and OKLCH

Use this reference when creating or adjusting a palette, deriving state colours, or building light and dark themes. Preserve an established token API and colour space unless changing them serves the brief. OKLCH is a useful authoring space, not a reason to migrate a working system.

## From colour coordinates to roles

OKLCH separates approximate perceptual lightness (`L`), chroma (`C`) and hue (`H`). Similar lightness steps can help organise a scale, but neither equal `L` nor equal chroma guarantees equal contrast or identical perceived weight across hues. Judge colours at their intended sizes and against their actual neighbours.

Build a primitive palette around the project's anchors, then map it to semantic roles such as surface, text, border, action and status. Components should usually consume those roles so a theme can change the mapping without changing every component. Keep intentional brand colours distinguishable from generated supporting shades. For neutral surfaces, a small amount of chroma can connect the interface to the palette; fully neutral greys can be equally appropriate.

Vary chroma through a scale rather than holding it constant mechanically. Very light and dark colours often need less chroma to remain in gamut. Hue shifts can preserve a colour's character or make adjacent roles distinguishable; a numeric recipe is a starting point for inspection, not an aesthetic requirement. Inspect a real composition with text, controls, large surfaces and status states before approving a swatch ramp.

## Gamut and delivery

A valid OKLCH value may lie outside sRGB or even Display P3. Available chroma depends on both hue and lightness. When a colour exceeds the delivery gamut, reducing chroma while retaining lightness and hue is a useful authoring strategy; verify the resulting colour rather than assuming the browser's gamut mapping preserves every intended distinction. Check gradients as well as endpoints.

CSS syntax support and a display's colour gamut are separate capabilities. Use the project's browser targets and progressive enhancement strategy to decide whether sRGB fallbacks or wider-gamut colours are useful. An `@supports` check establishes syntax support, not the user's display gamut. Check current [CSS colour documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) and the [gamut-mapping specification](https://www.w3.org/TR/css-color-4/#gamut-mapping) when conversion or browser behaviour matters. Avoid homemade conversion arithmetic when an existing, tested colour implementation is available.

## Themes and contrast

Design dark-theme role relationships deliberately: page, raised surface, border, primary text, muted text and accents may need different changes. Inverting lightness values across the palette rarely preserves all of those relationships. Keep semantic names stable; tune the role values for each theme and state.

Measure contrast using the applicable accessibility method on the final foreground/background pair, accounting for transparency and the actual background. OKLCH lightness separation is a screening heuristic, not a contrast test. Under WCAG 2.2 AA, ordinary text needs 4.5:1 and qualifying large text needs 3:1. Large means at least 18 **points**, or 14 points bold, approximately 24 CSS pixels or 18.67 CSS pixels bold; the thresholds are not 18px and 14px. See [WCAG contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) for the definition and exceptions. Evaluate non-text controls under their own applicable criteria.

Before handoff, check representative role pairs in light/dark themes and interactive states, plus the intended fallback. Report measured failures separately from subjective palette preferences. If rendering or measurement was unavailable, leave those claims unverified.
