// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const flashDriveSize = (gb) => {
  const mb = 1024;
  const fileSize = 820;
  let res = 0;
  if (!isNaN(gb)) {
    res = (gb * mb) / fileSize;
  }
  return Math.floor(res); // округляем до наименьшего
};

export default flashDriveSize;