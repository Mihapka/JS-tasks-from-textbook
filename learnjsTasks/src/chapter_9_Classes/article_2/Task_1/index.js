/*
Упс! При создании кролика – ошибка! Что не так?

Если коротко, то:
Конструкторы в наследуемых классах должны обязательно вызывать super(...),
и (!) делать это перед использованием this..
*/

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // ошибки нет
alert(rabbit.name); // White Rabbit