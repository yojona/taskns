'use strict';

var isPlainObj = require('is-plain-obj');

function asserter(json) {
  var items;

  if (json === void 0 || json === null) {
    throw new TypeError('Missing payload');
  }

  items = json.items;

  if (items === void 0 || items === null) {
    throw new TypeError('The `items` member should exist');
  }

  if (!Array.isArray(items)) {
    throw new TypeError('The `items` member should be an array');
  }

  if (items.length < 1) {
    throw new Error('The `items` member should not be empty');
  }

  items.forEach(function (item) {
    if (!isPlainObj(item)) {
      throw new TypeError('Every item in the array should be an object');
    }

    if (typeof item.name !== 'string') {
      throw new TypeError('Every item in the array should have a `name` member (string)');
    }

    if (item.name.length < 1) {
      throw new Error('Every item in the array should not have an empty `name` member');
    }

    if (typeof item.checked !== 'boolean') {
      throw new TypeError('Every item in the array should have a `checked` member (boolean)');
    }
  });
}

module.exports = asserter;
