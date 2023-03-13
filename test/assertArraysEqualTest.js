const assertArraysEqual = require('../assertArraysEqual');


console.log('test', assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log('test', assertArraysEqual([1, 3, 5], [1, 3, 5]));
console.log('test', assertArraysEqual([1, 5, 66], [1, 5, 66]));
