// create function that takes in a random array
// and outputs two new arrays of even and odd numbers
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//    Odd Numbers: [7, 11, 15]
const exArray = [1, -2, 4, 7, -45, 48, -342]
function arraySorter(x) {
    // first we make two variables with empty arrays
    // these arrays will be the arrays that hold the pos/neg numbers
    let negArray = [];
    let posArray = [];
    // then we create a for loop that loops through the original array
    // and checks if a number is positive or negative
    // if it is positive it gets pushed using .push() method to the new arrays
    for(i=0; i<=x.length-1; i++) {
        if(x[i]<0){
            negArray.push(x[i])
        } else {
            posArray.push(x[i])
        }
    }
    // finally we console log our new positive and negative arrays
    console.log(posArray);
    console.log(negArray);
}
arraySorter(exArray)