function destroyer(arr) {
  let newArr = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    newArr = newArr.filter((item) => item != arguments[i]);
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
