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
