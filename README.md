# next-max-by
> This method is like _.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-max-by
```

## usage
```js
import '@jswork/next-max-by';

const arr = [
  { name: 'apple', value: 1 },
  { name: 'banana', value: 2 },
  { name: 'orange', value: 3 },
  { name: 'pear', value: 4 },
  { name: 'grape', value: 5 }
];

const result = nx.maxBy(arr, (x) => x.value);
console.log(result);
// { name: 'grape', value: 5 }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-max-by/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-max-by
[version-url]: https://npmjs.org/package/@jswork/next-max-by

[license-image]: https://img.shields.io/npm/l/@jswork/next-max-by
[license-url]: https://github.com/afeiship/next-max-by/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-max-by
[size-url]: https://github.com/afeiship/next-max-by/blob/master/dist/next-max-by.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-max-by
[download-url]: https://www.npmjs.com/package/@jswork/next-max-by
