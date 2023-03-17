let fibonacciNumber = 77;
let fib = [0, 1];

for (let i = 2; i <= fibonacciNumber; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
}

alert( fib[fib.length-1] );