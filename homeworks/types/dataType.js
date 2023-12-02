import flashDriveSize from "./flashDriveSize.js";
import calculation from "./calculation.js";
import revers from "./revers.js";
import deposit from "./deposit.js";

//получаем  dom elements
const formFlashSize = document.forms.formFlashSize;
const formCostCalc = document.forms.formCostCalc;
const formReversNumber = document.forms.formReversNumber;
const formSearchPercent = document.forms.formSearchPercent;

function handleInputResChange() {
  formFlashSize.inputRes.value = flashDriveSize(Number(formFlashSize.inputGb.value));
}

function handleInputResReversChange() {
  formReversNumber.inputResRevers.value = revers(Number(formReversNumber.inputNumber.value));
}

function handleinputResPercentChange() {
  formSearchPercent.inputResPercent.value = deposit(Number(formSearchPercent.inputSumDeposit.value));
}

let sum = 0, price = 0;

function handleInputsChange(e) {
  if (e.target === formCostCalc.inputSum) {
    sum = formCostCalc.inputSum.value;
  }
  if (e.target === formCostCalc.inputPrice) {
    price = formCostCalc.inputPrice.value;
  }
  formCostCalc.inputResultCoast.value = calculation(Number(sum), Number(price)).res;
  formCostCalc.inputRestMoney.value = calculation(Number(sum), Number(price)).remainder;
}

formFlashSize.inputGb.addEventListener("change", handleInputResChange);
formCostCalc.addEventListener("change", handleInputsChange);
formReversNumber.inputNumber.addEventListener("change", handleInputResReversChange);
formSearchPercent.inputSumDeposit.addEventListener("change", handleinputResPercentChange);