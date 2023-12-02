//конвертер доллара в евро
const converter = (currency) => {
  const curse = 0.91;
  let res = 0;
  if (!isNaN(currency)) {
    res = currency * curse;
  }
  return res.toFixed(1);
};
export default converter;