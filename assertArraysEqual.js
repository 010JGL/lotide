const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) == true) {        // compares the function return with true
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
  return eqArrays(actual, expected);         // can use a function as a return
};

module.exports = assertArraysEqual;

