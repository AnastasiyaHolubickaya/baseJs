function areArraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length && arr1.every((item) => arr2.includes(item))
  );
}

export default areArraysEqual;
