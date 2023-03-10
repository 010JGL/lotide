const assertEqual = require('./assertEqual');

const findKey = function (obj, callback) {  // takes in an object & callback
  for (let key of Object.keys(obj)) {       // returns an array so we can better look at the data inside of it
    if (callback(obj[key])) {               // when condition is met
      return key;

    }
  }
};

const result = findKey({               // simpler to write result with assertEqual
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result, "noma");

module.exports = findKey;