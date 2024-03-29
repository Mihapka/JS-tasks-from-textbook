# Фильтрация с помощью функции  <br/>

У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все   <br/>
элементы с помощью функции f. Если она возвращает true, то элемент   <br/>
добавится в возвращаемый массив.  <br/>

Сделайте набор «готовых к употреблению» фильтров:  <br/>

inBetween(a, b) – между a и b (включительно).  <br/>
inArray([...]) – находится в данном массиве.  <br/>
Они должны использоваться таким образом:  <br/>

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).  <br/>
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с   <br/>
одним из элементов массива  <br/>

Например:  <br/>

/* .. ваш код для inBetween и inArray */  <br/>
let arr = [1, 2, 3, 4, 5, 6, 7];  <br/>

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6  <br/>

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2  <br/>