function makeArmy() {
  let shooters = [];

  let i = 0;

  while (i < 10) {
//      нужно сделать отдельную переменную, т.к после аполнения массива shooters[],
//      "i" станет равна 10-ти. и при вызове функии shooter, будет использоваться со значением 10.

    let j = 0;

    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    j = i++;

  }

  return shooters;
}

let army = makeArmy();

alert( army );
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...