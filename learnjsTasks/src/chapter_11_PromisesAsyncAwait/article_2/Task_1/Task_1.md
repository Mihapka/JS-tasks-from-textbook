# Задержка на промисах  <br/>

Встроенная функция setTimeout использует колбэк-функции.   <br/>
Создайте альтернативу, использующую промисы.  <br/>

Функция delay(ms) должна возвращать промис, который перейдёт в   <br/>
состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:  <br/>

function delay(ms) {  <br/>
// ваш код  <br/>
}  <br/>

delay(3000).then(() => alert('выполнилось через 3 секунды'));  <br/>