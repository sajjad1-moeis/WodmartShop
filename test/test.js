// function Len(str) {
//   let arr = [];
//   let split = str.split("");
//   let y = split.forEach((char) => {
//     arr[char] ? arr[char].push(char) : (arr[char] = [char]);
//   });
//   let reduce = [];
//   for (let i in arr) {
//     if (arr[i].length > 1) {
//       reduce.push(i);
//     }
//   }
//   return reduce;
// }

// console.log(Len(str));
let str = "aaaaabccdffxxxaavvbtgerilooasdfq";
// let r = str.split("").sort();
// console.log(r);
// let arr = [];
// for (let i = 0; i < r.length; i++) {
//   if (r[i] === r[i + 1]) {
//     arr.push(r[i]);
//   }
// }
// console.log(new Set(arr));
function repeatChar(text) {
  const counts = {};
  let resultValue = "";
  for (let i = 0; i < text.length; i++) {
    counts[text.charAt(i)] = (counts[text.charAt(i)] || 0) + 1;
  }
  for (let item in counts) {
    if (counts[item] > 1) {
      for (let i = 0; i < counts[item]; i++) {
        resultValue += item;
      }
    }
  }
  return resultValue;
}
console.log(repeatChar(str));
