# [React-MDL][react-mdl-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

React-MDL is a set of React components build on top of [Material Design Lite][google-mdl-url] v1.1.3

Join the #react-mdl channel of the [Reactiflux Discord][discord-url] community.

## Requirements
Instead of using the official `material.css` and `material.js` files from the MDL project, you should use the files we provide in [/extra](/extra/). The reason to that is because the official `Layout` component is not fully compatible with React. We made a patch and we re-exported everything so people can still use it.
If you're worried about the changes we made, you can take a look at the [patch note](/extra/layout-patch.diff) or read about the issue in [this ticket](https://github.com/google/material-design-lite/issues/1356).

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

[react-mdl-url]: https://tleunen.github.io/react-mdl/
[travis-image]: https://travis-ci.org/tleunen/react-mdl.svg?branch=master
[travis-url]: https://travis-ci.org/tleunen/react-mdl
[coveralls-image]: https://coveralls.io/repos/tleunen/react-mdl/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/tleunen/react-mdl?branch=master
[google-mdl-url]: https://github.com/google/material-design-lite
[discord-url]: https://discord.gg/0ZcbPKXt5bWTpxL5
