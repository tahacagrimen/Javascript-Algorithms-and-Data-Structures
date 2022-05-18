# Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

### My Solution

```javascript
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
```
