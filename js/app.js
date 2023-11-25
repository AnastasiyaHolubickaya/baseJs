import * as functions from "./modules/functions.js";

document /
  addEventListener("DOMContentLoaded", function () {
    //  search  circule's area
    let input_block_search_area = document.querySelector(
      "#input_block_search_area"
    );
    let span_block_search_area = document.querySelector(
      "#span_block_search_area"
    );
    //  search speed
    let div = document.querySelector("#mass_inputs");

    let input_block_search_speed_dist = document.querySelector(
      "#input_block_search_speed_dist"
    );
    let input_block_search_speed_time = document.querySelector(
      "#input_block_search_speed_time"
    );
    let span_block_search_speed = document.querySelector(
      "#span_block_search_speed"
    );
    // converter
    let input_block_converter = document.querySelector(
      "#input_block_converter"
    );
    let span_block_converter = document.querySelector("#span_block_converter");
    //
    input_block_search_area.addEventListener("change", function () {
      console.log(input_block_search_area.value);
      let res = functions.areaCircle(input_block_search_area.value);
      span_block_search_area.innerHTML = res;
    });
    //
    input_block_converter.addEventListener("change", function () {
      console.log(input_block_converter.value);
      let res = functions.converter(input_block_converter.value);
      span_block_converter.innerHTML = res;
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
  });
