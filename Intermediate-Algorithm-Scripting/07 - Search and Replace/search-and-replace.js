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
