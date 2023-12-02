// функция сравнивает числа
const isNumbersEqual = (num1, num2) => {
  let flag = 0;
  if ((typeof num1 === "number" && !isNaN(num1) && ((typeof num2 === "number" && !isNaN(num2))))) {
    if (num1 < num2) {
      flag = -1;
    } else if (num1 > num2) {
      flag = 1;
    }
  } else {
    return console.error("enter correct numbers");
  }
  return flag;
};
export default isNumbersEqual;