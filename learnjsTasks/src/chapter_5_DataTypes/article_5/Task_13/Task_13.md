# Создайте объект с ключами из массива                                          <br/>

Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }. <br/>

Создайте функцию groupById(arr), которая создаст из него объект с id в          <br/>
качестве ключа и элементами массива в качестве значений.                        <br/>

Например:                                                                       <br/>

let users = [                                                                   <br/>
{id: 'john', name: "John Smith", age: 20},                                      <br/>
{id: 'ann', name: "Ann Smith", age: 24},                                        <br/>
{id: 'pete', name: "Pete Peterson", age: 31},                                   <br/>
];                                                                              <br/>

let usersById = groupById(users);                                               <br/>

/*                                                                              <br/>
// после вызова у нас должно получиться:                                        <br/>

usersById = {                                                                   <br/>
john: {id: 'john', name: "John Smith", age: 20},                                <br/>
ann: {id: 'ann', name: "Ann Smith", age: 24},                                   <br/>
pete: {id: 'pete', name: "Pete Peterson", age: 31},                             <br/>
}
*/                                                                              <br/>
Такая функция очень удобна при работе с данными, которые приходят с сервера.    <br/>
В этой задаче мы предполагаем, что id уникален. Не может быть двух              <br/>
элементов массива с одинаковым id.                                              <br/>
Используйте метод .reduce в решении.                                            <br/>