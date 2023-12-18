import Marker from './marker.js';

class RefillableMarker extends Marker {
  #capacity = 100;

  constructor(colorMarker, inkLevel, text) {
    super(colorMarker, inkLevel, text);
  }

  #refill() {
    this.inkLevel = this.#capacity;
  }

  write() {
    const textLength = this.textRemoveSpaces(this.text).length;

    if (this.inkLevel < textLength) {
      console.log('Немає достатньо чорнила! Заправляю!');
      this.#refill();
    }

    console.log(`%cДрукую: ${this.text}`, `color: ${this.colorMarker};`);

    this.inkLevel -= textLength / 2;
  }
}

export default RefillableMarker;
