# Roman Numeral Converter

Convert the given number into a roman numeral.

### My Solution

```javascript
function convertToRoman(num) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";
  for (let i in roman) {
    let newNum = Math.floor(num / roman[i]);
    num -= newNum * roman[i];
    str += i.repeat(newNum);
  }
  console.log(str);
  return str;
}

convertToRoman(3999);
```
