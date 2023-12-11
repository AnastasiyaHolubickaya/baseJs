const shoppingList = [
  {
    name: "potatoes",
    quantity: 10,
    price: 5,
    sum: 50,
    buy: false,
  },
  {
    name: "bread",
    quantity: 2,
    price: 2,
    sum: 4,
    buy: true,
  },
  {
    name: "wine",
    quantity: 1,
    price: 10,
    sum: 10,
    buy: false,
  },
];
//функция выводит массив отсортированный  по свойству buy
function getShoppingList(array) {
  if(!Array.isArray(array)){
    throw new Error('not array!');
  }
  return array.toSorted((item1, item2) => item1.buy - item2.buy)
}
//Функція приймає назву продукту і відзначає його як придбаний.
function updateBuyStatus(array, name) {
  if(!Array.isArray(array)){
    throw new Error('not array!');
  }
  let updateArray = array.map((value) => {
    if(!value.name){
      throw new Error("value name is absent");
    }
    if (value.name === name) {
      return {...value, buy: true};
    }
    return value;
  });
  return updateArray;
}
// функция видалення елемента з масиву
function removeFromArray(array, itemToRemove) {
  if(!Array.isArray(array)){
    throw new Error('not array!');
  }
  if(array.length === 0){
    throw new Error('the array is empty');
  }
  return array.filter(item => item.name !== itemToRemove);
}
// функция сравнивает два обекта по ключам на идентичность, используется перед методом push в функции addToArray
function checkObjectsKeys(objectOne, objectTwo) {
  if(typeof objectOne !== "object" || Array.isArray(objectOne) || objectOne === null || typeof objectTwo !== "object" || Array.isArray(objectTwo) || objectTwo === null){
    return false;
  }
  let keys1 = Object.keys(objectOne);
  let keys2 = Object.keys(objectTwo);
  // возвращает  true если  объекты идентичны
  return keys1.length === keys2.length && keys1.every(key => keys2.includes(key));
}

// додавання елементу в массив
function addToArray(array, itemToAdd) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }
  if (!checkObjectsKeys(array[0], itemToAdd)) {
    throw new Error('element is not an object');
  }
  let existingItem = array.find((element) => element.name === itemToAdd.name);
  if (existingItem) {
    array.forEach((item) => {
        item.quantity += itemToAdd.quantity;
        item.sum = item.quantity * item.price;
    })
  }else {
    array.push(itemToAdd);
  }
}
//Підрахунок суми всіх продуктів
function calculateTotalSum(array){
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }
  let totalSum = 0;
  array.forEach((item) => {
    totalSum += item.quantity * item.price;
  });
  return totalSum;
}
//Підрахунок суми всіх (не) придбаних продуктів.
function calculateSum(array){
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }
  let purchaseSum = 0, noPurchaseSum = 0;
  array.forEach((item) => {
   item.buy ? purchaseSum += item.quantity * item.price : noPurchaseSum += item.quantity * item.price;
  });
  return [purchaseSum, noPurchaseSum];
}
//сортування продуктів в залежності від суми
function sortBySum(array, sort = true){
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }
  return array.toSorted((item1, item2) => {
    if(!item1.sum || !item2.sum){
      throw new Error('the objects does not contain a value - sum');
    }
   return  sort ? item1.sum - item2.sum : item2.sum - item1.sum
  } )
}

console.log(getShoppingList(shoppingList));
console.log(removeFromArray(shoppingList, "bread"));
console.log(updateBuyStatus(shoppingList, "wine", true));
addToArray(shoppingList, {name: "rom", quantity: 2, price: 4, sum: 8, buy: false});
console.log(getShoppingList(shoppingList));
console.log(calculateTotalSum(shoppingList));
console.log(`сума придбаних товарів - ${calculateSum(shoppingList)[0]}, сума не придбаних товарів - ${calculateSum(shoppingList)[1]}`);
console.log(sortBySum(shoppingList, false));