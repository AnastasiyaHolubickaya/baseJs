import areaCalc from "./areaCalc.js";
import isPerfectNumbers from "./perfectNumbers.js";
import isNumbersEqual from "./isNumberEqual.js";
import showArguments from "./showArguments.js";
import factorial from "./factorial.js";
import isUniteNumbers from "./UniteNumbers.js";


showArguments(23, 45, 56, 56);

console.log(`isNumbersEqual - ${isNumbersEqual(Number(98), Number(98))}`);

console.log(`factorial 5 - ${factorial(Number(5))}`);

console.log(isUniteNumbers(0, 67, 4));

console.log(`areaCalc - ${areaCalc(Number(5))}`);

let minNum = prompt("enter min number");
let maxNum = prompt("enter max number");

isPerfectNumbers(Number(minNum), Number(maxNum));


