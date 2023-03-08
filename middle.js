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

// take in an array, returns the middle most elements

const middle = function(array) {                              
  if (array.length < 3) {                                          //returns [] when array length is under 3
    return [];  
  } else if (array.length % 2 === 0) {                             //if array length is even
    return array.slice(array.length / 2 - 1, array.length / 2 + 1)  // slice from array *slice(start, end)*
  } else {                                                          // is odd
    let newArray = [];                                              // declare new array to return after
    let middleNum = Math.round(array.length / 2);                   // if odd middle is 7 / 2 = 3.5   3.5 rounded is 4. 
    newArray.push(array[middleNum - 1]);                            // 4 - 1 to get the index to return
    return newArray;
  }
  
};

//console.log(middle([1])) // => []
//console.log(middle([1, 2]))  // => []

//console.log(middle([1, 2, 3]))// => [2]
//console.log(middle([1, 2, 3, 4, 5])) // => [3]

///console.log(middle([1, 2, 3, 4])) // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));  // middle has to have arguments
//                            actual                     expected