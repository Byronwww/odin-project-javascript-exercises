const fibonacci = function(fibonacciNumber) {
  fibonacciNumber = Number(fibonacciNumber);

  let x = 0;
  let y = 1;
  let result = 0;

  if (fibonacciNumber < 0) {
    return 'OOPS';
  }

  if (fibonacciNumber == 1) {
    return 1;
  }

  for (i = 0; i < fibonacciNumber-1; i++) {
    result = x + y;
    x = y;
    y = result;

    console.log('X: ' + x);
    console.log('Y:' + y);
    console.log('Result: ' + result);
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
