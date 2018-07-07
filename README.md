hash-str
===============

A [hash-str][] is the four functions for generating hashes.
The author is a Hacker Kselax, that is well known in ru-net, here is his [home-page][] to visit

[![npm version][npm-badge]][npm]

[hash-str]: https://www.npmjs.com/package/hash-str
[home-page]: http://kselax.ru/en
[npm]: https://www.npmjs.org/package/hash-str
[npm-badge]: https://img.shields.io/npm/v/hash-str.svg?style=flat-square

## Functions
`hash` - uses for generated a hash with *an arbitrary length*, function accepts as argument length

`sha1` - generates hash using **sha128**

`sha256` - generates hash using **sha256**

`sha512` - generates hash using **sha512**

## Installation
```shell
$ npm install hash-str --save
```

## The example
```javascript
var hash_str = require('./index.js');
// console.log(hash_str);
console.log(hash_str.hash(50)); // k4H/CJsn7ai+6teNES9cb9JHH3ji2ydptxEtkHo1WuBPP4Wmuq

console.log(hash_str.sha1()); // LXQccY/ghEYyMvKjlpQiCiOBL1k=
console.log(hash_str.sha256()); // Dn355q4HCoYtrOUHHld4q46BmCS24hwReSMFjz8W2R0=
console.log(hash_str.sha512()); // l9MfDZa3skcSB0Ld5+WfZD3wk3Vc/aHXcT6cx+LsMzKwpgTpksA7jvmyJg8yl0JHJujjlQ4LBpPQiD22cLmcIA==
```
## License
This software is free to use under GNU General Public License GPL. See the [license description][] for license text and copyright information.


[license description]: https://www.gnu.org/licenses/gpl-3.0-standalone.html
