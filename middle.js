// take in an array, returns the middle most elements

const middle = function(array) {
  if (array.length < 3) {                                          //returns [] when array length is under 3
    return [];
  } else if (array.length % 2 === 0) {                             //if array length is even
    return array.slice(array.length / 2 - 1, array.length / 2 + 1)  // slice from array *slice(start, end)*
  } else {                                                          // is odd
    let newArray = [];                                              // declare new array to return after
    let middleNum = Math.round(array.length / 2);                   // if odd middle is 7 / 2 = 3.5   3.5 rounded is 4. 
    newArray.push(array[middleNum - 1]);                            // 4 - 1 to get the index to return
    return newArray;
  }
};

module.exports = middle;