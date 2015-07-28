# superb [![Build Status](https://travis-ci.org/sindresorhus/superb.svg?branch=master)](https://travis-ci.org/sindresorhus/superb)

> Get superb like phrases

Currently ~100 phrases.

The word list itself is just a [JSON file](phrases.json) and can be used wherever.


## Install

```
$ npm install --save superb
```


## Usage

```js
var superb = require('superb');

superb();
//=> legendary

superb();
//=> awesome

superb.phrases;
// ['superb', 'legendary', ...]
```


## API

### superb()

Type: `string`

Random [superb like word](phrases.json).

### superb.phrases

Type: `array`

All the phrases.


## CLI

```
$ npm install --global superb
```

```
$ superb --help

  Examples
    $ superb
    legendary

    $ superb --all
    ace
    amazing
    ...

  Options
    --all  Get all the phrases instead of a random word
```


## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-phrases](https://github.com/sindresorhus/yes-no-phrases) - Get yes/no like phrases


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
