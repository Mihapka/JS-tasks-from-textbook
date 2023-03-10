# Исключить обратные ссылки    <br/>

В простых случаях циклических ссылок мы можем исключить свойство,     <br/>
из-за которого они возникают, из сериализации по его имени.    <br/>

Но иногда мы не можем использовать имя, так как могут быть и другие,     <br/>
нужные, свойства с этим именем во вложенных объектах. Поэтому можно     <br/>
проверять свойство по значению.    <br/>

Напишите функцию replacer для JSON-преобразования, которая удалит     <br/>
свойства, ссылающиеся на meetup:    <br/>

let room = {    <br/>
number: 23    <br/>
};    <br/>

let meetup = {    <br/>
title: "Совещание",    <br/>
occupiedBy: [{name: "Иванов"}, {name: "Петров"}],    <br/>
place: room    <br/>
};    <br/>

// цикличные ссылки    <br/>
room.occupiedBy = meetup;    <br/>
meetup.self = meetup;    <br/>

alert( JSON.stringify(meetup, function replacer(key, value) {    <br/>
/* ваш код */    <br/>
}));    <br/>

/* в результате должно быть:    <br/>
{    <br/>
"title":"Совещание",    <br/>
"occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],    <br/>
"place":{"number":23}    <br/>
}    <br/>
*/    <br/>