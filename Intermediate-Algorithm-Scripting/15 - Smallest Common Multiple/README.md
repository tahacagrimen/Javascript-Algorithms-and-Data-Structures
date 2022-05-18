# Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

### My Solution

```javascript
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
```
