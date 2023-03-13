
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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




console.log(without([1, 2, 3], [1])); // => [2, 3];
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"];


module.exports = without;