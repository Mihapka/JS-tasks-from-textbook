
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

//let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
//alert(lengths); // 6,8,6
alert( names ); // Вася, Петя, Маша