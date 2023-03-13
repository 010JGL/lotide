
const countLetters = function(str) {
  let result = {};                           // create empty object to store data and return it
  const lowercaseStr = str.toLowerCase();    // makes our string lowercase

  for (let letter of lowercaseStr) {         // loop to fin letter in string
    if (result[letter]) {                    // if result has letter
      result[letter]++;                      // increment it by 1
    } else {
      result[letter] = 1;                    // if it doesnt have letter, create it
    }
  }
  return result;
}

console.log(countLetters('Dancing in the night, with an owl'));

module.exports = countLetters;