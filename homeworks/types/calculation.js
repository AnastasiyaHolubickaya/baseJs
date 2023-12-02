// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const calculation = (sum, price) => {
  let res = 0, remainder = 0;
  if (!isNaN(sum) && !isNaN(price) && price !== 0) {
    res = Math.floor(sum / price);
    remainder = sum % price;
  }
  return {res, remainder};
};

export default calculation;