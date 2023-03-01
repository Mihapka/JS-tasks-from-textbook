# Проверка на пустоту                                                       <br/>

Напишите функцию isEmpty(obj), которая возвращает true, если у объекта      <br/>
нет свойств, иначе false.                                                   <br/>

Должно работать так:                                                        <br/>

let schedule = {};                                                          <br/>

alert( isEmpty(schedule) ); // true                                         <br/>

schedule["8:30"] = "get up";                                                <br/>

alert( isEmpty(schedule) ); // false                                        <br/>