const letterPositions = function(sentence) {
  const results = {};                         // creates an empty object to return
  for (i = 0; i < sentence.length; i++) {     // loop the whole sentence 
    if (sentence[i] !== ' ') {                // if sentence index is not a space, continue
      if (!results[sentence[i]]) {            // if the sentence index is not in result, keep the index
        results[sentence[i]] = [i];           
      } else {  
        results[sentence[i]].push(i);         // if sentence index is in result, push the value in sentence
      }
    }
  }
  return results;
};

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

console.log(letterPositions("lighthouse in the house"));

console.log(assertArraysEqual(letterPositions("hello").e, [1])); // dont forget to compare 2 values