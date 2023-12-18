import car from './carObject.js';
import time from './timeObject.js';
import calcWithFractions from './fractionDescription.js';

//* Calling car object methods

car.addDrivers('drive2', 'den');

car.show();

console.log(car.searchByName('Alex'));

car.calculateTimeFuelWithBreaks(345);

//* Calling time object methods

time.update();

console.log(time.show());

time.changeSeconds(15);

time.changeHour(3);

time.changeMinutes(50);

console.log(time.show());

//* Calling calcWithFractions object methods

calcWithFractions.fillObject(23, 15, 34, 8);

calcWithFractions.addingFractions();

calcWithFractions.subtractingFractions();

calcWithFractions.multiplexFractions();

calcWithFractions.divisionFractions();
