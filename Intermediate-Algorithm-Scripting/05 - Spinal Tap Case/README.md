# Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

### My Solution

```javascript
function spinalCase(str) {
  console.log(
    str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase()
  );
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("thisIsSpinalTap");
```
