///Random COde Amniat
let Random = 0;
async function AddInput() {
  let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
  let arr = await api.json();
  await arr.slice(13).forEach((item) => {
    document.querySelector(".TakmilInput").insertAdjacentHTML(
      "beforeend",
      `<div class="my-4">
           <p class="my-2">${item.diration} <span class="text-danger">${item.more}</span></p>
           <input type="text" class="AboutPersent rounded-full w-full form-control p-3 px-5" placeholder="${item.count}" />
         </div>`
    );
  });
  let y = document.querySelectorAll(".AboutPersent");
  y[8].maxLength = 11;
  [...y].slice(6, 9).forEach((input) => {
    input.oninput = () => {
      let inputText = input.value;
      let numericText = inputText.replace(/\D/g, "");
      input.value = numericText;
    };
  });
  ShowLoding(true);
  ShowBody(false);
}
AddInput();
let body = document.querySelector(".body");
let loding = document.querySelector(".loding");
function ShowLoding(current) {
  current ? loding.classList.add("hidden") : loding.classList.remove("hidden");
}
function ShowBody(current) {
  current ? body.classList.add("hidden") : body.classList.remove("hidden");
}
///
let fragment = document.createDocumentFragment();
for (let i = 0; i < 30; i++) {
  let div = document.createElement("div");
  div.className = " h-3 bg-zinc-100";
  div.setAttribute("style", "width:5px");
  fragment.append(div);
}
document.querySelector(".bb").append(fragment);
///Create Div Majmoh
let local = JSON.parse(localStorage.getItem("mahsol"));
import {Total, DivMajmoe} from "./export.js";
Total(local);
DivMajmoe(local);

let DivNotPardakht = document.querySelector(".DivNotPardakht");
let spanNotPardakht = document.querySelector(".spanNotPardakht");
document.querySelector(".Pardakht").onclick = () => {
  let AboutPersentInput = document.querySelectorAll(".AboutPersent");
  let sum = 0;
  let num = 0;
  AboutPersentInput.forEach((input) => {
    input.value ? sum++ : num++;
  });
  if (sum === 10) {
    AboutPersentInput[7].value.length < 10
      ? ShowNotPardakht("کد پستی درست وارد کنید")
      : AboutPersentInput[8].value.length < 11
      ? ShowNotPardakht("شماره موبایل را کامل وارد کنید")
      : (location.href = "../html/parDakht.html") + AboutPersentInput.forEach((input) => (input.value = "")) + document.querySelector(".aa").value == "";
  } else {
    ShowNotPardakht("لطفا تمام فیلد هارا پر کنید");
  }
};
function ShowNotPardakht(str) {
  DivNotPardakht.classList.remove("hidden");
  spanNotPardakht.innerHTML = str;
}
