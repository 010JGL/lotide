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
// Return a slice of the array with elements taken from beginning. until we finda truthy value


const takeUntil = function(array, callback) {   // takes one parameter and one call back
  
  for (let i in array) {              // loop thru all of the array
    if (callback(array[i])) {         // if callback(condition) of the index were at in the array
      array.splice(i);                // splice the array at that point
      return array;                   // return a modified array
    }
  }

};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

//[ 1, 2, 5, 7, 2 ]
//--
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
console.log(results1);
console.log(results2);

assertArraysEqual(data1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(data2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
