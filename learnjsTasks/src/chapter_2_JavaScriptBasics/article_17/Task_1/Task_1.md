# Перепишите с использованием функции-стрелки           <br/>

Замените код Function Expression стрелочной функцией:   <br/>

function ask(question, yes, no) {                       <br/>
if (confirm(question)) yes()                            <br/>
else no();                                              <br/>
}                                                       <br/>

ask(                                                    <br/>
"Вы согласны?",                                         <br/>
function() { alert("Вы согласились."); },               <br/>
function() { alert("Вы отменили выполнение."); }        <br/>
);                                                      <br/>