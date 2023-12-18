//counting the sum all products

function calculateTotalSum(list) {
  return list.reduce((totalSum, item) => {
    totalSum += item.quantity * item.price;

    return totalSum;
  }, 0);
}

export default calculateTotalSum;
