# Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

### My Solution

```javascript
function palindrome(str) {
  str = str.toLowerCase();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() != str[i].toUpperCase() ||
      /^.*?[0-9]$/.test(str[i]) == true
    ) {
      arr.push(str[i]);
    }
  }
  console.log(arr);
  if (arr.join("") == arr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("My age is 0, 0 si ega ym.");
```
