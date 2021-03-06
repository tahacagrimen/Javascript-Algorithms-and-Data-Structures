function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line

  const sourceKeys = Object.keys(source);
  collection = collection
    .filter((item) =>
      sourceKeys.every(
        (key) => item.hasOwnProperty(key) && item[key] == source[key]
      )
    )
    .map((item) => arr.push(item));

  // Only change code above this line

  console.log(arr);
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
