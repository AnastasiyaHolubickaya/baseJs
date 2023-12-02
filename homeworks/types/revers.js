// тризначне число  задом наперед
const revers = (number) => {
  let num = number;
  let res = 0;
  let a = num % 10;//3
  num = Math.trunc(num / 10);// отбрасываем дробную часть
  res += a * 100;//300
  a = num % 10;//2
  num = Math.trunc(num / 10);
  res += a * 10;
  res += num;
  return res;
};

export default revers;