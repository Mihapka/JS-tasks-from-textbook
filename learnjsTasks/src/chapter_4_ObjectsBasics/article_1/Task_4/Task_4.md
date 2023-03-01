# Умножаем все числовые свойства на 2                                           <br/>

Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства   <br/>
объекта obj на 2.                                                               <br/>

Например:                                                                       <br/>

// до вызова функции                                                            <br/>
let menu = {                                                                    <br/>
width: 200,                                                                     <br/>
height: 300,                                                                    <br/>
title: "My menu"                                                                <br/>
};                                                                              <br/>

multiplyNumeric(menu);                                                          <br/>

// после вызова функции                                                         <br/>
menu = {                                                                        <br/>
width: 400,                                                                     <br/>
height: 600,                                                                    <br/>
title: "My menu"                                                                <br/>
};                                                                              <br/>
Обратите внимание, что multiplyNumeric не нужно ничего возвращать.              <br/>
Следует напрямую изменять объект.                                               <br/>

P.S. Используйте typeof для проверки, что значение свойства числовое.           <br/>