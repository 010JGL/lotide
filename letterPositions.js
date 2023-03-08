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

console.log(letterPositions("lighthouse in the house"));