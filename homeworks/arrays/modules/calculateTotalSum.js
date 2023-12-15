//counting the sum all products
function calculateTotalSum(array) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }

  let totalSum = 0;

  array.forEach((item) => {
    totalSum += item.quantity * item.price;
  });

  return totalSum;
}

export default calculateTotalSum;
