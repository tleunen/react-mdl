# React-MDL

React-MDL is a set of React components build on top of the [Material Design Lite framework](https://github.com/google/material-design-lite).

Here are the list of components in this repo:

- [x] [Badge](/src/Badge.js)
- [x] [Button](/src/Button.js)
- [x] [Card](/src/Card.js)
- [x] [Checkbox](/src/Checkbox.js)
- [x] [DataTable](/src/DataTable.js)
- [x] [FABButton](/src/FABButton.js)
- [x] [Icon](/src/Icon.js)
- [x] [IconButton](/src/IconButton.js)
- [x] [IconToggle](/src/IconToggle.js)
- Layout
    - [ ] Footer
    - [x] [Grid](/src/Grid.js)
    - [x] [Navigation Layout](/src/Layout.js) in progress
    - [x] [Tabs](/src/Tabs.js)
- [x] [Menu](/src/Menu.js)
- [x] [ProgressBar](/src/ProgressBar.js)
- [x] [Radio](/src/Radio.js)
- [x] [RadioGroup](/src/RadioGroup.js)
- [x] [Slider](/src/Slider.js)
- [x] [Spinner](/src/Spinner.js)
- [x] [Switch](/src/Switch.js)
- [x] [Textfield](/src/Textfield.js)
- [x] [Tooltip](/src/Tooltip.js)

## Requirements
You have to include the CSS, JS and the Material Icons in your project in order to use `react-mdl`.
```
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.min.css">
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## How to use the components

### import the entire library
```
import ReactMDL from 'react-mdl';

var Button = ReactMDL.Button;
var Card = ReactMDL.Card

// or
import { Button, Card } from 'react-mdl';
```

### import a specific component
```
import Button from 'react-mdl/lib/Button';
import Card from 'react-mdl/lib/Card';
```