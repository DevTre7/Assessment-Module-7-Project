//1) Sum Zero:

  //Nested For Loop:
function addToZero(array) {
for (let i = 0; i < array.length; i++){
    for(let e = 0; e < array.length; e++)
    {
        let sum = array[i] + array[e];
        if ( sum === 0){
        return true;
    }
    };
    
  
}
return false;
};

const arrayOne = [1,7,3];

console.log(arrayOne);
console.log(addToZero(arrayOne));

// The Runtime for this function: O(n^2) - Quadratic Time

console.log("------------------------------------");

//2) Unique Characters:

function hasUniqueCharacters(word){
let array = word.split("");
for (let i = 0; i < word.length; i++){
    let item = array.shift();
    console.log(item)
    console.log(array)

    for (let e = 0; e < array.length; e++){

      if (item === array[e]){
      return false;
    }
    }
  }
  return true;
}

let word = "Weekend";
let word1 = "Youtube";
let word2 = "Monday";

console.log(hasUniqueCharacters(word));
console.log(hasUniqueCharacters(word1));
console.log(hasUniqueCharacters(word2));

console.log("------------------------------------");
// The Runtime for this function is: O(n^2) - Quadratic Time
// "charAt() function": https://www.w3schools.com/java/ref_string_charat.asp

//3)Pangram Sentence:

function isPangram(sentence){
  let sentenceArray = sentence.toLowerCase();
  let englishAlphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < englishAlphabetArray.length; i++) {
    if(sentenceArray.indexOf(englishAlphabetArray[i]) < 0) //
    {
      return false;
    }
  }
  return true;
};

let sentence1 = "The quick brown fox jumps over the lazy dog!"
let sentence2 = "I like cats, but not mice."
let sentence3 = "Today is going to be great!"

console.log(isPangram(sentence1));
console.log(isPangram(sentence2));
console.log(isPangram(sentence3));
// console.log( sentence3)
console.log("------------------------------------");
// The Runtime for this function is: O(n)- Linear Time


//4) Longest Word:

function findTheLongestWord(array){
  let longestWord = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i].length > longestWord.length)
    {
      longestWord = wordList[i];
    }
  }
  return longestWord.length;

}

let wordList = ["Hi", "Hello", "Morning", "Sunny", "Joy"]
console.log(findTheLongestWord(wordList));
console.log("------------------------------------");

// The Runtime for this function is: O(1) - Constant Time