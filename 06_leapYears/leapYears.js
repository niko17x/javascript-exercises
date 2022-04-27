/*
If year is divisible by 100 (year % 100 === 0) --> check if century year (must be checked first).
Also...
Year must be divisible by 400 and then 4 (year % 400 === 0 && year % 4 === 0).
Else if...
Year must be divisible by 4 (year % 4 === 0) --> after century year check, any year divisible by 4 is a leap year.
End.
*/


//My solution:
const leapYears = function(year) {
    //check for century years first (years divisible by 100):
    if (year % 100 === 0) {
        if (year % 400 === 0 && year % 4 === 0) {
            return true;
        }
    //check if year is divisible by 4 *after passing the check if the year is a century year*:
    } else if (year % 4 === 0) {
        return true;
    }
    return false;
};




//TOP solution:
// const leapYears = function(year) {
//     return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
//   };
  






// Do not edit below this line
module.exports = leapYears;

