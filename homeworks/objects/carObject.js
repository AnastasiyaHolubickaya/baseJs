// объект автомобиль
const car = {
  manufacturer: 'mercedes',
  model: 126,
  yearManufacture: 1980,
  averageSpeed: 100,
  fuelTankVolume: 40,
  averageFuelConsumption: 10,
  drivers: {
    drive1: 'Alex',
    drive2: 'Den',
  },
  test: {
    innerTest: {
      value: '123',
    },
  },

  //Recursive method for displaying properties of an object with any level of nesting

  getObject(object) {
    Object.entries(object).map(([item, value]) => {
      if (typeof value !== 'function') {
        if (typeof value === 'object') {
          this.getObject(value);
        } else {
          console.log(`${item} - ${value}`);
        }
      }
    });
  },

  show() {
    this.getObject(this);
  },

  addDrivers(driver, name) {
    Object.keys(this.drivers).map((key) =>
      key !== driver
        ? (this.drivers[driver] = name)
        : console.log(` this key -  ${key} -  exist, enter  other key`)
    );
  },

  searchByName(driver) {
    for (let value of Object.values(this.drivers)) {
      if (value === driver) {
        return true;
      }
    }

    return false;
  },

  //Method receives the distance, calculates the required time and amount of fuel, taking breaks into account

  calculateTimeFuelWithBreaks(distance) {
    let totalTime = distance / this.averageSpeed;
    let breaking = totalTime / 4;
    return console.log(
      `необхідний час -  ${totalTime / breaking}, кількіcть палива - ${
        (this.averageFuelConsumption / 100) * distance
      }`
    );
  },
};

export default car;
