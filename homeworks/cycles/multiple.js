//таблиця множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
const multiple = () => {
  for (let i = 2; i <= 9; i++) {
    for (let a = 1; a <= 10; a++) {
      console.log(`${i} * ${a} = ${i * a}`);
    }
  }
};

export default multiple;