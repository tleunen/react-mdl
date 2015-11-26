# [React-MDL][react-mdl-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

React-MDL is a set of React components build on top of [Material Design Lite][google-mdl-url]. It's based on their version 1.0.6.

Join the #react-mdl channel of the [Reactiflux Discord][discord-url] community.

## Requirements
Because of an issue with the original Layout component from MDL that makes it incompatible with React (a fix is already submitted and should land in MDL 2.0), you can't use the original .js and .css files. Instead, I provide you the files with my the fix. ([Read this for more information on the issue](https://github.com/google/material-design-lite/issues/1356)).

The files are available in this repository inside the `/extra/` folder: [material.css](/extra/material.css) and [material.js](/extra/material.js)
```html
<link rel="stylesheet" href="material.css">
<script src="material.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## How to use the components

### import the entire library
```js
import ReactMDL from 'react-mdl';

var Button = ReactMDL.Button;
var Card = ReactMDL.Card

// or
import { Button, Card, CardText } from 'react-mdl';
```

### import a specific component
```js
import Button from 'react-mdl/lib/Button';
import { Card, CardText, CardActions } from 'react-mdl/lib/Card';
```

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.

[react-mdl-url]: http://tleunen.github.io/react-mdl/
[travis-image]: https://travis-ci.org/tleunen/react-mdl.svg?branch=master
[travis-url]: https://travis-ci.org/tleunen/react-mdl
[coveralls-image]: https://coveralls.io/repos/tleunen/react-mdl/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/tleunen/react-mdl?branch=master
[google-mdl-url]: https://github.com/google/material-design-lite
[discord-url]: https://discord.gg/0ZcbPKXt5bWTpxL5
