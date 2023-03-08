const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
/*      This works but too long
const countLetters = function(str) {
  let letters = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, u: 0, v: 0, r: 0, s: 0, t: 0, w: 0, x: 0, y: 0, z: 0}
  
  for (let letter of str) {
    if (letter === 'a') {
      letters.a++;
    } else if (letter === 'b') {
      letters.b++;
      }
      else if (letter === 'c') {
        letters.c++;
      }
      else if (letter === 'd') {
        letters.d++;
      }
      else if (letter === 'e') {
        letters.e++;
      }
      else if (letter === 'f') {
        letters.f++;
      }
      else if (letter === 'g') {
        letters.g++;
      }
      else if (letter === 'h') {
        letters.h++;
      }
      else if (letter === 'i') {
        letters.i++;
      }
      else if (letter === 'j') {
        letters.j++;
      }
      else if (letter === 'k') {
        letters.k++;
      }
      else if (letter === 'l') {
        letters.l++;
      }
      else if (letter === 'm') {
        letters.m++;
      }
      else if (letter === 'n') {
        letters.n++;
      }
      else if (letter === 'o') {
        letters.o++;
      }
      else if (letter === 'p') {
        letters.p++;
      }
      else if (letter === 'q') {
        letters.q++;
      }
      else if (letter === 'r') {
        letters.r++;
      }
      else if (letter === 's') {
        letters.s++;
      }
      else if (letter === 't') {
        letters.t++;
      }
      else if (letter === 'u') {
        letters.u++;
      }
      else if (letter === 'v') {
        letters.v++;
      }
      else if (letter === 'w') {
        letters.w++;
      }
      else if (letter === 'x') {
        letters.x++;
      }
      else if (letter === 'y') {
        letters.y++;
      }
      else if (letter === 'z') {
        letters.z++;
      }
    }
    return letters;
}
console.log(countLetters("lighthouse in the house"));

*/

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