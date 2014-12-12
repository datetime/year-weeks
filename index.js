/**
 * year-weeks <https://github.com/datetime/year-weeks>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var yearDays = require('year-days');

module.exports = function yearWeeks(value) {
  return (yearDays(value) / 7) | 0;
};
