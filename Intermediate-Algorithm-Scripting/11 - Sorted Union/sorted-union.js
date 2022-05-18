function uniteUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(...arguments[i]);
  }
  arr.filter((item) => {
    if (newArr.indexOf(item) == -1) {
      newArr.push(item);
    }
  });

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
