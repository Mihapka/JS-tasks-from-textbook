class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};

/*
let options = {
template: 'h:m:s',
precision: 10000
}

let { precision = 1000 } = { template: 'h:m:s', precision: 10000 }

Деструктивное присваивание:
- constructor(options)  тоже самое что вызвать constructor(template: 'h:m:s', precision: 10000)
                        то есть, то самое options которое = { template: 'h:m:s', precision: 10000 }

- super(options);       передали родительскому конструктору объект options с двумя свойствами из которых
                        он возьмет только template

- let { precision = 1000 } = options;   еще одно деструк. присваивание
                    let { precision = 1000 } = { template: 'h:m:s', precision: 10000 }
                    тут создаётся переменная precision которая возьмет из объекта options
                    только свойство precision если оно там будет иначе будет равна 1000.

- this.precision = precision;   объявляем свойство будущего объекта и передаем ему значение переменной precision
*/