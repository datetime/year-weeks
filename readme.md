# year-weeks [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url]

> Get the number of weeks in year - leap or not.


## Install [![Nodei.co stats][npmjs-install]][npmjs-url] 

> Install with [npm](https://npmjs.org)

```
$ npm install year-weeks
```


## Usage
```js
var yearWeeks = require('year-weeks');

yearWeeks(2014);
//=> 52

yearWeeks(2016);
//=> 52
```


## Tests
> As usual `npm test` **or** if you have [mocha][mocha-url] globally `mocha`

```
$ npm test
```


## API
### yearWeeks([year])
#### year

Type: `number`  
Default: current year

### yearWeeks([date])

#### date

Type: `date`  
Default: `new Date()`

> **Note:** argument is passed to [`year-days`](https://github.com/sindresorhus/year-days)


## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]
**Charlike Mike Reagent**
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## Authors & Contributors [![author tips][author-gittip-img]][author-gittip]
+ **Charlike Mike Reagent** ~ [gittip][author-gittip] - [github][author-github] - [twitter][author-twitter] - [npmjs][author-npmjs] - [website][author-website]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/year-weeks/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[mocha-url]: https://github.com/visionmedia/mocha

[npmjs-url]: https://npm.im/year-weeks
[npmjs-img]: http://img.shields.io/badge/npm%20module-v-brightgreen.svg
[npmjs-install]: https://nodei.co/npm/year-weeks.png?mini=true

[license-url]: https://github.com/tunnckoCore/year-weeks/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/year-weeks
[travis-img]: https://travis-ci.org/tunnckoCore/year-weeks.png?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/year-weeks
[depstat-img]: https://david-dm.org/tunnckoCore/year-weeks.png

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
