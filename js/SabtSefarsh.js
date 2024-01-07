async function AddInput() {
  let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
  let arr = await api.json();
  arr.slice(12).forEach((item) => {
    document.querySelector(".TakmilInput").insertAdjacentHTML(
      "beforeend",
      `<div class="my-4">
           <p class="my-2">${item.diration} <span class="text-danger">${item.more}</span></p>
           <input type="text" class="rounded-full w-full form-control p-3 px-5" placeholder="${item.count}" />
         </div>`
    );
  });
  document.querySelector(".loding").classList.add("hidden");
  document.querySelector(".body").classList.remove("hidden");
}
AddInput();

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

function filterValueInput() {
  document.querySelectorAll(".input").forEach((input) => {
    input.oninput = () => {
      let inputText = input.value;

      // حذف هر فاصله یا کاراکتر غیر عددی از متن
      let numericText = inputText.replace(/\D/g, "");
      // جدا کردن متن به دسته‌های سه رقمی
      let separatedText = numericText.replace(/\B(?=(\d{1})+(?!\d))/g, "-");
      input.value = separatedText;
    };
  });
}
filterValueInput();
