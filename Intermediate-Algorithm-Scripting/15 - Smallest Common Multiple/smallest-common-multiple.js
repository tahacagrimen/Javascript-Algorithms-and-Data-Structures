function smallestCommons(arr) {
  let end = Math.max(...arr);
  let start = Math.min(...arr);
  let array = [];
  while (start <= end) {
    array.push(start);
    start += 1;
  }

  // The array has done
  let common = 1;
  while (common > 0) {
    array.every((item) => common % item == 0) ? common : (common += 1);
  }
  console.log(common);
  return common;
}

smallestCommons([1, 5]);
