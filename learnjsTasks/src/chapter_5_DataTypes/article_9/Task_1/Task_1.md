# Сумма свойств объекта  <br/>

Есть объект salaries с произвольным количеством свойств,   <br/>
содержащих заработные платы.  <br/>

Напишите функцию sumSalaries(salaries), которая возвращает   <br/>
сумму всех зарплат с помощью метода Object.values и цикла for..of.  <br/>

Если объект salaries пуст, то результат должен быть 0.  <br/>

Например:  <br/>

let salaries = {  <br/>
"John": 100,  <br/>
"Pete": 300,  <br/>
"Mary": 250  <br/>
};  <br/>

alert( sumSalaries(salaries) ); // 650  <br/>