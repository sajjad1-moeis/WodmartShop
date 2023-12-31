let str = "H2O12P5";
console.log(str.split("P"));
function StrShimi() {
  let add = [];
  let char = [];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] - 0)) {
      char.push(str[i]);
    }
  }
  console.log(char);
  for (let r = 0; r < char.length; r++) {
    str = str.split(str[r]).join("");
    add.push(str[0]);
    console.log(str);

    console.log(add);
  }
}
StrShimi();
// let y = "i5k99j";
// console.log(y.split("i").join("").split("k")[1].split("j"));
// console.log((y = y.split("j")));
