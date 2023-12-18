import checkObjectsKeys from './checkObjectsKeys.js';

// add an element to  array
function pushToArray(list, itemToAdd) {
  if (!Array.isArray(list)) {
    throw new Error('not array!');
  }

  if (!checkObjectsKeys(list[0], itemToAdd)) {
    throw new Error('object keys are not identical!');
  }
  const updateList = [...list];
  const index = updateList.findIndex((item) => item.name === itemToAdd.name);

  console.log(index);

  if (index !== -1) {
    updateList[index].quantity += itemToAdd.quantity;
    updateList[index].sum =
      updateList[index].quantity * updateList[index].price;
  }

  updateList.push(itemToAdd);

  return updateList;
}

export default pushToArray;
