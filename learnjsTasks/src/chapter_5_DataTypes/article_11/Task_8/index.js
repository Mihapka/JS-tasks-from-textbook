function formatDate(date) {
    let diff = new Date() - date;
    let addingZero = (n) => ((n < 10) ? '0' + n : n);

    let day = addingZero(date.getDate());
    let month = addingZero(date.getMonth()+1);
    let year = addingZero(date.getFullYear());
    let hour = addingZero(date.getHours());
    let min = addingZero(date.getMinutes());

    if (diff < 1000) {
        return "прямо сейчас";
    } else if (diff < 1000*60) {
        return `${diff/1000} сек. назад`;
    } else if (diff < 1000*60*60) {
        return `${diff/(1000*60)} мин. назад`;
    } else {
        return `${day}.${month}.${year}, ${hour}:${min}`;
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );