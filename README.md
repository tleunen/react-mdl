# React-MDL

React-MDL is a set of React components build on top of the [Material Design Lite framework](https://github.com/google/material-design-lite).

Here are the list of components in this repo:

- [Button](/src/Button.js)
- [Card](/src/Card.js)
- [Checkbox](/src/Checkbox.js)
- [DataTable](/src/DataTable.js)
- [FABButton](/src/FABButton.js)
- [Textfield](/src/Textfield.js)

## Requirements
The `CSS` and fonts from MDL are required.
```
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.css">
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


#### Notes

These components doesn't have the ripple effect, yet.
