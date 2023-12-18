class Marker {
  colorMarker = '';
  inkLevel = 0;
  text = '';

  constructor(color, inkLevel, text) {
    if (this.#checkValueString(text)) {
      this.text = text;
    }

    if (this.#checkValueString(color)) {
      this.colorMarker = color;
    }

    if (this.#checkValueNumber(inkLevel)) {
      this.inkLevel = inkLevel;
    }
  }

  set text(value) {
    if (this.#checkValueString(value)) {
      this.text = value;
    }
  }

  set inkLevel(value) {
    if (this.#checkValueNumber(value)) {
      this.inkLevel = value;
    }
  }

  set colorMarker(value) {
    if (this.#checkValueString(value)) {
      this.colorMarker = value;
    }
  }

  textRemoveSpaces(value) {
    return value.replace(/\s/g, '');
  }

  #checkValueString(value) {
    return value && typeof value === 'string' && value.length > 0;
  }

  #checkValueNumber(value) {
    return value && typeof value === 'number';
  }

  write() {
    const textLength = this.textRemoveSpaces(this.text).length;

    if (this.inkLevel < textLength) {
      throw new Error('Немає достатньо чорнила!');
    }

    console.log(`%cДрукую: ${this.text}`, `color: ${this.colorMarker};`);

    this.inkLevel -= textLength / 2;
  }
}

export default Marker;
