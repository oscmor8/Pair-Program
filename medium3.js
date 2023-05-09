//Medium 3
function twoNums(a, b) {
    if (a > b) {
      //creating a conditonal to tell the greatest number out of the two parameeters
      console.log(a + " is greater than " + b);
      return a % b; // gives result for remainder of the two numbers
    } else {
      console.log(b + " is greater than " + a);
      return b % a;
    }
  }
  console.log(twoNums(336, 360));
  console.log(twoNums(78, 126));
  console.log(twoNums(888, 22));