# Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

### My Solution

```javascript
function myReplace(str, before, after) {
  if (
    (before[0] !== before[0].toUpperCase() &&
      after[0] !== after[0].toUpperCase()) ||
    (before[0] === before[0].toUpperCase() &&
      after[0] === after[0].toUpperCase())
  ) {
    str = str.replace(before, after);
  } else if (
    before[0] === before[0].toUpperCase() &&
    after[0] !== after[0].toUpperCase()
  ) {
    after = after.replace(after[0], after[0].toUpperCase());
    str = str.replace(before, after);
  } else if (
    before[0] !== before[0].toUpperCase() &&
    after[0] === after[0].toUpperCase()
  ) {
    after = after.replace(after[0], after[0].toLowerCase());
    str = str.replace(before, after);
  }

  console.log(str);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
