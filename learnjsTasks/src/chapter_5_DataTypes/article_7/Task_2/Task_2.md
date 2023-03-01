# Отфильтруйте анаграммы    <br/>

Анаграммы – это слова, у которых те же буквы в том же количестве,     <br/>
но они располагаются в другом порядке.    <br/>

Например:    <br/>

nap - pan    <br/>
ear - are - era    <br/>
cheaters - hectares - teachers    <br/>
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.    <br/>

Например:    <br/>

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];    <br/>

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"  <br/>
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.    <br/>