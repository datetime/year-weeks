# year-weeks [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![datetime org][datetime-img]][datetime-url]
> Get the number of weeks in year - leap or not


## Install [![Nodei.co stats][npmjs-ico]][npmjs-url] 
> Install with [npm](https://npmjs.org)

```
$ npm install year-weeks
$ npm test
```


## Usage
```js
var yearWeeks = require('year-weeks');

yearWeeks(2014);
//=> 52

yearWeeks(2016);
//=> 52
```
> For more use-cases see [tests](./test.js)



## [.yearWeeks](index.js#L18)
- `[date]` **{Date|Number}** current year ([`year-days`](https://github.com/sindresorhus/year-days)) as valid Date format string, or year as number


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/year-weeks
[npmjs-img]: http://img.shields.io/npm/v/year-weeks.svg
[npmjs-ico]: https://nodei.co/npm/year-weeks.svg?mini=true

[coveralls-url]: https://coveralls.io/r/datetime/year-weeks?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/year-weeks.svg

[license-url]: https://github.com/datetime/year-weeks/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/datetime/year-weeks
[travis-img]: https://travis-ci.org/datetime/year-weeks.svg

[depstat-url]: https://david-dm.org/datetime/year-weeks
[depstat-img]: https://david-dm.org/datetime/year-weeks.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/year-weeks/graphs/contributors

[datetime-img]: http://img.shields.io/badge/datetime-approved-brightgreen.svg
[datetime-url]: https://github.com/datetime