const factorial = (num) => {
  let fact = 0;

  if (typeof num === "number" && !isNaN(num)) {
    if (num === 0 || num === 1) {
      return fact = 1;
    } else {
      fact = num * factorial(num - 1);
    }
  } else {
    return console.log("enter correct number")
  }
  return fact;
};

export default factorial;