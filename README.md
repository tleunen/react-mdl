# React-MDL

React-MDL is a set of React components build on top of [Material Design Lite](https://github.com/google/material-design-lite). It's based on their version 1.0.4.

## Requirements
Because of an issue with the original Layout component from MDL that makes it incompatible with React (a fix is already submitted and should land in MDL 2.0), you can't use the original .js and .css files. Instead, I provide you the files with my the fix. ([Read this for more information on the issue](https://github.com/google/material-design-lite/issues/1356)).

The files are available in this repository inside the `/demo/`: [material.css](/demo/material.css) and [material.js](/demo/material.js)
```
<link rel="stylesheet" href="material.css">
<script src="material.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## How to use the components

### import the entire library
```
import ReactMDL from 'react-mdl';

var Button = ReactMDL.Button;
var Card = ReactMDL.Card

// or
import { Button, Card, CardText } from 'react-mdl';
```

### import a specific component
```
import Button from 'react-mdl/lib/Button';
import Card, { CardText, CardActions } from 'react-mdl/lib/card/Card';
```

## How to run the demos
Clone the repository, install the dependencies and run the demo server, then hit `http://localhost:8080/demo/` with your favourite browser.
```
npm install
npm run demo
// go to http://localhost:8080/demo/
```

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.
