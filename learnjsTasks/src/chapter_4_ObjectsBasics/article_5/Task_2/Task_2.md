# Создайте new Accumulator                                                  <br/>

Создайте функцию-конструктор Accumulator(startingValue).                    <br/>

Объект, который она создаёт, должен уметь следующее:                        <br/>    

Хранить «текущее значение» в свойстве value. Начальное значение             <br/>    
устанавливается в аргументе конструктора startingValue.                     <br/>
Метод read() должен использовать prompt для считывания нового числа и       <br/>
прибавления его к value.                                                    <br/>
Другими словами, свойство value представляет собой сумму всех введённых     <br/>
пользователем значений, с учётом начального значения startingValue.         <br/>

Ниже вы можете посмотреть работу кода:                                      <br/>    

let accumulator = new Accumulator(1); // начальное значение 1               <br/>                

accumulator.read(); // прибавляет введённое пользователем значение к        <br/>
текущему значению                                                           <br/>
accumulator.read(); // прибавляет введённое пользователем значение к        <br/>
текущему значению                                                           <br/>

alert(accumulator.value); // выведет сумму этих значений                    <br/>                       