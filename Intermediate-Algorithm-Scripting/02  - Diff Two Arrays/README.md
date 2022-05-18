# Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

### My Solution

```javascript
function diffArray(arr1, arr2) {
  const newArr = [];
  arr1
    .filter((item) => arr2.includes(item) === false)
    .map((item) => newArr.push(item));
  arr2
    .filter((item) => arr1.includes(item) === false)
    .map((item) => newArr.push(item));
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
