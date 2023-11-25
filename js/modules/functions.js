export const areaCircle = (radius) => {
  let res = 0;
  if (Number(radius) !== NaN) {
    res = Math.PI * (radius * radius);
  }
  return res.toFixed(2);
};
export const speed = (distance, time) => {
  let res = 0;
  if (Number(distance) !== NaN && Number(time) !== NaN && Number(time) !== 0) {
    res = Math.round(distance / time);
  }
  return res;
};
export const converter = (currency) => {
  const curse = 0.91;
  let res = 0;
  if (Number(currency) !== NaN) {
    res = currency * curse;
  }
  return res.toFixed(1);
};
