# iOS and iPadOS decisions

Use current [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) for platform facts.

Respect safe areas and system gestures. Distinguish navigation through a hierarchy from a temporary task presented in a sheet. Preserve position and entered data when dismissing, returning or changing size. Avoid turning every task into a modal stack.

Design text growth with Dynamic Type and inspect large accessibility sizes. A compact control arrangement may need to become a vertical flow. Preserve the information hierarchy rather than shrinking the text. Consider VoiceOver order, names, actions and focus after transitions. Pair haptic or sound feedback with visible state.

On iPad, account for changing window sizes, multi-column contexts, pointer and keyboard input. A larger screen is an opportunity for simultaneous context, not simply a magnified phone. Custom motion and materials still need clear boundaries, readable contrast and reduced-motion/transparency alternatives where relevant.

Sources: [layout](https://developer.apple.com/design/human-interface-guidelines/layout), [typography](https://developer.apple.com/design/human-interface-guidelines/typography). Links are living guidance; this file intentionally avoids freezing platform dimensions and API versions.
