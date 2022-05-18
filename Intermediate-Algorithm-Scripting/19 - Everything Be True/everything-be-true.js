function truthCheck(collection, pre) {
  collection = collection.every((item) => Boolean(item[pre]) == true);
  return collection;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);
