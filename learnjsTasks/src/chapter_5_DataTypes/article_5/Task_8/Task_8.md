# Трансформировать в объекты                                        <br/>

У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.   <br/>

Напишите код, который создаст ещё один массив объектов с параметрами                <br/>
id и fullName, где fullName – состоит из name и surname.                            <br/>

Например:                                                                           <br/>

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };                             <br/>
let petya = { name: "Петя", surname: "Иванов", id: 2 };                             <br/>
let masha = { name: "Маша", surname: "Петрова", id: 3 };                            <br/>

let users = [ vasya, petya, masha ];                                                <br/>

let usersMapped = /* ... ваш код ... */                                             <br/>

/*                                                                                  <br/>
usersMapped = [                                                                     <br/>
{ fullName: "Вася Пупкин", id: 1 },                                                 <br/>
{ fullName: "Петя Иванов", id: 2 },                                                 <br/>
{ fullName: "Маша Петрова", id: 3 }                                                 <br/>
]
*/                                                                                  <br/>

alert( usersMapped[0].id ) // 1                                                     <br/>
alert( usersMapped[0].fullName ) // Вася Пупкин                                     <br/>
Итак, на самом деле вам нужно трансформировать один массив объектов в другой.       <br/> 
Попробуйте использовать =>. Это небольшая уловка.                                   <br/>