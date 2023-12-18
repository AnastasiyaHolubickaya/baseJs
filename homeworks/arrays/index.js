import sortList from './modules/sortShoppingList.js';
import updateBoughtStatus from './modules/updateBoughtStatus.js';
import removeFromArray from './modules/removeFromArray.js';
import pushToArray from './modules/pushToArray.js';
import calculateTotalSum from './modules/calculateTotalSum.js';
import calculateSumByCategory from './modules/calculateSumByCategory.js';
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

console.log(sortList(shoppingList, 'price'));
console.log(removeFromArray(shoppingList, 'bread'));
console.log(updateBoughtStatus(shoppingList, 'wine', true));

console.log(sortList(shoppingList));

const newList = pushToArray(shoppingList, {
  name: 'rom',
  quantity: 2,
  price: 4,
  sum: 8,
  bought: false,
});
console.log(calculateTotalSum(newList));
console.log(
  `сума придбаних товарів - ${
    calculateSumByCategory(newList)[0]
  }, сума не придбаних товарів - ${calculateSumByCategory(newList)[1]}`
);
console.log(sortBySum(newList));
