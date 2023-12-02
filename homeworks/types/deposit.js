//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const deposit = (sum) => {
  let res = 0;
  let rate = 5, termInMonths = 2;
  let rateDecimal = rate / 100;
  if (!isNaN(sum)) {
    res = sum * rateDecimal * (termInMonths / 12);
  }
  return res.toFixed(2);// сокращаем до двух знаков после запятой
};

export default deposit;