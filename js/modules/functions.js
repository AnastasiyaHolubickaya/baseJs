// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
export const flashDriveSize = (gb) => {
  const mb = 1024;
  const fileSize = 820;
  let res = 0;
  if (!isNaN(Number(gb))) {
    res = (gb * mb) / fileSize;
  }
  return Math.floor(res); // округляем до наименьшего
};
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
export const calculation = (sum, price) => {
  let res = 0, remainder = 0;
  if(!isNaN(sum) && !isNaN(price) && price !== 0){
    res = Math.floor (sum / price);
    remainder = sum % price;
  }
  return {res, remainder};
};
// тризначне число  задом наперед
export const revers = (number) => {
  let num = Number(number);
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
//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
export const  deposit = (sum) => {
  let res = 0;
  let rate = 5, termInMonths = 2;
  let rateDecimal = rate / 100;
  if(!isNaN(Number(sum))){
    res = Number(sum)* rateDecimal * (termInMonths / 12);
  }
  return res.toFixed(2);// сокращаем до двух знаков после запятой
};
//homework base js
// радіус кола - площу такої окружності.
export const areaCircle = (radius) => {
  let res = 0;
  if (!isNaN(Number(radius))) {
    res = Math.PI * (radius * radius);
  }
  return res.toFixed(2);// сокращаем до двух знаков после запятой
};
//Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
export const speed = (distance, time) => {
  let res = 0;
  if (!isNaN(Number(distance) && !isNaN(Number(time)))) {
    res = Math.round(distance / time);
  }
  return res;
};
//конвертер доллара в евро
export const converter = (currency) => {
  const curse = 0.91;
  let res = 0;
  if (!isNaN(Number(currency))) {
    res = currency * curse;
  }
  return res.toFixed(1);
};
