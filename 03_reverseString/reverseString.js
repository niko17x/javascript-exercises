//My code:

/**
 *use a variable that will hold the new reversed string.
 *use a for loop to increment a counter for the str.length.
 *combine the each character to the comb variable.
 *return the reversed string.
 */

const reverseString = function(str) {
    let comb = "";
    for (let i=1; i<str.length+1; i++) {
        comb += str[str.length-i];
    }
    return comb;
}


//Solution:
const reversString = function(str) {
    console.log(str.split('').reverse().join(''))
}
reversString('string')





// Do not edit below this line
module.exports = reverseString;
