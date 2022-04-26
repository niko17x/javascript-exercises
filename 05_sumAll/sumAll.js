

/*
A function is given with 2 input parameters (arguments).
If the parameters are not integers greater than 0, then return ERROR.
If the parameters are not numbers, then return ERROR.
Take into account the value of the parameters if: (a > b) or (b > a).
Return the total sum.
End.
*/

//my code version:
const sumAll = function(a, b) {
    let totalSumA = a;
    let totalSumB = b;

    if (a<0 || b<0) { //negative number input check.
        return "ERROR";
    } else if (typeof a != 'number' || typeof b != 'number') { 
        return "ERROR";
    } else if (a<b) {
        for (let i=a; i<b; i++) {
            totalSumA += (i+1);
        }
        return (totalSumA);
    } else if(a>b) {
        for (let i=b; i<a; i++) {
            totalSumB += (i+1);
        }
        return (totalSumB);
    }
};



// Do not edit below this line
module.exports = sumAll;


//Solution:
const sumAllSolution = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
}

