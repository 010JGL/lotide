const eqArrays = function (a, b, c) {
  c = JSON.stringify(a) === JSON.stringify(b);
  return c;
};



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takes in 2 objects       returns true or false
// gotta be perfect match

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


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual((eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual((eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)), false); // => false


