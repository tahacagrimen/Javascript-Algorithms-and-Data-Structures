# Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

### My Solution

```javascript
function rot13(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() != str[i].toUpperCase() &&
      str[i].charCodeAt(0) > 77
    ) {
      str.splice(i, 1, String.fromCharCode(str[i].charCodeAt(0) - 13));
    } else if (
      str[i].toLowerCase() != str[i].toUpperCase() &&
      str[i].charCodeAt(0) <= 77
    ) {
      str.splice(i, 1, String.fromCharCode(str[i].charCodeAt(0) + 13));
    }
  }
  console.log(str.join(""));
  return str.join("");
}

rot13("SERR CVMMN!");
```
