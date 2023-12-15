import checkObjectsKeys from './checkObjectsKeys.js';

// add an element to  array
function pushToArray(array, itemToAdd) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }

  if (!checkObjectsKeys(array[0], itemToAdd)) {
    throw new Error('object keys are not identical!');
  }

  let existingItem = array.find((element) => element.name === itemToAdd.name);

  if (existingItem) {
    array.forEach((item) => {
      item.quantity += itemToAdd.quantity;
      item.sum = item.quantity * item.price;
    });
  } else {
    array.push(itemToAdd);
  }
}

export default pushToArray;
