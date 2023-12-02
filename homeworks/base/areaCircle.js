// радіус кола - площу такої окружності.
const areaCircle = (radius) => {
  let res = 0;
  if (!isNaN(radius)) {
    res = Math.PI * (radius * radius);
  }
  return res.toFixed(2);// сокращаем до двух знаков после запятой
};
export default areaCircle;