const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
  return numArray.reduce((currentSum, next) => currentSum + next, 0);
};

const multiply = function(numArray) {
  if(numArray.length == 0) {
    return 0;
  } else {
    return numArray.reduce((currentProduct, next) => {
      return currentProduct * next;
    }, 1);
  }
};

const power = function(number, exp) {
	return number ** exp;
};

const factorial = function(num) {
  if (num == 0) {return 1;}
	let count = num - 1;
  while (count > 0){
    num *= count;
    count--;
  }
  return num
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
