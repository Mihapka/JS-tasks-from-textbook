# Ошибка создания экземпляра класса  <br/>

В коде ниже класс Rabbit наследует Animal.  <br/>

К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.  <br/>

class Animal {  <br/>
    constructor(name) {  <br/>
    this.name = name;  <br/>
    }  <br/>

}  <br/>

class Rabbit extends Animal {  <br/>
    constructor(name) {  <br/>
    this.name = name;  <br/>
    this.created = Date.now();  <br/>
    }  <br/>
}  <br/>

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined  <br/>
alert(rabbit.name);  <br/>