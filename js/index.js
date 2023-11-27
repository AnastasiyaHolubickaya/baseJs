import * as functions from "./modules/functions.js";

document /
addEventListener("DOMContentLoaded", function () {
  //получаем дом елементы
  //  search  circule's area
  const input_block_search_area = document.querySelector(
    "#input_block_search_area"
  );
  const span_block_search_area = document.querySelector(
    "#span_block_search_area"
  );
  const btnResetArea = document.querySelector("#resetFormCircleArea");
  //  search speed
  const div = document.querySelector("#mass_inputs");

  const input_block_search_speed_dist = document.querySelector(
    "#input_block_search_speed_dist"
  );
  const input_block_search_speed_time = document.querySelector(
    "#input_block_search_speed_time"
  );
  const span_block_search_speed = document.querySelector(
    "#span_block_search_speed"
  );
  const btnResetSpeed = document.querySelector("#resetFormSpeed");
  // converter
  const input_block_converter = document.querySelector(
    "#input_block_converter"
  );
  const span_block_converter = document.querySelector("#span_block_converter");
  const btnResetConverter = document.querySelector("#resetFormConverter");
  //
  //заполняем формы
  input_block_search_area.addEventListener("change", function () {
    //console.log(input_block_search_area.value);
    span_block_search_area.innerHTML = functions.areaCircle(input_block_search_area.value);
  });
  //clear form cearch area
  btnResetArea.addEventListener("click", function(){
    span_block_search_area.innerHTML = "";
  });
//
  input_block_converter.addEventListener("change", function () {
    console.log(input_block_converter.value);
    span_block_converter.innerHTML = functions.converter(input_block_converter.value);
  });
  //clear form converter
  btnResetConverter .addEventListener("click", function(){
    span_block_converter.innerHTML = "";
  });
  //
  let dist = 0,
    time = 0;
  div.addEventListener("change", function (e) {
    console.log(e);
    if (e.target === input_block_search_speed_dist) {
      dist = input_block_search_speed_dist.value;
    } else if (e.target === input_block_search_speed_time) {
      time = input_block_search_speed_time.value;
    }
    if (dist !== 0 && time !== 0) {
      span_block_search_speed.innerHTML = `${functions.speed(
        dist,
        time
      )} km/h`;
    }
  });
  // clear form search speed
  btnResetSpeed.addEventListener("click", function(){
    span_block_search_speed.innerHTML = "";
  });

});




