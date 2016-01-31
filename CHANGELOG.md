# Change Log

All notable changes to the project will be documented in this file.

## [1.3.0]

- Adds the Text and Article templates on the documentation website
- Adds `hideDesktop`, `hidePhone`, `hideTablet` props in `Cell`
- Adds `shadow` prop in `Grid` and `Cell`
- Adds `component` prop in `Grid`, `Cell` and `Content`
- Changes `HeaderRow` to only render a `Spacer` if a title is present

[1.3.0]: https://github.com/tleunen/react-mdl/compare/v1.2.0...v1.3.0

## [1.2.0]

- Adds `shadow` prop on `DataTable`
- Changes `RadioGroup` to be controlled or uncontrolled ([#180])
- Changes the propTypes of `DataTable` to be less strict
- Adds `tooltip` and `className` in the column description of `DataTable`
- Deprecates `data` in favor of `rows` in `DataTable`
- Deprecates `selectable` in `DataTable`

[1.2.0]: https://github.com/tleunen/react-mdl/compare/v1.1.0...v1.2.0
[#180]: https://github.com/tleunen/react-mdl/issues/180

## [1.1.0]

- Adds new `tabBarProps` to `Tabs` ([#160])
- Fixes the propTypes of Tabs ([#160])
- Fixes the `error` propType of `Textfield` ([#179])

[1.1.0]: https://github.com/tleunen/react-mdl/compare/v1.0.4...v1.1.0
[#160]: https://github.com/tleunen/react-mdl/issues/160
[#179]: https://github.com/tleunen/react-mdl/issues/179

## [1.0.4]

- Fixes the validity of a `TextField` when specifying an `error` ([#156])

[1.0.4]: https://github.com/tleunen/react-mdl/compare/v1.0.3...v1.0.4
[#156]: https://github.com/tleunen/react-mdl/issues/156

## [1.0.3]

- Adds `noSpacing` prop to `Grid` component
- Changes some propTypes in `Layout` to accept more renderables ([#147])
- Fixes the updates of `disabled`and `checked` on `Checkbox` ([#136])
- Fixes the updates of `disabled`and `checked` on `Radio` and `IconToggle`

[1.0.3]: https://github.com/tleunen/react-mdl/compare/v1.0.2...v1.0.3
[#136]: https://github.com/tleunen/react-mdl/issues/136
[#147]: https://github.com/tleunen/react-mdl/issues/147

## [1.0.2]

- Adds `CardMedia` component ([#114])
- New documentation website

[1.0.2]: https://github.com/tleunen/react-mdl/compare/v1.0.1...v1.0.2
[#114]: https://github.com/tleunen/react-mdl/issues/114

## [1.0.1]

- Fixes imports module ([#109])

[1.0.1]: https://github.com/tleunen/react-mdl/compare/v1.0.0...v1.0.1
[#109]: https://github.com/tleunen/react-mdl/issues/109


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

[1.0.0]: https://github.com/tleunen/react-mdl/compare/v0.15.0...v1.0.0
[#77]: https://github.com/tleunen/react-mdl/issues/77
[#106]: https://github.com/tleunen/react-mdl/issues/106
[#85]: https://github.com/tleunen/react-mdl/issues/85
[#90]: https://github.com/tleunen/react-mdl/issues/90
[#83]: https://github.com/tleunen/react-mdl/issues/83
[#79]: https://github.com/tleunen/react-mdl/issues/79
[#78]: https://github.com/tleunen/react-mdl/issues/78
[#84]: https://github.com/tleunen/react-mdl/issues/84
[#66]: https://github.com/tleunen/react-mdl/issues/66
