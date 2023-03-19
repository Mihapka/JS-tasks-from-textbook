# Декоратор-шпион  <br/>

Создайте декоратор spy(func), который должен возвращать обёртку,   <br/>
которая сохраняет все вызовы функции в своём свойстве calls.  <br/>

Каждый вызов должен сохраняться как массив аргументов.  <br/>

Например:  <br/>

function work(a, b) {  <br/>
alert( a + b ); // произвольная функция или метод  <br/>
}  <br/>

work = spy(work);  <br/>

work(1, 2); // 3  <br/>
work(4, 5); // 9  <br/>

for (let args of work.calls) {  <br/>
alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"  <br/>
}
P.S.: Этот декоратор иногда полезен для юнит-тестирования.   <br/>
Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.  <br/>