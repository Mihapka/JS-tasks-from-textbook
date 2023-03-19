# Перепишите, используя async/await  <br/>

Перепишите один из примеров раздела Цепочка промисов, используя   <br/>
async/await вместо .then/catch:  <br/>

function loadJson(url) {  <br/>
return fetch(url)  <br/>
.then(response => {  <br/>
if (response.status == 200) {  <br/>
return response.json();  <br/>
} else {  <br/>
throw new Error(response.status);  <br/>
}  <br/>
})  <br/>
}  <br/>

loadJson('no-such-user.json') // (3)  <br/>
.catch(alert); // Error: 404  <br/>