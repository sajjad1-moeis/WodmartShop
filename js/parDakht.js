let Random = 0;
function l() {
  let input1 = document.querySelectorAll(".amniat");
  input1.forEach((input) => {
    input.onfocus = () => {
      input.parentElement.classList.replace("border-zinc-100", "border-[#2b73e3]");
    };
    input.onblur = () => {
      input.parentElement.classList.replace("border-[#2b73e3]", "border-zinc-100");
    };
  });

  document.querySelector(".btnChangeCode").onclick = RandomImgAmniat;
  document.querySelector(".cancelPardakht").onclick = () => {
    location.href = "../index.html";
  };
  let pric = JSON.parse(localStorage.getItem("mahsol")).reduce((prev, next) => {
    return (prev += next.count * next.price);
  }, 0);
  let t2span = document.querySelectorAll(".t2");
  t2span[1].innerHTML = `${pric.toLocaleString()} تومان `;
  t2span[0].innerHTML = `پرداخت:   ${pric.toLocaleString()}   تومان  `;
  RandomImgAmniat();
  TimeKharid();
  filterValueInput();
}
function RandomImgAmniat() {
  let arr = ["", "33523", "44486", "85176", "08320", "63738"];
  Random < 5 ? Random++ : (Random = 1);
  document.querySelectorAll(".amniat")[4].id = arr[Random];
  document.querySelector(".ImgRandom").src = `../img/download (${Random}).jpg`;
}

function TimeKharid() {
  let TimeSpan = document.querySelector(".time");
  let minute = 9;
  let second = 59;
  let interval = setInterval(() => {
    if (minute < 1 && second <= 0) {
      clearInterval(interval);
    }
    if (second < 0) {
      second = 59;
      minute--;
    } else if (second === 0) {
      second = "00";
    }
    second < 10 ? (String(second).includes("0") ? (second = second) : (second = `0${second}`)) : String(minute).includes("0") ? (minute = minute) : (minute = `0${minute}`);
    minute < 1 ? (minute = "00") : console.log();
    TimeSpan.innerHTML = `${second} : ${minute}`;
    second--;
  }, 1000);
}
function filterValueInput() {
  let InputS = document.querySelectorAll(".amniat");
  InputS.forEach((input) => {
    input.oninput = () => {
      let inputText = input.value;

      // حذف هر فاصله یا کاراکتر غیر عددی از متن
      let numericText = inputText.replace(/\D/g, "");
      input.value = numericText;
    };
  });
  InputS[0].oninput = () => {
    let inputText = InputS[0].value;
    let numericText = inputText.replace(/\D/g, "");

    // جدا کردن متن به دسته‌های سه رقمی
    let separatedText = numericText.replace(/\B(?=(\d{4})+(?!\d))/g, "-");
    InputS[0].value = separatedText;
  };
}
l();
