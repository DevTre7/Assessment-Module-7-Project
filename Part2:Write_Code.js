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

