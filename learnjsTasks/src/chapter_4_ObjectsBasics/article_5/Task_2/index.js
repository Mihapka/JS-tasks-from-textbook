function Accumulator(initialValue) {
  this.value = initialValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);