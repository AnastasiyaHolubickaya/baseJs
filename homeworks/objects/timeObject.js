//object describing the time (hours, minutes, seconds)

const time = {
  currentDate: new Date(),
  hour: 0,
  minutes: 0,
  seconds: 0,

  update() {
    //fill the properties of the object with the current time

    this.hour = this.currentDate.getHours();
    this.minutes = this.currentDate.getMinutes();
    this.seconds = this.currentDate.getSeconds();
  },

  show() {
    return this.currentDate.toTimeString().slice(0, 8);
  },

  changeSeconds(s) {
    return this.currentDate.setSeconds(this.seconds + s);
  },

  changeMinutes(m) {
    return this.currentDate.setMinutes(this.minutes + m);
  },

  changeHour(h) {
    return this.currentDate.setHours(this.hour + h);
  },
};

export default time;
