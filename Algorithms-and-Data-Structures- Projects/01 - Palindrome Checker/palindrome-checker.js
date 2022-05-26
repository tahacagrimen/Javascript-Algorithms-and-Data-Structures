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
