# Перепишите функцию, используя оператор '?' или '||'                       <br/>

Следующая функция возвращает true, если параметр age больше 18.             <br/>

В ином случае она задаёт вопрос confirm и возвращает его результат.         <br/>

function checkAge(age) {                                                    <br/>
if (age > 18) {                                                             <br/>
return true;                                                                <br/>
} else {                                                                    <br/>
return confirm('Родители разрешили?');                                      <br/>
}                                                                           <br/>
}                                                                           <br/>
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. <br/>

Сделайте два варианта функции checkAge:                                     <br/>

Используя оператор ?                                                        <br/>
Используя оператор ||                                                       <br/>