# Улучшенные часы    <br/>

У нас есть класс Clock. Сейчас он выводит время каждую секунду    <br/>

class Clock {    <br/>
constructor({ template }) {    <br/>
this.template = template;    <br/>
}    <br/>

render() {    <br/>
    let date = new Date();    <br/>
    let hours = date.getHours();    <br/>
    if (hours < 10) hours = '0' + hours;    <br/>
    let mins = date.getMinutes();    <br/>
    if (mins < 10) mins = '0' + mins;    <br/>
    let secs = date.getSeconds();    <br/>
    if (secs < 10) secs = '0' + secs;    <br/>
    let output = this.template    <br/>
      .replace('h', hours)    <br/>
      .replace('m', mins)    <br/>
      .replace('s', secs);    <br/>
    console.log(output);    <br/>
}    <br/>

stop() {    <br/>
    clearInterval(this.timer);    <br/>
}    <br/>

start() {    <br/>
    this.render();    <br/>
    this.timer = setInterval(() => this.render(), 1000);    <br/>
    }    <br/>
}    <br/>
Создайте новый класс ExtendedClock, который будет наследоваться от     <br/>
Clock и добавьте параметр precision – количество миллисекунд между «тиками».     <br/>
Установите значение в 1000 (1 секунда) по умолчанию.    <br/>

Сохраните ваш код в файл extended-clock.js    <br/>
Не изменяйте класс clock.js. Расширьте его.    <br/>