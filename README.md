# postcss-collapse [![NPM version](https://badge.fury.io/js/postcss-collapse.svg)](https://npmjs.org/package/postcss-collapse) [![Build Status](https://travis-ci.org/seanc/postcss-collapse.svg?branch=master)](https://travis-ci.org/seanc/postcss-collapse)

> Collapse CSS values into their shortest form

A postcss plugin for [`css-collapse-values`](https://github.com/jamen/css-collapse-values) that turns your property values into short ones:

```css
.foo {
  padding: 1px 10px 3px 10px;
  border: 0.5em -0.1em 0.5em -0.1em;
  margin: 10px auto 5px auto;
}

/* Collapses to: */

.foo {
  padding: 1px 10px 3px;
  border: .5em -.1em;
  margin: 10px auto 5px;
}
```

## Installation

```sh
$ npm install --save postcss-collapse
```

## Usage

```js
var postcss = require('postcss');
var collapse = require('postcss-collapse');

postcss([collapse])
  .process(css)
  .then(function(result) {
    /* ... */
  });
```

## License

MIT © [Sean Wilson](https://imsean.me)
