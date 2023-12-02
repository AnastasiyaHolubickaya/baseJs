const perfectNumber = (num) => {
  let res = 0;
  if (typeof num === "number" && !isNaN(num)) {
    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        res += i;
      }
    }
  } else {
    console.log("enter correct numbers")
  }
//console.log(res)
  return res;
};
// функция проверяет  числа на идеальное число в заданном пользователем диапазоне
 const isPerfectNumbers = (min, max) => {

  if ((typeof min === "number" && !isNaN(min) && ((typeof max === "number" && !isNaN(max))))) {
    //console.log(Number(min), Number(max));
    for (let i = min; i <= max; i++) {

      if (i === perfectNumber(i)) {
        console.log(`${perfectNumber(i)} = ${i} - perfect number!`);
      }
    }
  } else {
    console.log("enter correct numbers")
  }
};
export default isPerfectNumbers;