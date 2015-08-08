# React-MDL

React-MDL is a set of React components build on top of [Material Design Lite](https://github.com/google/material-design-lite). It's based on their version 1.0.2.

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

## How to run the demos
Clone the repository, install the dependencies and run the demo server, then hit `http://localhost:8080/` with your favourite browser.
```
npm install
npm run demo
// go to http://localhost:8080/
```

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.
