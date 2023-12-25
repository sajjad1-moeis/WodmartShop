function Result(Str) {
  let Number = Str.sort((a, b) => b - a);
  let MAxNumber = Number[0];
  let ResultNumber = Number.slice(1).reduce((p, n) => {
    return p + (MAxNumber - n);
  }, 0);
  console.log(ResultNumber);
}
Result([5, 6, 3, 2, 1]);
