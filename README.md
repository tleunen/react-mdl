# React-MDL

React-MDL is a set of React components build on top of the [Material Design Lite framework](https://github.com/google/material-design-lite).

Here are the list of components in this repo:

- [Button](/src/Button.js)
- [Card](/src/Card.js)
- [Checkbox](/src/Checkbox.js)
- [DataTable](/src/DataTable.js)
- [FABButton](/src/FABButton.js)
- [Icon](/src/Icon.js)
- [IconButton](/src/IconButton.js)
- [Radio](/src/Radio.js)
- [RadioGroup](/src/RadioGroup.js)
- [Switch](/src/Switch.js)
- [Textfield](/src/Textfield.js)

## Requirements
You have to include the CSS, JS and the Material Icons in your project in order to use `react-mdl`.
```
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.min.css">
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js"></script>
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