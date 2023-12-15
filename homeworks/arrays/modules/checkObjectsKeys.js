// comparing two objects by keys
function checkObjectsKeys(objectOne, objectTwo) {
  if (
    typeof objectOne !== 'object' ||
    Array.isArray(objectOne) ||
    objectOne === null
  ) {
    throw new Error(`first element ${objectOne} - is not a object!`);
  }
  if (
    typeof objectTwo !== 'object' ||
    Array.isArray(objectTwo) ||
    objectTwo === null
  ) {
    throw new Error(`second element ${objectTwo} - is not a object!`);
  }

  let keys1 = Object.keys(objectOne);
  let keys2 = Object.keys(objectTwo);

  // returns true if the objects are identical
  return (
    keys1.length === keys2.length && keys1.every((key) => keys2.includes(key))
  );
}

export default checkObjectsKeys;
