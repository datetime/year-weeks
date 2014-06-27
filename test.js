/*!
 * year-weeks <https://github.com/tunnckoCore/year-weeks>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var yearWeeks = require('./');

it('should get the number of weeks in a year - leap or not', function () {
  assert(yearWeeks() === 52);
  assert(typeof yearWeeks() === 'number');
});
