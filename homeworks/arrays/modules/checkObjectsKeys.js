import isObject from './isObject.js';
import areArraysEqual from './areArraysEqual.js';

// comparing two objects by keys

function checkObjectsKeys(objectOne, objectTwo) {
  if (!isObject(objectOne)) {
    throw new Error(`first element ${objectOne} - is not a object!`);
  }

  if (!isObject(objectTwo)) {
    throw new Error(`second element ${objectTwo} - is not a object!`);
  }

  let keys1 = Object.keys(objectOne);
  let keys2 = Object.keys(objectTwo);

  // returns true if the objects are identical
  return areArraysEqual(keys1, keys2);
}

export default checkObjectsKeys;
