import binarySearch from "./binarySearch.js";
import multiple from "./multiple.js";
import date from "./date.js";

function handleClick() {
  binarySearch();
}

document.forms.game.btn.addEventListener("click", handleClick);

function handleClick2() {
  multiple();
}

document.forms.mult.btn.addEventListener("click", handleClick2);

function handleClick3() {
  date();
}

document.forms.data.btn.addEventListener("click", handleClick3);