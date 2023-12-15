//sort array by property  bought
function sortShoppingList(array) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }
  //sort first false
  return array.toSorted((item1, item2) => item1.bought - item2.bought);
}

export default sortShoppingList;
