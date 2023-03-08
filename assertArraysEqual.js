

const eqArrays = function(a, b, c) {
  c = JSON.stringify(a) === JSON.stringify(b);
  return c;
};
console.log(eqArrays());

const assertArraysEqual = function(actual, expected) {
  if (eqArrays() == true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

