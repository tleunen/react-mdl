# Change Log

All notable changes to the project will be documented in this file.

## [1.0.0]

- Adds `mdlUpgrade` and `MDLComponent` are now exported. ([#77])
- Updates the internal Material Design Lite to 1.0.6 ([#106])
- Changes the path to some components ([#85])
- Changes `ripple` is now false by default ([#90])
- Fixes all components: the `change` function now provides the event object. ([#83])
- Fixes `Textfield` not being updated when receiving a value programmatically ([#79])
- Fixes `Switch` not being updated when receiving new `checked`/`disabled` value programmatically.
- Fixes `Badge` won't be rendered if the child is empty/null. ([#78])
- Fixes `Badge` won't be rendered when the prop `text` is null or undefined. ([#84])
- Fixes `HeaderTabs` to work the same way as `Tabs` ([#66])

[1.0.0]: /compare/v0.15.0...v1.0.0
[#77]: /issues/77
[#106]: /issues/106
[#85]: /issues/85
[#90]: /issues/90
[#83]: /issues/83
[#79]: /issues/79
[#78]: /issues/78
[#84]: /issues/84
[#66]: /issues/66
