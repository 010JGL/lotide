

const eqArrays = function(a, b, c) {
  c = JSON.stringify(a) === JSON.stringify(b);
  return c;
};
// console.log(eqArrays([1, 2][1, 2]));

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) == true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
  return eqArrays(actual, expected);
};

console.log('test', assertArraysEqual([1, 2, 3], [1, 2, 3]));

