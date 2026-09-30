# Android and adaptive window decisions

Resolve layout from the available window, not a phone/tablet label. Consider resizing, rotation, folds, insets and the keyboard. A list-detail or supporting-pane arrangement may preserve useful context better than stretching a single column. Keep selected items and entered data stable when the arrangement changes.

Use the system Back model consistently, including transient surfaces and navigation history. Preserve visible focus for keyboard and alternative input. Inspect TalkBack names, reading order and state announcements. Avoid gesture-only actions without an accessible path.

Treat density, font scaling and touch reach as real layout conditions. A brand-specific palette or motion language can coexist with platform components; evaluate contrast and semantic roles after customisation. Use current Android and Material documentation for implementation details, not assumed parity with iOS or an old screenshot.

Sources: [layout basics](https://developer.android.com/design/ui/mobile/guides/layout-and-content/layout-basics), [adaptive apps](https://developer.android.com/develop/ui/compose/layouts/adaptive/get-started-with-adaptive-apps).
