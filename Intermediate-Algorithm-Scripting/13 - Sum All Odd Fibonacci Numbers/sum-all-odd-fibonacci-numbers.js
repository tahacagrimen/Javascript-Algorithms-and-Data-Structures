function sumFibs(num) {
  let i = 1;
  let index = 0;
  let arr = [1];
  while (i <= num) {
    arr.push(i);
    i += arr[index];
    index += 1;
  }
  return arr.filter((item) => item % 2 == 1).reduce((a, b) => a + b, 0);
}

sumFibs(10);
