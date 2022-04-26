const repeatString = function(str, num) {
    let comb = "";
    if (num === 0) {
        return "";
    } else if (num > 0) {
        for (let i=0; i<num; i++) {
            comb += str;
        }
    } else {
        return "ERROR";
    }
    return comb;
}


// Do not edit below this line
module.exports = repeatString;
