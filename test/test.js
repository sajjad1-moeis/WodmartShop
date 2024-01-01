function result(add) {
  let bg = "";
  for (let i = 0; i < add.length; i++) {
    if (add[i] - add[i + 1] === -1) {
      if (!add.includes(add[i] - 1)) {
        bg += `${add[i]}-`;
      }
    } else {
      bg += `${add[i]};`;
    }
  }
  console.log(bg.split(";"));
}
result([1, 2, 3, 4, 5, 8, 55, 56, 57, 58, 89, 90, 91, 5555, 5556]);
