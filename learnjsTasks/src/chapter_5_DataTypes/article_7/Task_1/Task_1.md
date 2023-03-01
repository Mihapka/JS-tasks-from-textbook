# Фильтрация уникальных элементов массива   <br/>

Допустим, у нас есть массив arr.    <br/>

Создайте функцию unique(arr), которая вернёт массив уникальных,     <br/>
не повторяющихся значений массива arr.  <br/>

Например:   <br/>

function unique(arr) {  <br/>
/* ваш код */   <br/>
}   <br/>

let values = ["Hare", "Krishna", "Hare", "Krishna", <br/>
"Krishna", "Krishna", "Hare", "Hare", ":-O" <br/>
];  <br/>

alert( unique(values) ); // Hare,Krishna,:-O    <br/>
P.S. Здесь мы используем строки, но значения могут быть любого типа.    <br/>

P.P.S. Используйте Set для хранения уникальных значений.    <br/>