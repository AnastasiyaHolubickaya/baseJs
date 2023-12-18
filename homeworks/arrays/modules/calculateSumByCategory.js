//calculating the sum by category purchased or not purchased

//? filter() reduce()

function calculateSumByCategory(list) {
  let purchaseSum = list
    .filter((item) => item.bought)
    .reduce((total, item) => total + item.quantity * item.price, 0);

  let noPurchaseSum = list
    .filter((item) => !item.bought)
    .reduce((total, item) => total + item.quantity * item.price, 0);

  return [purchaseSum, noPurchaseSum];
}

// ? reduce()

// function calculateSumByCategory(list) {
//   return list.reduce(
//     (totalSum, item) => {
//       const sum = item.quantity * item.price;

//       totalSum[item.bought ? 0 : 1] += sum;

//       return totalSum;
//     },

//     [0, 0]
//   );
// }

export default calculateSumByCategory;
