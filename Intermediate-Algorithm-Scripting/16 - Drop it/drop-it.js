function dropElements(arr, func) {
  let indexArr = [];
  let newArr = [];

  indexArr = arr.filter((item) => func(item));

  newArr = arr.slice(arr.indexOf(indexArr[0]), arr.length);

  if (newArr.filter((item) => func(item)).length > 0) {
    return newArr;
  } else {
    return [];
  }
}

dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
});
