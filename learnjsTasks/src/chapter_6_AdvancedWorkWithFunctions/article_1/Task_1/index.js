function cyclicSummationMethod(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert( cyclicSummationMethod(100) );



function recursiveSummationMethod(n) {
  if (n == 1) return 1;
  return n + recursiveSummationMethod(n - 1);
}

alert( recursiveSummationMethod(100) );  /*Maximum call stack size exceeded*/



function formulaSummationMethod(n) {
  if (+n >= 1) return n * (n + 1) / 2;
}

alert( formulaSummationMethod(100) );
