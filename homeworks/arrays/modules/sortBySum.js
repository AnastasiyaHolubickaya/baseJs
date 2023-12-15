//сортування продуктів в залежності від суми
function sortBySum(array, sort = true) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }

  return array.toSorted((item1, item2) => {
    if (!item1.sum || !item2.sum) {
      throw new Error('the objects does not contain a value - sum');
    }
    return sort ? item1.sum - item2.sum : item2.sum - item1.sum;
  });
}

export default sortBySum;
