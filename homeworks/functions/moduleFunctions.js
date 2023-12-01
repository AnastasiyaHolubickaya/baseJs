 export const perfectNumber = (num) => {
  let res=0;
if(typeof Number(num) === "number" && !isNaN(Number(num))){
  for(let i = 0; i < Number(num); i++){
    if(Number(num) % i === 0){
      res += i;
    }
  }
}else{
  console.log("enter correct numbers")
}
//console.log(res)
 return res;
};
// функция проверяет  числа на идеальное число в заданном пользователем диапазоне
 export const isPerfectNumbers = (min, max) => {

  if((typeof Number(min) === "number" && !isNaN(Number(min)) && ((typeof Number(max) === "number" && !isNaN(Number(max)))))){
    //console.log(Number(min), Number(max));
    for (let i = Number(min); i < Number(max); i++){

      if(i === perfectNumber(i)){
        console.log( `${perfectNumber(i)} = ${i} - perfect number!`);
      }
    }
  }else{
    console.log("enter correct numbers")
  }
};

//функция показывает количество переданых ей аргументов
 export const functionArguments = (...args) => {
   console.log(`number of function arguments - ${args.length}`)
 };

// функция сравнивает числа
 export const isNumbersEqual = (num1, num2) =>{
   let flag;
   if((typeof Number(num1) === "number" && !isNaN(Number(num1)) && ((typeof Number(num2) === "number" && !isNaN(Number(num2)))))){
     if(Number(num1) < Number(num2)){
       flag = -1;
     }else if(Number(num1) > Number(num2)){
       flag = 1;
     }else{
       flag = 0;
     }
     } else{
     console.log("enter correct numbers")
   }
   return flag;
 };

 //fuctorial
 export const factorial = (num) =>{
   let fact = 0;
   if(typeof Number(num) === "number" && !isNaN(Number(num))){
    if(Number(num) === 0 || Number(num)=== 1){
      return fact = 1;
    } else{
      fact = Number(num) * factorial(num - 1);
    }
   }else{
     console.log("enter correct number")
   }
   return fact;
 };

 //unite number
 export const isUniteNumbers = (num1, num2, num3) =>{
   if((typeof Number(num1) === "number" && !isNaN(Number(num1)) && ((typeof Number(num2) === "number" && !isNaN(Number(num2)))) && ((typeof Number(num3) === "number" && !isNaN(Number(num3)))))){
     return  Number(`${num1}${num2}${num3}`);
   }
   else{
     console.log("enter correct number")
   }
 };
 //area calculation
 export const areaCalc = (width, height = 0) =>{
   if((typeof Number(width) === "number" && !isNaN(Number(width)) && ((typeof Number(height) === "number" && !isNaN(Number(height)))))){
    if( height === 0){
      return width * width;
    }
    else{
      return width * height;
    }
   }
   else{
     console.log("enter correct number")
   }
 };