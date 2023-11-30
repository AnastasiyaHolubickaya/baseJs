import * as functions from "./baseFunctions.js";

document.addEventListener("DOMContentLoaded", function () {
  const formSearchCircleArea = document.forms.formSearchCircleArea;
  const formSearchSpeed = document.forms.formSearchSpeed;
  const formConverter = document.forms.formConverter;

  function handleInputResultChange(){
    formSearchCircleArea.inputResult.value = functions.areaCircle( formSearchCircleArea.inputRadius.value );
  }
  function handleInputResCurrencyChange(){
    formConverter.inputResCurrency.value = functions.converter(formConverter.inputCurrency.value)
  }
  let dist = 0;
  let time = 0;
  function handleInputSpeedResChange(e){
    if(e.target === formSearchSpeed.inputDistance){
      dist = formSearchSpeed.inputDistance.value;
      time=0;
      // console.log(dist);
    } else if(e.target === formSearchSpeed.inputTime){
      time = formSearchSpeed.inputTime.value;
    }
    if(time !== 0 && dist !== 0){
      formSearchSpeed.inputSpeedRes.value = functions.speed(dist, time);
    }
  }
  formSearchSpeed.addEventListener("change", handleInputSpeedResChange);
  formConverter.inputCurrency.addEventListener("change", handleInputResCurrencyChange);
  formSearchCircleArea.inputRadius.addEventListener("change", handleInputResultChange);

  function removeEventHandler() {
    formSearchSpeed.removeEventListener("change", handleInputSpeedResChange);
    formConverter.inputCurrency.removeEventListener("change", handleInputResCurrencyChange);
    formSearchCircleArea.inputRadius.removeEventListener("change", handleInputResultChange);
  }
  window.addEventListener("beforeunload", removeEventHandler );

});