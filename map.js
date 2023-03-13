// map func, will take in 2 arg
// an array & a callback
// return new array based on results of the callback

const words = ["ground", "control", "to", "major", "tom"];

const names = ["john", 'wick', 'bobby', 'boucher'];

const cars = ['truck', 'eletric', 'small car', 'suv'];
//const result = []
//const calling = words.map(() => result);

const map = function(array, callback) {   // use a callback
  
  const results = [];
  
  for (let item of array) {           // check every item in the array
    results.push(callback(item));      // push the value of word => word[i] in the array
  }
  return results;
}                             // callback 

const results1 = map(words, word => word[0]);      // different results to test at the same time

const results2 = map(names, word => word[1]);      // map(element, index, array)

const results3 = map(cars, word => word[2]);

const assertArraysEqual = require('./assertArraysEqual')


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'o', 'i', 'o', 'o' ]);
assertArraysEqual(results3, [ 'u', 'e', 'a', 'v' ]);

module.exports = map;