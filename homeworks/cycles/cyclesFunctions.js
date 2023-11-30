//бинарный поиcк
export const binaryChearch = () =>{
  //let target = Number(number);
  let start = 0;
  let end = 100;
  console.log("pick a number 0 - 100");
  for (let i = start; i <= end; i++) {
    let n = Math.round((start + end) / 2);//округляет до целого coгласно математики
    let symb = prompt(`you number > ${n}, < ${n} or = ${n}? Введіть '>', '<' або '='.`);
    if(symb !== "="){
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
    }else {
      console.log(`you number ${n}`);
      break;
    }
  }
};
//таблиця множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
export  const mult = () => {
  /*let start = 2;
  let end = 9;
  let n = 1;*/
  for (let i = 2; i <= 9; i++) {
    for (let a = 1; a <= 10; a++) {
      console.log(`${i} * ${a} = ${i * a}`);
    }
  }

};
export const data = () =>{
  let day = parseInt(prompt("enter day"));
  let month = parseInt(prompt("enter month"));
  let year = parseInt(prompt("enter year"));
  let newDate = new Date(year, month-1, day);
  newDate.setDate(newDate.getDate() + 1);
  console.log(`next date: ${newDate}`);
};
//throw new Error('ds pf,skb');