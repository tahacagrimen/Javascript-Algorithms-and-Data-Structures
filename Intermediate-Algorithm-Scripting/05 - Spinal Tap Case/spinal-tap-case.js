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
