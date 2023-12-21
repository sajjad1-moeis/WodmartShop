// let input1 = document.querySelector(".se");
// let input2 = document.querySelector(".mi");
// let input3 = document.querySelector(".ho");

// let getHor = document.querySelector(".hor");
// let getMin = document.querySelector(".min");
// let getSecand = document.querySelector(".secand");

// let Start = document.querySelector(".btn-start");
// let Stop = document.querySelector(".btn-stop");
// let Reset = document.querySelector(".btn-reset");
// let Interval;
// let second = 0;
// let minute = 0;
// let hour = 0;
// Start.addEventListener("click", function () {
//   second = input1.value;
//   minute = input2.value;
//   hour = input3.value;
//   Interval = setInterval(() => {
//     if (second < 1) {
//       if (minute < 1) {
//         if (hour < 1) {
//           clearInterval(Interval);
//         } else {
//           hour--;
//           minute = 59;
//           second = 59;
//         }
//       } else {
//         second = 59;
//         minute--;
//       }
//     } else {
//       second--;
//     }
//     getSecand.innerHTML = second;
//     getMin.innerHTML = minute;
//     getHor.innerHTML = hour;

//     console.log(second);
//   }, 1000);

//   Start.style.display = "none";
// });
// Stop.addEventListener("click", function () {
//   input1.value = second;
//   input2.value = minute;
//   input3.value = hour;
//   clearInterval(Interval);
//   Start.style.display = "inline-block";
// });
// Reset.addEventListener("click", function () {
//   hor = "00";
//   min = "00";
//   secand = "00";

//   getHor.innerHTML = hor;
//   getMin.innerHTML = min;
//   getSecand.innerHTML = secand;
// });
let w = 100;
document.querySelector("button").onclick = () => {
  let inter = setInterval(() => {
    w = 100;
    if (w < 1) {
      clearInterval(inter);
    } else {
      w--;
      document.querySelector(".bg-black").style.width = `${w}%`;
    }
  }, 15);
};
