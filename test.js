var postcss = require('postcss');
var test = require('ava');

var css = '.foo { margin: 10px 5px 10px 5px; }';

test.cb('collapse values', function(t) {
  postcss([require('./')])
  .process(css)
  .then(function(result) {
    t.is(result.css, '.foo { margin: 10px 5px; }');
    t.end();
  });
});
