
let vowls = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]  // lists all the vowels including uppercase and lowercase
function vowelChecker(x){
    for(let letter of x){ //  loop in this function iterates through each character in the input parameter x.
        if (vowls.includes(letter)){  // checks if the letter has onf of the vowels listed above 
            console.log('this is a vowel'); 
        }else{ // if it does not match a vowel it willl return not a vowel 
            console.log('this is not a vowel');
        }
    }
}

vowelChecker('b')
vowelChecker('A')