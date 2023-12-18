const calcWithFractions = {
  fraction1: {
    numerator: 0,
    denominator: 0,
  },
  fraction2: {
    numerator: 0,
    denominator: 0,
  },

  //* Fills the object

  fillObject(num1, den1, num2, den2) {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof den1 !== 'number' ||
      typeof den2 !== 'number'
    ) {
      throw new Error('enter values are not a numbers!');
    }
    this.fraction1.numerator = num1;
    this.fraction1.denominator = den1;

    this.fraction2.numerator = num2;
    this.fraction2.denominator = den2;
  },

  //*Finds the least common multiple using Euclidean algorithm

  findGCD(a, b) {
    return b === 0 ? a : this.findGCD(b, a % b);
  },

  //* Finds the common denominator

  findLCM(x, y) {
    return (x * y) / this.findGCD(x, y);
  },

  // * Leads to a common denominator

  convertToCommonDenominator(a, b, c, d) {
    var commonDenominator = this.findLCM(b, d);

    //? Reduces numerators to a common denominator
    var numeratorA = a * (commonDenominator / b);

    var numeratorC = c * (commonDenominator / d);

    //? Returns the result as an object with a numerator and denominator

    return {
      numeratorA: numeratorA,
      numeratorC: numeratorC,
      commonDenominator: commonDenominator,
    };
  },

  //* Reducing a fraction

  simplifyFraction(numerator, denominator) {
    const commonFactor = this.findGCD(numerator, denominator);

    const simplifiedNumerator = numerator / commonFactor;

    const simplifiedDenominator = denominator / commonFactor;

    return [simplifiedNumerator, simplifiedDenominator];
  },

  //* Adding fractions

  addingFractions() {
    let commonDenom = this.convertToCommonDenominator(
      this.fraction1.numerator,
      this.fraction1.denominator,
      this.fraction2.numerator,
      this.fraction2.denominator
    );

    let sum = commonDenom.numeratorA + commonDenom.numeratorC;

    let simplifiedFraction = this.simplifyFraction(
      sum,
      commonDenom.commonDenominator
    );

    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },

  //* Subtracting fractions

  subtractingFractions() {
    let commonDenom = this.convertToCommonDenominator(
      this.fraction1.numerator,
      this.fraction1.denominator,
      this.fraction2.numerator,
      this.fraction2.denominator
    );

    let sum = commonDenom.numeratorA - commonDenom.numeratorC;

    let simplifiedFraction = this.simplifyFraction(
      sum,
      commonDenom.commonDenominator
    );

    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },

  multiplexFractions() {
    let simplifiedFraction = this.simplifyFraction(
      this.fraction1.numerator * this.fraction2.numerator,
      this.fraction1.denominator * this.fraction2.denominator
    );

    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },

  divisionFractions() {
    let simplifiedFraction = this.simplifyFraction(
      this.fraction1.numerator * this.fraction2.denominator,
      this.fraction1.denominator * this.fraction2.numerator
    );

    return console.log(`${simplifiedFraction[0]} / ${simplifiedFraction[1]}`);
  },
};

export default calcWithFractions;
