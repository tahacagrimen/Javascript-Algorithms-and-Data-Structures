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
