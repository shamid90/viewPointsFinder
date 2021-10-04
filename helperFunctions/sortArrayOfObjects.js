const sortArrayOfObjects = (arr) => {
  arr.sort((a, b) => {
    return b.value > a.value ? 1 : b.value < a.value ? -1 : 0;
  });
  return arr;
};

module.exports = sortArrayOfObjects;
