//Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const searchSpeed = (distance, time) => {
  let res = 0;
  if (!isNaN(distance) && !isNaN(time)) {
    res = Math.round(distance / time);
  }
  return res;
};

export default searchSpeed;