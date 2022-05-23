const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/[\W_]/g, ''); // removes punctuation and anything else that is not alphabetical.
    const reversed = newStr.split("").reverse().join(""); // split string, then reversed that string, then join that string together.
    return newStr === reversed;
};


//TOP Provided Solution:
// const palindromes = function(str) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, '');
//     return (processedString.split("").reverse().join("") === processedString);
// }





// Do not edit below this line
module.exports = palindromes;


/**
 * split the string.
 * reverse the letters from the string.
 * join them back.
 */