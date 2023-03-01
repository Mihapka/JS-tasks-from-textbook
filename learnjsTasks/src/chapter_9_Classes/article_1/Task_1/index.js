class Clock {
  render() {
    let date = new Date();

    let addingZero = (n) => ((n < 10) ? '0' + n : n);

    let hour = addingZero(date.getHours());
    let min = addingZero(date.getMinutes());
    let sec = addingZero(date.getSeconds());

    let output = `${hour}:${min}:${sec}`;

    console.log(output);
  }
  stop(timer) {
    this.timer = timer;
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock();
clock.start();
setTimeout(clock.stop, 3000, clock.timer);