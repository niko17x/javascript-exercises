const fibonacci = function(num) {
    const fibNum = [1, 1];
    if (num < 1) return "OOPS";
    for (let i=3; i<=num; i++) {
        let result = (fibNum[fibNum.length-1] + fibNum[fibNum.length-2]);
        fibNum.push(result);
    }
    return (fibNum[fibNum.length-1]); // return the last element in the array.
};

// Do not edit below this line
module.exports = fibonacci;


// 1, 1, 2, 3, 5, 8, 13, 21, ...
// fibonacci(4) => 3 => return 4th number in the sequence.



//! T.O.P. Provide Solution:
// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     if (count === 0) return 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//       const temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
//   };
  
//   module.exports = fibonacci;