
// create a function that takes in a string and returns a boolean value
// of whether or not the string contains a pair of matching brackets
// these brackets must be nested appropriately in order to return true
const ex1 = "This is an example {hahah}"
const ex2 = "This aint right {sfdgggh]"
function bracketCheck(x) {
    let removespace = x.replace(/\s+/g, "");
    console.log(removespace)
    let sortedString = removespace.toLowerCase().split("").join();
    console.log(sortedString)
    if (sortedString.includes("{") && sortedString.includes("}")) {
        console.log(true)
    } else if (sortedString.includes("(") && sortedString.includes(")")) {
        console.log(true)
    } else if (sortedString.includes("[") && sortedString.includes("]")) {
        console.log(true)
    } else {
        console.log(false)
    }
}
bracketCheck(ex2)