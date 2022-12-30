//1) Sum Zero
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

// "charAt() function": https://www.w3schools.com/java/ref_string_charat.asp