
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {           // deepEqual = compares the values inside. using === on each individual item array or object
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);      // returns an array
  });    
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 3, 5]", () => {
    assert.deepEqual(middle([1, 3, 5]), [3]);
  });
});