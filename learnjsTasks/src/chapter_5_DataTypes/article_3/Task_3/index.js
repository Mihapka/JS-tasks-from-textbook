let str = prompt("Введите строку", "");
let maxlength = +prompt("Введите нужную длину", 20);

alert (truncate(str, maxlength) );

// символ "…" из задания - один символ, поэтому из максимальной длинны надо вычетать не 3, а 1
// если использовать обычные три точки, то вычетать надо 3

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}