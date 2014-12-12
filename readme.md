# year-weeks [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url] [![datetime org][datetime-shields]][datetime-url]
> Get the number of weeks in year - leap or not


## Install [![Nodei.co stats][npmjs-install]][npmjs-url] 
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


## [.yearWeeks](index.js#L13)
- `[date]` **{Date|Number}** current year - passed to [`year-days`](https://github.com/sindresorhus/year-days)


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/datetime/year-weeks/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/year-weeks
[npmjs-shields]: http://img.shields.io/npm/v/year-weeks.svg
[npmjs-install]: https://nodei.co/npm/year-weeks.svg?mini=true

[coveralls-url]: https://coveralls.io/r/datetime/year-weeks?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/datetime/year-weeks.svg

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

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore


[datetime-shields]: http://img.shields.io/badge/datetime-approved-brightgreen.svg
[datetime-url]: https://github.com/datetime