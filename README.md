# postcss-collapse [![NPM version](https://badge.fury.io/js/postcss-collapse.svg)](https://npmjs.org/package/postcss-collapse) [![Build Status](https://travis-ci.org/seanc/postcss-collapse.svg?branch=master)](https://travis-ci.org/seanc/postcss-collapse)

> Collapse CSS values into their shortest form

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
