//sort by sum
function sortBySum(list, typeOfSort = true) {
  if (list.some((item) => !item.sum)) {
    throw new Error('One or more objects do not contain a value - sum');
  }

  const sortedList = list.toSorted((item1, item2) => item1.sum - item2.sum);

  if (!typeOfSort) {
    sortedList.reverse();
  }

  return sortedList;
}

export default sortBySum;
