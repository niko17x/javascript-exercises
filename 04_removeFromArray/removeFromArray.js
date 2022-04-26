/*
*GOAL: Given 1 array and an n number of arguments (in the function parameter), eliminate all similar number/types that matches the array elements and arguments.

The .filter() method allows the elements in the array to be iterated.
Each of the elements in the array is individually passed into the function (x => !(args.includes(x))).
In the function, if the iterated element from the array is *not* included in one of the arguments, then the function returns *true* (not *false* due to !).
When the function returns true, the array.filter() will return true for that element that was iterated.
Therefor, that element will remain in the filtered variable.
The filtered variable will be ultimately returned after all the elements have been iterated against the function(x => !(args.includes(x))).
End.
*/






const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x));
};



//long-hand version of the code above that does the same thing:
// const removeFromArray = function(array, ...arg) {
//     const filtered = array.filter(
//         function(x) {
//             if (arg.includes(x) === false) {
//                 return true;
//             }
//         }
//     )
//     return filtered;
// }




// Do not edit below this line
module.exports = removeFromArray;
