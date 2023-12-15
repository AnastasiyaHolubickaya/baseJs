// update product's status on true
function updateBoughtStatus(array, name) {
  if (!Array.isArray(array)) {
    throw new Error('not array!');
  }

  return array.map((value) => {
    if (!value.name) {
      throw new Error('value name is absent');
    }
    if (value.name === name) {
      return { ...value, bought: true };
    }
    return value;
  });
}

export default updateBoughtStatus;
