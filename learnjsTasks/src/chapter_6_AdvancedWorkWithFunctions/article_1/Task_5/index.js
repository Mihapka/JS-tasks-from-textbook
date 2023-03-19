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


function reversePrintingListWithLoop(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}



function reversePrintingListWithRecursion(list) {

  if (list.next) {
    reversePrintingListWithRecursion(list.next);
  }
  alert(list.value);
}


reversePrintingListWithLoop(list);

alert("используем рекурсию");
reversePrintingListWithRecursion(list);



