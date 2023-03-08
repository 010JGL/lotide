const eqArrays = function(a, b, c) {
  c = JSON.stringify(a) === JSON.stringify(b);
  return c;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) == true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
  return eqArrays(actual, expected);
};
// function taking in a source array & itemsToRemove array

// return a new array, without items to remove
const without = function(array, itemsToRemove) {    
  let newArray = [];                          // create an array to return and not modify the original
  for (const element of array) {              // check for the elements in array
    if (!itemsToRemove.includes(element)) {   // if elements are not included in items to remove
      newArray.push(element);                 // push them into new array
    }
  }
  return newArray;                            // returns the value out
};




console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]