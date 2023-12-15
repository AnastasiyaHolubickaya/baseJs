//calculating the sum by category purchased or not purchased
function calculateSumByCategory(array) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }

  let purchaseSum = 0,
    noPurchaseSum = 0;

  array.forEach((item) => {
    item.bought
      ? (purchaseSum += item.quantity * item.price)
      : (noPurchaseSum += item.quantity * item.price);
  });

  return [purchaseSum, noPurchaseSum];
}

export default calculateSumByCategory;
