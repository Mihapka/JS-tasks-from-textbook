let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printingListWithLoop(list) {
    let tmp = list;
    alert("используем цикл while");

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}


function printingListWithRecursion(list) {

//    alert("используем рекурсию");
    alert(list.value);

    if (list.next) {
        listListRecursion(list.next);
    }

}


printingListWithLoop(list);

alert("используем рекурсию");
printingListWithRecursion(list);