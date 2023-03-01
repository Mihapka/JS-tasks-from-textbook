# Какой день месяца был много дней назад?   <br/>

Создайте функцию getDateAgo(date, days), возвращающую число,     <br/>
которое было days дней назад от даты date.    <br/>

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)     <br/>
вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.    <br/>

Функция должна надёжно работать при значении days=365 и больших значениях:    <br/>

let date = new Date(2015, 0, 2)    <br/>
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)    <br/>
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)    <br/>
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)    <br/>
P.S. Функция не должна изменять переданный ей объект date.    <br/>