# Переведите текст вида border-left-width в borderLeftWidth     <br/>

Напишите функцию camelize(str), которая преобразует строки      <br/>
вида «my-short-string» в «myShortString».                       <br/>

То есть дефисы удаляются, а все слова после них получают        <br/>
заглавную букву.                                                <br/>

Примеры:                                                        <br/>

camelize("background-color") == 'backgroundColor';              <br/>
camelize("list-style-image") == 'listStyleImage';               <br/>
camelize("-webkit-transition") == 'WebkitTransition';           <br/>
P.S. Подсказка: используйте split, чтобы разбить строку на      <br/>
массив символов, потом переделайте всё как нужно и методом      <br/>
join соедините обратно.                                         <br/>                       