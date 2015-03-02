## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get the number of weeks in year - leap or not.

## Install
```
npm i --save year-weeks
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [yearWeeks](./index.js#L37)
> Get the number of weeks in year - leap or not.

- `[val]` **{Date|Number}** every valid Date format string, Date object or year as number
- `return` **{Number}**

**Example:**

```js
var yearWeeks = require('year-weeks');

yearWeeks(2014);
//=> 52

yearWeeks(2016);
//=> 52

yearWeeks(new Date(2016, 0));
//=> 52

yearWeeks('2012-12-17T03:24:00');
//=> 52
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/year-weeks
[npmjs-img]: https://img.shields.io/npm/v/year-weeks.svg?style=flat&label=year-weeks

[coveralls-url]: https://coveralls.io/r/datetime/year-weeks?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/year-weeks.svg?style=flat

[license-url]: https://github.com/datetime/year-weeks/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/datetime/year-weeks
[travis-img]: https://img.shields.io/travis/datetime/year-weeks.svg?style=flat

[daviddm-url]: https://david-dm.org/datetime/year-weeks
[daviddm-img]: https://img.shields.io/david/datetime/year-weeks.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/year-weeks/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 02, 2015_

[year-days]: https://github.com/sindresorhus/year-days