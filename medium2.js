// create a function that accepts two strings
// then determines if the first string is an anagram of the second string
// by returning a boolean
// example
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
//    String 2: Dogs eat ants
// Output: False


const string1 = "So dark the con of man"
const string2 = "Madonna of the Rocks"
const string3 = "fried"
const string4 = "fired"
function anagramCheck(x,y) {
    // below are variables that contain the regex replace method
    // this method removes the spaces in string sentences
    let removespace1 = x.replace(/\s+/g, "");
    let removespace2 = y.replace(/\s+/g, "");
    console.log(removespace1)
    console.log(removespace2)
    // This method takes the above varaible strings and makes a new set of virables
    // first we used the tolowercase method to set everything lowercase
    // next we used split(“”) to split all the characters
    // then we used sort which sorted the individual characters A-Z
    // then we used join
    let sortedString1 = removespace1.toLowerCase().split("").sort().join();
    let sortedString2 = removespace2.toLowerCase().split("").sort().join();
    console.log(sortedString1)
    console.log(sortedString2)
    // now we made a if else that determined whether the strings are the same
    // if they are the same it returns true
    // if they are not the same it returns false
    if(sortedString1 === sortedString2){
        console.log(true);
    } else {
        console.log(false);
    }
}
anagramCheck(string1, string2)