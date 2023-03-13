// const eqArrays = require('../eqArrays');        // doesnt require eqArrays directly
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));  // middle has to have arguments
//                            actual                     expected
