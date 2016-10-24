# [React-MDL][react-mdl-url]
[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status Linux][circleci-image]][circleci-url] [![Coverage Status][coverage-image]][coverage-url] [![React MDL Reactiflux][discord-image]][discord-url]

React-MDL is a set of React components build on top of [Material Design Lite][google-mdl-url]<sup>v1.2.1</sup>

## Requirements
Instead of using the official `material.css` and `material.js` files from the MDL project, you should use the files we provide in [/extra](/extra/). The reason to that is because the official `Layout` component is not fully compatible with React. We made a patch and we re-exported everything so people can still use it.
If you're worried about the changes we made, you can take a look at the [patch note](/extra/layout-patch.diff) or read about the issue in [this ticket](https://github.com/google/material-design-lite/issues/1356).

```html
<link rel="stylesheet" href="material.css">
<script src="material.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

### Create React App

The above instructions won’t work if you use [Create React App](https://github.com/facebookincubator/create-react-app) with `react-scripts` higher than `0.4.0`.  
If you use it, add only this one line to your HTML:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

Then add these lines to `src/index.js`:

```js
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
```

## Installation

`npm install --save react-mdl`


## Usage

You can use React-MDL through a bundler like [webpack][webpack-url] or [browserify][browserify-url] by importing `react-mdl` in your application:

```js
import { Button, Card, CardText } from 'react-mdl';

// or...
import Button from 'react-mdl/lib/Button';
import { Card, CardText, CardActions } from 'react-mdl/lib/Card';
```

Alternatively, you can include `node_modules/react-mdl/out/ReactMDL.js` as a script, but you'll likely want to copy it to a folder outside of `node_modules` first, such as `lib` or `vendor`. Then a global `ReactMDL` will be available:

```js
const { Button, Card, CardText } = ReactMDL;
```

For a listing of available components, as well as specific usage information, check out the [Components][react-mdl-components-url] page on the website.

Some extra components can be found in the [react-mdl-extra](https://github.com/HriBB/react-mdl-extra) package.

## License

MIT, see [LICENSE.md](/LICENSE.md) for details.

[react-mdl-url]: https://react-mdl.github.io/react-mdl/
[google-mdl-url]: https://github.com/google/material-design-lite

[discord-image]: https://img.shields.io/badge/discord-react--mdl%40reactiflux-738bd7.svg
[discord-url]: https://discord.gg/0ZcbPKXt5bWTpxL5

[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/react-mdl/react-mdl

[npm-image]: https://img.shields.io/npm/v/react-mdl.svg
[npm-url]: https://www.npmjs.com/package/react-mdl

[circleci-image]: https://img.shields.io/circleci/project/tleunen/react-mdl/master.svg
[circleci-url]: https://circleci.com/gh/react-mdl/react-mdl

[coverage-image]: https://codecov.io/gh/tleunen/react-mdl/branch/master/graph/badge.svg
[coverage-url]: https://codecov.io/gh/tleunen/react-mdl

[react-mdl-components-url]: https://react-mdl.github.io/react-mdl/components/
[webpack-url]: https://webpack.github.io/
[browserify-url]: http://browserify.org/
