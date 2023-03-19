# Сортировать по полю  <br/>

У нас есть массив объектов, который нужно отсортировать:  <br/>

let users = [  <br/>
{ name: "John", age: 20, surname: "Johnson" },  <br/>
{ name: "Pete", age: 18, surname: "Peterson" },  <br/>
{ name: "Ann", age: 19, surname: "Hathaway" }  <br/>
];
Обычный способ был бы таким:  <br/>

// по имени (Ann, John, Pete)  <br/>
users.sort((a, b) => a.name > b.name ? 1 : -1);  <br/>

// по возрасту (Pete, Ann, John)  <br/>
users.sort((a, b) => a.age > b.age ? 1 : -1);  <br/>
Можем ли мы сделать его короче, например вот таким?  <br/>

users.sort(byField('name'));  <br/>
users.sort(byField('age'));  <br/>
То есть чтобы вместо функции мы просто писали byField(fieldName).  <br/>

Напишите функцию byField, которая может быть использована для этого.  <br/>