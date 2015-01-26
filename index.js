/**
 * year-weeks <https://github.com/datetime/year-weeks>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var yearDays = require('year-days');

/**
 * Get the number of weeks in year - leap or not
 *
 * **Example:**
 *
 * ```js
 * var yearWeeks = require('year-weeks');
 *
 * yearWeeks(2014);
 * //=> 52
 *
 * yearWeeks(2016);
 * //=> 52
 *
 * yearWeeks(new Date(2016, 0));
 * //=> 52
 *
 * yearWeeks('2012-12-17T03:24:00');
 * //=> 52
 * ```
 *
 * @name yearWeeks
 * @param  {Date|Number} `[val]` current year ([year-days][year-days]) as valid Date format string, or year as number
 * @return {Number}
 */
module.exports = function yearWeeks(val) {
  return (yearDays(val) / 7) | 0;
};
