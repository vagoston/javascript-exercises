const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((sum,current) => sum + current, 0);

const multiply = (array) => array.reduce((product,current) => product * current, 1);

const power = (a, b) => a ** b;

const factorial = a => a > 1 ? a * factorial(--a) : 1;

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};