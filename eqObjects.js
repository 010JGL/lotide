const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takes in 2 objects       returns true or false
// gotta be perfect match

const eqObjects = function(object1, object2) {
  const object1List = Object.keys(object1);
  const object2List = Object.keys(object2);
    if (object1List.length !== object2List.length) {
      return false;
    }
    for (let key of object1List) {
      if (object1[key] === object2[key]) {
        console.log(object1[key]);
        console.log(object2[key]);
        return true;
      }
    }
};

//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject= { size: "medium", color: "red" };

//assertEqual((eqObjects(shirtObject , anotherShirtObject)), true); // => true

//const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//assertEqual((eqObjects(shirtObject , longSleeveShirtObject)), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual((eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual((eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)), false); // => false