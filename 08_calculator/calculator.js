const add = function(x, y) {
  const result = x + y;
  return result;
};

const subtract = function(x, y) {
  const result = x - y;
  return result;
};

const sum = function(Array) {
  let result = 0;

  for (i = 0; i < Array.length; i++) {
    result += Array[i];
  }
  return result;
};

const multiply = function(Array) {
  let result = Array[0];

  for (i = 1; i < Array.length; i++) {
    result = result * Array[i];
  }
  return result;
};

const power = function(x, y) {
  let result = x;
  for (i=2; i<=y; i++) {
    result = result * x;
  }
  return result;
};

// This doesn't feel like a good solution to get the correct answer
// for the factorial of 1 but it passes.
const factorial = function(x) {
  let result = 1;

  for (let i = x; i > 0; i--) {
    y = (i - 1);
    result += result * y;
  }

  if (result === 0) {
    return 1;
  } else {
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
