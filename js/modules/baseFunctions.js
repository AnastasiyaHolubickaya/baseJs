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
