// takes 2 parameters
// Array & callback
//const newArray = [];
//const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];


/*const takeUntil = function(arr, callback) {
  for (let item of arr) {
    console.log(item);
    if (item == true) {
    console.log(item);
      newArray.push(callback(item));
    }
    else {
      break;
    }
  }
  return console.log(newArray);
}

const result1 = takeUntil(array, value => value);
console.log(result1);
*/
const newArray = [];
//const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  for (let arr of array) {
    if (arr == true) {
     return callback(arr);
    }
    else {
      break;
    }
  }
  return console.log(newArray);

};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

//[ 1, 2, 5, 7, 2 ]
//--
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
