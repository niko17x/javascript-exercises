const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(num) {
	return num.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
};
// [2, 4] => 8;
const multiply = function(num) {
	return num.reduce((accumulator, currentValue) => accumulator *= currentValue, 1);
};

const power = function(num1, num2) {
	return (num1 ** num2);
	return (Math.pow(num1, num2)); // solutions method.
};

const factorial = function(n) {
	let num = 1;
	if (n === 0) return 1;
	for (let i=n; i>0; i--) {
		num *= i; // 5 * 4 * 3 * 2 * 1
	}
	return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
