function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);


  return (tomorrow - now) / 1000;
}

alert( getSecondsToTomorrow() );


