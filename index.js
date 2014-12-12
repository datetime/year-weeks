/**
 * year-weeks <https://github.com/datetime/year-weeks>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var yearDays = require('year-days');

/**
 * Get the number of weeks in year - leap or not
 *
 * @param  {Date|Number} `[value]` current year ([`year-days`](https://github.com/sindresorhus/year-days)) as valid Date format string, or year as number
 * @return {Number}
 */
module.exports = function yearWeeks(value) {
  return (yearDays(value) / 7) | 0;
};
