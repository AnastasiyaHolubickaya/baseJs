import * as functions from "./typeFunctions.js";

document.addEventListener("DOMContentLoaded", function () {
  //получаем  dom elements
  const formFlashSize = document.forms.formFlashSize;
  const formCostCalc = document.forms.formCostCalc;
  const formReversNumber = document.forms.formReversNumber;
  const formSearchPercent = document.forms.formSearchPercent;
  //
  function handleInputResChange(){
    formFlashSize.inputRes.value =  functions.flashDriveSize(formFlashSize.inputGb.value);
  }
  //
  function handleInputResReversChange(){
    formReversNumber.inputResRevers.value =  functions.revers(formReversNumber.inputNumber.value);
  }
  //
  function handleinputResPercentChange(){
    formSearchPercent.inputResPercent.value = functions.deposit(formSearchPercent.inputSumDeposit.value);
  }
  let sum = 0, price = 0;
  function handleInputsChange(e){
    if(e.target === formCostCalc.inputSum){
      sum = formCostCalc.inputSum.value;
    }
    if (e.target === formCostCalc.inputPrice){
      price = formCostCalc.inputPrice.value;
    }
    //console.log(sum,price);
    formCostCalc.inputResultCoast.value = functions.calculation(sum, price).res;
    formCostCalc.inputRestMoney.value = functions.calculation(sum, price).remainder;
  }
  //
  formFlashSize.inputGb.addEventListener("change", handleInputResChange);
  formCostCalc.addEventListener("change", handleInputsChange);
  formReversNumber.inputNumber.addEventListener("change", handleInputResReversChange);
  formSearchPercent.inputSumDeposit.addEventListener("change", handleinputResPercentChange);
  //
  function removeEventHandler() {
    formFlashSize.inputGb.removeEventListener("change", handleInputResChange);
    formCostCalc.removeEventListener("change", handleInputsChange);
    formReversNumber.inputNumber.removeEventListener("change", handleInputResReversChange);
    formSearchPercent.inputSumDeposit.removeEventListener("change", handleinputResPercentChange);
  }
  window.addEventListener("beforeunload", removeEventHandler );
});
