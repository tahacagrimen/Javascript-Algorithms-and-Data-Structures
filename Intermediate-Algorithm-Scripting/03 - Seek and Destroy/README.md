# Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

### My Solution

```javascript
function destroyer(arr) {
  let newArr = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    newArr = newArr.filter((item) => item != arguments[i]);
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
