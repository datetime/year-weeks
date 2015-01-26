/**
 * year-weeks <https://github.com/datetime/year-weeks>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var yearWeeks = require('./index');

describe('year-weeks:', function() {
  it('should returned be typeof Number', function(done) {
    assert.strictEqual(typeof yearWeeks(), 'number');
    done();
  });
  it('should work without args', function(done) {
    assert.strictEqual(yearWeeks(), 52);
    done();
  });
  it('should work with Date|Number argument', function(done) {
    assert.strictEqual(yearWeeks(2014), 52);
    assert.strictEqual(yearWeeks(2015), 52);
    assert.strictEqual(yearWeeks(new Date(2016, 0)), 52);
    assert.strictEqual(yearWeeks(new Date('2012-12-17T03:24:00')), 52);

    done();
  });
  it('should return number if argument isn`t Date or Number type', function(done) {
    assert.strictEqual(yearWeeks(''), 52);
    assert.strictEqual(yearWeeks(/regex/g), 52);
    assert.strictEqual(yearWeeks(false), 52);
    assert.strictEqual(yearWeeks(true), 52);
    done();
  });
});
