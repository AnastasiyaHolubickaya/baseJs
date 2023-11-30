import * as functions from "./cyclesFunctions.js";
document.addEventListener("DOMContentLoaded", function () {
  function handleClick  (){
    functions.binaryChearch();
  }
  document.forms.game.btn.addEventListener("click",handleClick );
  //
  function handleClick2  (){
    functions.mult();
  }
  document.forms.mult.btn.addEventListener("click",handleClick2 );
  //
  function handleClick3  (){
    functions.data();
  }
  document.forms.data.btn.addEventListener("click",handleClick3 )

});
