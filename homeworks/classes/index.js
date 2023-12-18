import Circle from './circle.js';
import RefillableMarker from './refillableMarker.js';

const Circle1 = new Circle(23);
console.log(Circle1.radius);

const area = Circle1.calculateArea();
console.log(area);

const perimeter = Circle1.calculatePerimeter();
console.log(perimeter);

// ---------------------------------------------------

const newRefillableMarker = new RefillableMarker(
  'aqua',
  30,
  'gfgfgfgfgfgfgfgffgfgfgfgfgfgfgfgfgfgfgfgf'
);
newRefillableMarker.write();
newRefillableMarker.colorMarker = 'grey';
newRefillableMarker.text = 'grey';
newRefillableMarker.write();
