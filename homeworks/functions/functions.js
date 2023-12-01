import * as functions from "./moduleFunctions.js";

document.addEventListener("DOMContentLoaded", function () {

  function handleClick  (){
    console.log("click");
    let minNum = prompt("enter min number");
    let maxNum = prompt("enter max number");
    functions.isPerfectNumbers(minNum, maxNum);
   //functions.perfectNumber(28);
  }
  document.forms.formPerfectNum.btn.addEventListener("click",handleClick );

  functions.functionArguments(23,45,56,56);

  console.log(`isNumbersEqual - ${functions.isNumbersEqual(98, 98)}`);

  console.log(`factorial 5 - ${functions.factorial(5)}`);

  console.log(`isUniteNumbers - ${functions.isUniteNumbers(7,67,4)}`);

  console.log(`areaCalc - ${functions.areaCalc(5)}`);
});