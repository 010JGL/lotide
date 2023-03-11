const eqObjects = function (object1, object2) {
  const object1List = Object.keys(object1);
  const object2List = Object.keys(object2);

  if (object1List.length !== object2List.length) {   // if length are not the same, get out
    return false;
  } else {

    for (const keyName of object1List) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) { // checks if its an array
        if (!eqArrays(object1[keyName], object2[keyName])) {                    // if array, with eqArrays
          return false;
        }
      } else if (typeof object1[keyName] === 'object' && typeof object2[keyName] === 'object') {
        if (!eqObjects(object1[keyName], object2[keyName])) {
          return false;
        }
      } else {
        if (object1[keyName] !== object2[keyName]) {       // if both object are not equal, get out
          return false;
        }
      }
    }
    return true;
  }
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  if (eqObjects(actual, expected) == true) {        // compares the function return with true
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
  return eqObjects(actual, expected);
  
};


console.log(assertObjectsEqual({ a: '1', b: 2 }, {b: 2,  a: '1'}));