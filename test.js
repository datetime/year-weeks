/**
 * year-weeks <https://github.com/datetime/year-weeks>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var yearWeeks = require('./');

it('should get the number of weeks in a year - leap or not', function () {
  assert.strictEqual(typeof yearWeeks(), 'number');
  assert.strictEqual(yearWeeks(), 52);
  assert.strictEqual(yearWeeks(2014), 52);
  assert.strictEqual(yearWeeks(2015), 52);
  assert.strictEqual(yearWeeks(new Date(2016, 0)), 52);
});
