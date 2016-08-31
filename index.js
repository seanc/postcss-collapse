'use strict';

var postcss = require('postcss');
var collapse = require('css-collapse-values');

module.exports = postcss.plugin('collapse', function() {
  return function(root, res) {
    root.walkRules(function(rule) {
      rule.walkDecls(function(decl, i) {
        decl.value = collapse(decl.value.split(' ')).join(' ');
      });
    });
  };
});
