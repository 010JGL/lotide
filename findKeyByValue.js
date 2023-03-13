
const assertEqual = require('./assertEqual');
// write function that takes OBJECT & VALUE
// should scan the object return the first key: value
// if no key found, return undefined

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {      // takes in object, and value
  const objectList = Object.keys(object);             // transfer object into an array
  for (let key in objectList) {                       // loop every key in our list
    if (object[objectList[key]] === value) {          // if our list[key] is the same as the value
      return objectList[key];                         // return the list[key]
    }
  }   
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;