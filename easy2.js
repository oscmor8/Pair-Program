const numbers = [-1, 2, 4, 7, 45];
function arraySorter() {}
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]; //example two
numArray = numArray.filter((number) => {
  //function that is searching for a number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // created a for loop to loop through the array and comparing the root of the number. Math.sqrt is used to square root a number
    if (number % i === 0) return false; // if the number remainder is 0 then it will be false and else will return true.
  }
  return true;
});
console.log(numArray);