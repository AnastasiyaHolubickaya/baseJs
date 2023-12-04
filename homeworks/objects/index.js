// объект автомобиль
let car = {
  manufacturer: 'mercedes',
  model: 126,
  yearManufacture: 1980,
  averageSpeed: 100,
  fuelTankVolume: 40,
  averageFuelConsumption: 10,
  drivers:{
    drive1: 'Alex',
    drive2: 'Den'
  },
  show() {
    for (let key in car) {
      // выводим все свойства, кроме методов и вложенных объектов
      if (car.hasOwnProperty(key) && typeof car[key] !== 'function') {
        if (typeof car[key] !== 'object') {
          console.log(`${key} - ${car[key]}`);
        } else {
          //выводим значения вложенного свойства-объекта
          console.log(`${key}:`);
          for (let nestedObjectKey in car[key]) {
            console.log(`${nestedObjectKey} - ${car[key][nestedObjectKey]}`);
          }
        }
      }
    }
  },
  addDrivers(dr, name) {
    // добавляем нового водителя
    this.drivers[dr] = name
  },
  isSuchADrivers(dr) {
    // проверяем по имени есть ли такой водитель
     for(let value of Object.values(this.drivers)){
       if(value === dr){
         return console.log(true)
       }
     }
    return console.log(false)
  },
  //Підрахунок необхідного часу та кількості палива
  isTime(distance) {
    let totalTime = distance / this.averageSpeed;
    let breaking = totalTime / 4;
    return console.log(`необхідний час -  ${totalTime / breaking}, кількіcть палива - ${this.averageFuelConsumption / 100 * distance }`)
  }
};

car.addDrivers("drive3", "den");
//console.log(car.drivers);
car.show();
car.isSuchADrivers('Alex');
car.isTime(345);

//об'єкт, що описує час (години, хвилини, секунди)
let time = {
  currentDate: new Date(),
  hour: 0,
  minutes: 0,
  seconds: 0,
  update() {
    //заполняем свойства объект текущим временем
    this.hour = this.currentDate.getHours();
    this.minutes = this.currentDate.getMinutes();
    this.seconds = this.currentDate.getSeconds();
  },
  show() {
    return this.currentDate.toTimeString().slice(0, 8)
  },
  changeSeconds(s) {
    return this.currentDate.setSeconds(this.seconds + s);
  },
  changeMinutes(m) {
    return this.currentDate.setMinutes(this.minutes + m);
  },
  changeHour(h) {
    return this.currentDate.setHours( this.hour + h);
  },
};
time.update();
console.log(time.show());
time.changeSeconds(15);
time.changeHour(3);
time.changeMinutes(50);
console.log(time.show());