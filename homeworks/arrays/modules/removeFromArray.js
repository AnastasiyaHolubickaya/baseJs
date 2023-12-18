// removing element from array
function removeFromArray(array, itemToRemove) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }
  if (!array.length) {
    throw new Error('the array is empty');
  }
  return array.filter((item) => item.name !== itemToRemove);
}

export default removeFromArray;
