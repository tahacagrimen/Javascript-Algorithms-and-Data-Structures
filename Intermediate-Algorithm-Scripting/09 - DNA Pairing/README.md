# DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

### My Solution

```javascript
function pairElement(str) {
  str = str.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") {
      str[i] = str[i] + "C";
      str[i] = str[i].split("");
    } else if (str[i] == "C") {
      str[i] = str[i] + "G";
      str[i] = str[i].split("");
    } else if (str[i] == "A") {
      str[i] = str[i] + "T";
      str[i] = str[i].split("");
    } else if (str[i] == "T") {
      str[i] = str[i] + "A";
      str[i] = str[i].split("");
    }
  }
  return str;
}

pairElement("GCG");
```
