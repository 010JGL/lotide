

const eqArrays = function(a, b, c) {
  c = JSON.stringify(a) === JSON.stringify(b);
  return c;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) == true) {        // compares the function return with true
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
  return eqArrays(actual, expected);         // can use a function as a return
};

console.log('test', assertArraysEqual([1, 2, 3], [1, 2, 3]));

