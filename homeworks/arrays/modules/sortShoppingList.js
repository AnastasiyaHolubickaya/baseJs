//sort array by property  bought
function sortList(list, name) {
  if (!Array.isArray(list)) {
    throw new Error('not array!');
  }
  //sort first false
  return list.toSorted((item1, item2) => item1[name] - item2[name]);
}

export default sortList;
