import sortShoppingList from './modules/sortShoppingList.js';
import updateBoughtStatus from './modules/updateBoughtStatus.js';
import removeFromArray from './modules/removeFromArray.js';
import pushToArray from './modules/pushToArray.js';
import calculateTotalSum from './modules/calculateTotalSum.js';
import calculateSumByCategory from './modules/calculateNotBoughtSum.js';
import sortBySum from './modules/sortBySum.js';

const shoppingList = [
  {
    name: 'potatoes',
    quantity: 10,
    price: 5,
    sum: 50,
    bought: false,
  },
  {
    name: 'bread',
    quantity: 2,
    price: 2,
    sum: 4,
    bought: true,
  },
  {
    name: 'wine',
    quantity: 1,
    price: 10,
    sum: 10,
    bought: false,
  },
];

console.log(sortShoppingList(shoppingList));
console.log(removeFromArray(shoppingList, 'bread'));
console.log(updateBoughtStatus(shoppingList, 'wine', true));
pushToArray(shoppingList, {
  name: 'rom',
  quantity: 2,
  price: 4,
  sum: 8,
  bought: false,
});
console.log(sortShoppingList(shoppingList));
console.log(calculateTotalSum(shoppingList));
console.log(
  `сума придбаних товарів - ${
    calculateSumByCategory(shoppingList)[0]
  }, сума не придбаних товарів - ${calculateSumByCategory(shoppingList)[1]}`
);
console.log(sortBySum(shoppingList, false));
