# Создайте калькулятор при помощи конструктора, new Calculator                      <br/>

Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:  <br/>

read() запрашивает два значения при помощи prompt и сохраняет их значение в         <br/>
свойствах объекта.                                                                  <br/>
sum() возвращает сумму этих свойств.                                                <br/>
mul() возвращает произведение этих свойств.                                         <br/>
Например:                                                                           <br/>

let calculator = new Calculator();                                                  <br/>
calculator.read();                                                                  <br/>

alert( "Sum=" + calculator.sum() );                                                 <br/>
alert( "Mul=" + calculator.mul() );                                                 <br/>                       