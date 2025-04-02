const fibonacci = function(number) {
    let fibonacciNo;
    if (Number(number) === 0) {
        fibonacciNo = 0;
    }
    else if (Number(number) === 1) {
        fibonacciNo = 1;
    }
    else if (Number(number) > 1) {
        fibonacciNo = fibonacci(Number(number) - 1) + fibonacci (Number(number) - 2) 
        }
    else if (Number(number) < 0) {
      fibonacciNo = "OOPS"
    }
    return fibonacciNo
    };

// Do not edit below this line
module.exports = fibonacci;
