# Отсортировать пользователей по возрасту                           <br/>

Напишите функцию sortByAge(users), которая принимает массив         <br/>
объектов со свойством age и сортирует их по нему.                   <br/>

Например:                                                           <br/>

let vasya = { name: "Вася", age: 25 };                              <br/>
let petya = { name: "Петя", age: 30 };                              <br/>
let masha = { name: "Маша", age: 28 };                              <br/>

let arr = [ vasya, petya, masha ];                                  <br/>

sortByAge(arr);                                                     <br/>

// теперь: [vasya, masha, petya]                                    <br/>
alert(arr[0].name); // Вася                                         <br/>
alert(arr[1].name); // Маша                                         <br/>
alert(arr[2].name); // Петя                                         <br/>