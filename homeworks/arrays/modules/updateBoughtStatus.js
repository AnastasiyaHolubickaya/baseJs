// update product's status on true
function updateBoughtStatus(array, name) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }

  const index = array.findIndex((item) => item.name === name);

  const updatedArray = [...array];

  updatedArray[index].bought = true;

  return updatedArray;
}

export default updateBoughtStatus;
