let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let string = "";
function addExcitement (wordArray) {
    for(var i = 0; i < sentence.length; i++){
    
    		string += sentence[i] + " ";
    		console.log(string);
      }
}
addExcitement(sentence);