// объект автомобиль
const car = {
  manufacturer: "mercedes",
  model: 126,
  yearManufacture: 1980,
  averageSpeed: 100,
  fuelTankVolume: 40,
  averageFuelConsumption: 10,
  drivers: {
    drive1: "Alex",
    drive2: "Den",
  },
  test: {
    innerTest: {
      value: "123",
    },
  },
  // прихований  метод  виводу свойств та значень об'єкта, незалежний від this , приймає любий об'єкт з любой вкладеностю
  _getObject(object) {
    Object.entries(object).forEach(([item, value]) => {
      if (typeof value !== "function") {
        if (typeof value === "object") {
          this._getObject(value);
        } else {
          console.log(`${item} - ${value}`);
        }
      }
    });
  },
  // викликає _getObject  передає поточний об'ект
  show() {
    this._getObject(this);
  },
  // метод додає в об'єкт нового водія, з перевіркою  key
  addDrivers(driver, name) {
    Object.keys(this.drivers).forEach((key) =>
      key !== driver
        ? (this.drivers[driver] = name)
        : console.log(` this key -  ${key} -  exist, enter  other key`)
    );
  },
  searchByName(driver) {
    // проверяем по имени, есть ли такой водитель
    for (let value of Object.values(this.drivers)) {
      if (value === driver) {
        return true;
      }
    }
    return false;
  },
  //метод отримуе  відстань , рахуе необхідний час та кількість палива, з урахуванням перерв
  isTime(distance) {
    let totalTime = distance / this.averageSpeed;
    let breaking = totalTime / 4;
    return console.log(
      `необхідний час -  ${totalTime / breaking}, кількіcть палива - ${
        (this.averageFuelConsumption / 100) * distance
      }`
    );
  },
};
//
car.addDrivers("drive2", "den");
car.show();
console.log(car.searchByName("Alex"));
car.isTime(345);
//---------------------------------------------------------------------------------------------------
//об'єкт, що описує час (години, хвилини, секунди)
const time = {
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
time.update();
console.log(time.show());
time.changeSeconds(15);
time.changeHour(3);
time.changeMinutes(50);
console.log(time.show());

//об'єкт, що описує звичайний дріб
const fractionDescription = {
  numerator: 0,
  denominator: 0,
};
//------------------------------------------------------------------------
//об'єкт, який має методи роботи з дробом
const calcWithFractions = {
  //находиt наименьшее общее кратное aлгоритм Евклида
  findGCD(a, b) {
    return b === 0 ? a : this.findGCD(b, a % b);
  },
  // Находиt общий знаменатель
  findLCM(x, y) {
    return (x * y) / this.findGCD(x, y);
  },
  //приводиt к общему знаменателю
  convertToCommonDenominator(a, b, c, d) {
    var commonDenominator = this.findLCM(b, d);
    // Приводиt числители к общему знаменателю
    var numeratorA = a * (commonDenominator / b);
    var numeratorC = c * (commonDenominator / d);
    // Возвращаеt результат в виде объекта с числителем и знаменателем
    return {
      numeratorA: numeratorA,
      numeratorC: numeratorC,
      commonDenominator: commonDenominator,
    };
  },
  // сокращаеt дробь
  simplifyFraction(numerator, denominator) {
    const commonFactor = this.findGCD(numerator, denominator);
    // Скорочення дробу
    const simplifiedNumerator = numerator / commonFactor;
    const simplifiedDenominator = denominator / commonFactor;
    //console.log(`${simplifiedNumerator} / ${simplifiedDenominator}`);
    return [simplifiedNumerator, simplifiedDenominator];
  },
  // сложение дробей
  addingFractions(frac1, frac2) {
    let commonDenom = this.convertToCommonDenominator(
      frac1.numerator,
      frac1.denominator,
      frac2.numerator,
      frac2.denominator
    );
    let sum = commonDenom.numeratorA + commonDenom.numeratorC;
    let simplifiedFraction = this.simplifyFraction(
      sum,
      commonDenom.commonDenominator
    );
    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },
  //вычитание дробей
  subtractingFractions(frac1, frac2) {
    let commonDenom = this.convertToCommonDenominator(
      frac1.numerator,
      frac1.denominator,
      frac2.numerator,
      frac2.denominator
    );
    let sum = commonDenom.numeratorA - commonDenom.numeratorC;
    let simplifiedFraction = this.simplifyFraction(
      sum,
      commonDenom.commonDenominator
    );
    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },
  //
  multiplexFractions(frac1, frac2) {
    let simplifiedFraction = this.simplifyFraction(
      frac1.numerator * frac2.numerator,
      frac1.denominator * frac2.denominator
    );
    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },
  divisionFractions(frac1, frac2) {
    let simplifiedFraction = this.simplifyFraction(
      frac1.numerator * frac2.denominator,
      frac1.denominator * frac2.numerator
    );
    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },
};
let frac1 = { numerator: 23, denominator: 15 };
let frac2 = { numerator: 34, denominator: 5 };
calcWithFractions.addingFractions(frac1, frac2);
calcWithFractions.subtractingFractions(frac1, frac2);
calcWithFractions.multiplexFractions(frac1, frac2);
calcWithFractions.divisionFractions(frac1, frac2);
