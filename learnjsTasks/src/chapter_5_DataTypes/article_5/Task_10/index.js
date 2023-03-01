
function shuffle(array) {
    let rand = 1 - 0.5 + Math.random() * (array.length - 1 + 1);
    array.sort(() => Math.random(rand) - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

