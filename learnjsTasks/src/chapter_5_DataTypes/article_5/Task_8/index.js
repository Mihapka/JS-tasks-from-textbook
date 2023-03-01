
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

//этот коментарияй я написал для себя, чтобы при повторном просмотре, через какое-то время,
// было понятней, что тут происходит
// работает, как лямбда в java: из user извлекаем  name/surname и id, создаём новый объект и
// его возвращаем в массив "usersMapped"

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id +" " + usersMapped[0].fullName);
alert( usersMapped[1].id +" " + usersMapped[1].fullName);
alert( usersMapped[2].id +" " + usersMapped[2].fullName);