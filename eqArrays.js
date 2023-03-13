// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(a, b, c) {
  c = JSON.stringify(a) === JSON.stringify(b);
  return c;
};

module.exports = eqArrays;
