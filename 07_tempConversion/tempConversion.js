/**
 * User inputs a value in the function to convert from celc to faren and vice versa.
 * Return value should be rounded to the nearest 10 if there is a decimal place.
 * If no decimal, then return just the value itself.
 */


//My solution:
//converting f -->> c:
const ftoc = function(temp) {
  const fconv = ((temp - 32) * (5/9));
  return (Math.round(fconv * 10) / 10);

};

//converting c -->> f:
const ctof = function(temp) {
  const cconv = (temp * (9/5) + 32).toFixed(1);
  return (Math.round(cconv * 10) / 10);
};


//Given solution:
// const ftoc = function(f) {
//   return Math.round((f - 32) * (5/9) * 10) / 10;
//  };
 
//  const ctof = function(c) {
//    return Math.round(((c * 9/5) + 32) * 10) / 10;
//  };






// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
