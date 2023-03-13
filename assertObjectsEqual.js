const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;