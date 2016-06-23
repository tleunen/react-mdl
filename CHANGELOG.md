# Change Log

All notable changes to the project will be documented in this file.

## [1.5.4]

### New
- Adds `hideSpacer` prop on the `Header` and `HeaderRow` ([#282])

### Fixes
- Fixes the generated bundled React-MDL files ([#301])
- Fixes/Removes the default upgrade elements by MDL since it's done by our components ([#302])

[1.5.4]: https://github.com/tleunen/react-mdl/compare/v1.5.3...v1.5.4
[#282]: https://github.com/tleunen/react-mdl/issues/282
[#301]: https://github.com/tleunen/react-mdl/issues/301
[#302]: https://github.com/tleunen/react-mdl/issues/302

## [1.5.3]

### New
- New documentation using [gatsby]

### Fixes
- Fixes `Slider` documentation ([#268])
- Fixes react export names in the bundle files ([#267])
- Fixes multiple `is-invalid` clasname on `Textfield` ([#277])
- Fixes `Navigation` not working with null/false children ([#278])
- Fixes `Badge` not retaining classnames from its child ([#279])
- Fixes `Layout` invariant violation error ([#280])

[1.5.3]: https://github.com/tleunen/react-mdl/compare/v1.5.2...v1.5.3
[gatsby]: https://github.com/gatsbyjs/gatsby
[#267]: https://github.com/tleunen/react-mdl/issues/267
[#268]: https://github.com/tleunen/react-mdl/issues/268
[#277]: https://github.com/tleunen/react-mdl/issues/277
[#278]: https://github.com/tleunen/react-mdl/issues/278
[#279]: https://github.com/tleunen/react-mdl/issues/279
[#280]: https://github.com/tleunen/react-mdl/issues/280

## [1.5.2]

### Fixes
- Fixes layout `Header` in small screens ([#264])
- Fixes uncontrolled `Slider` ([#263])

[1.5.2]: https://github.com/tleunen/react-mdl/compare/v1.5.1...v1.5.2
[#264]: https://github.com/tleunen/react-mdl/issues/264
[#263]: https://github.com/tleunen/react-mdl/issues/263

## [1.5.1]

### Fixes
- Fixes `Slider` UI background when it receives a new value ([#261])
- Fixes javascript error when using tabs ([#255])

### New
- Adds `jsnext:main` field in `package.json` for ES6 build tools ([#259])
- Adds support for all version of React 15 rc.
- Updates to MDL 1.1.3

[1.5.1]: https://github.com/tleunen/react-mdl/compare/v1.5.0...v1.5.1
[#261]: https://github.com/tleunen/react-mdl/issues/261
[#259]: https://github.com/tleunen/react-mdl/issues/259
[#255]: https://github.com/tleunen/react-mdl/issues/255

## [1.5.0]

### New
- Adds `selectable` and `sortable` props on the `DataTable` component. ([#246])
- Adds `rowKeyColumn` on the `DataTable` component. This allows users to specify the data from the specific column to use as `key` for each rows (usually `id` or `uid`). ([#246])
- Adds support of React 15 rc1.

[1.5.0]: https://github.com/tleunen/react-mdl/compare/v1.4.4...v1.5.0
[#246]: https://github.com/tleunen/react-mdl/issues/246

## [1.4.4]

### Changes/Fixes
- Updates to MDL 1.1.2

[1.4.4]: https://github.com/tleunen/react-mdl/compare/v1.4.3...v1.4.4

## [1.4.3]

### Fixes
- Fixes documentation on IE by including the babel polyfill ([#236])
- Fixes `Textfield` initial invalid state ([#241])
- Tried to resolve memory issue while running tests ([#230])

[1.4.3]: https://github.com/tleunen/react-mdl/compare/v1.4.2...v1.4.3
[#236]: https://github.com/tleunen/react-mdl/issues/236
[#241]: https://github.com/tleunen/react-mdl/issues/241
[#230]: https://github.com/tleunen/react-mdl/issues/230

## [1.4.2]

### Fixes
- Fixes `Snackbar` clear timeer on unmount. ([#227] by [@carpie]).
- Fixes `Dialog` onCancel event. ([#237] by [@Permagate])

[1.4.2]: https://github.com/tleunen/react-mdl/compare/v1.4.1...v1.4.2
[#227]: https://github.com/tleunen/react-mdl/issues/227
[#237]: https://github.com/tleunen/react-mdl/issues/237
[@Permagate]: https://github.com/Permagate
[@carpie]: https://github.com/carpie

## [1.4.1]

### Fixes
- Do not close the `Dialog` with the escape key, by default. Can be customized with the `onCancel` prop. ([#221]).

[1.4.1]: https://github.com/tleunen/react-mdl/compare/v1.4.0...v1.4.1
[#221]: https://github.com/tleunen/react-mdl/issues/221

## [1.4.0]

### New
- New `Dialog` component ([#207] by [@Permagate]).
- New `Snackbar` component ([#208]).
- New `List` component. ([#201] with [@darenju]'s help)
- Adds `overlap` and `noBackground` prop in `Badge`.
- Adds `hideTop` prop in `Layout`.
- Adds position specific props in `Tooltip` ([#214] by [@Permagate]).
- Adds `component` prop in `Tab` in order to fix custom links ([#116])

### Fixes
- Fixes `layout.scss` import paths ([#138]).
- Fixes an issue in `Textfield` when a field replaces another one ([#197])

### Changes
- Changes `for` attribute with `data-mdl-for` in `Menu`.

[1.4.0]: https://github.com/tleunen/react-mdl/compare/v1.3.0...v1.4.0
[#138]: https://github.com/tleunen/react-mdl/issues/138
[#207]: https://github.com/tleunen/react-mdl/issues/207
[#208]: https://github.com/tleunen/react-mdl/issues/208
[#197]: https://github.com/tleunen/react-mdl/issues/197
[#214]: https://github.com/tleunen/react-mdl/issues/214
[#116]: https://github.com/tleunen/react-mdl/issues/116
[#201]: https://github.com/tleunen/react-mdl/issues/201
[@Permagate]: https://github.com/Permagate
[@darenju]: https://github.com/darenju

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
