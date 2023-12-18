class Circle {
  #radius = 0;

  constructor(radius) {
    if (this.#checkValue(radius)) {
      this.#radius = radius;
    }
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    if (this.#checkValue(this.#radius)) {
      this.#radius = value;
    }
  }

  #checkValue(value) {
    return value && typeof value === 'number';
  }

  get diameter() {
    return 2 * this.#radius;
  }

  calculateArea() {
    return Math.round(Math.PI * Math.pow(this.#radius, 2));
  }

  calculatePerimeter() {
    return Math.round(2 * Math.PI * this.#radius);
  }
}

export default Circle;
