//бинарный поиcк
const binarySearch = () => {
  //let target = Number(number);
  let start = 0;
  let end = 100;
  console.log("pick a number 0 - 100");
  for (let i = start; i <= end; i++) {
    let n = Math.round((start + end) / 2);//округляет до целого coгласно математики
    let symb = prompt(`you number > ${n}, < ${n} or = ${n}? Введіть '>', '<' або '='.`);
    if (symb !== "=") {
      switch (symb) {
        case ">":
          start = n + 1;
          break;
        case "<":
          end = n - 1;
          break;
        case "=":
          console.log(`you number ${n}`);
          break;
        default:
          prompt("Enter '>', '<' or '='");
      }
    } else {
      console.log(`you number ${n}`);
      break;
    }
  }
};
export default binarySearch;