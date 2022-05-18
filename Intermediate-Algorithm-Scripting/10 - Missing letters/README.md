# Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

### My Solution

```javascript
function fearNotLetter(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i));
  }
  arr = arr.filter(
    (item) => arr[arr.indexOf(item)] + 1 != arr[arr.indexOf(item + 1)]
  );

  console.log(String.fromCharCode(arr[0] + 1));
  if (String.fromCharCode(arr[0] + 1) != "{") {
    return String.fromCharCode(arr[0] + 1);
  } else {
    return undefined;
  }
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
```
