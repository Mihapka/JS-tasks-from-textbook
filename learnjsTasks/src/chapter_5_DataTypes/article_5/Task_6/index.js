
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      operationSign = split[1],
      b = +split[2]

    if (!this.methods[operationSign] && isNaN(a) && isNaN(b)) {
      return NaN;
    }

    return this.methods[operationSign](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calculator = new Calculator;
let extendedCalc = new Calculator;

extendedCalc.addMethod("*", (a, b) => a * b);
extendedCalc.addMethod("/", (a, b) => a / b);
extendedCalc.addMethod("**", (a, b) => a ** b);

alert( calculator.calculate("3 + 7") );         //10
alert( extendedCalc.calculate("2 ** 3") );      //8
alert( extendedCalc.calculate("2 * 3") );       //6
alert( extendedCalc.calculate("9 / 3") );       //3
alert( calculator.calculate("3 + -7") );        //-4