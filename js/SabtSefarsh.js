import {ShopItem} from "../components/shop/shop.js";
customElements.define("shop-item", ShopItem);

///Random COde Amniat
let Random = 0;
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

function filterValueInput() {
  document.querySelector("input").oninput = () => {
    let inputText = input.value;

    // حذف هر فاصله یا کاراکتر غیر عددی از متن
    let numericText = inputText.replace(/\D/g, "");
    // جدا کردن متن به دسته‌های سه رقمی
    let separatedText = numericText.replace(/\B(?=(\d{4})+(?!\d))/g, "-");
    input.value = separatedText;
  };
}
// filterValueInput();

document.querySelector(".Pardakht").onclick = async () => {
  await setTimeout(() => {
    ShowBody(true);
    ShowLoding(false);
  }, 200);
  setTimeout(() => {
    l();
    ShowLoding(true);
  }, 1500);
};

function l() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="nhhh">
    <div class="h-16 w-full bg-blueText nhhh"></div>
  <div class="max-w-[1016px] fixed top-5 container rounded-lg shadow-md w-full mx-auto bg-white z-50 left-1/2 translate-x-[-50%]">
    <div class="flex justify-between p-3 rounded-2xl">
      <div><img src="../img/l8xq_h29 (1).png" class="w-[88px]" alt="" /></div>
      <div class="m-auto"><span>درگاه پرداخت اینترنتی سِپ</span></div>
      <div><img src="../img/SEP-NEW-LOGO-104x65.png" class="w-[88px]" alt="" /></div>
    </div>
  </div>
  <div class="max-w-[1056px] w-full container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 p-5">
    <div class="md:col-span-2 p-5 bg-white rounded-lg border-[1px] border-zinc-200 text-right">
        <div class="p-3 bg-[#eef4fd] w-full rounded-lg">
          <span class="text-blueText text-sm">اطلاعات کارت خود را وارد کنید</span>
        </div>
        <div class="my-3 max-w-[450px] mx-auto">
          <shop-item text="شماره کارت" img="../img/cards-svgrepo-com (1).png" length="19"></shop-item>
          <shop-item text="(cvv2) شماره شناسایی دوم" img="../img/cvv2.png" length="3"></shop-item>
  
          <div class="my-4">
            <p class="text-sm text-zinc-600">تاریخ انقضا</p>
            <div class="flex p-1.5 overflow-hidden gap-5 justify-between mx-auto">
            <input maxlength="2" type="text" class="mx-auto outline-none w-full text-center p-2 rounded-2xl focus:border-blueText border-2 border-zinc-100" placeholder="ماه" />
              <input maxlength="2" type="text" class="mx-auto outline-none w-full text-center p-2 rounded-2xl focus:border-blueText border-2 border-zinc-100" placeholder="سال" />
            </div>
          </div>
          <div class="my-4">
            <p class="text-sm text-zinc-600">کد امنیتی</p>
            <div class="flex p-1.5 overflow-hidden gap-5 justify-between mx-auto">
            <div class="p-1 ps-2 border-2 border-zinc-100 rounded-2xl w-full flex overflow-hidden">
            <input type="text" class="mx-auto outline-none w-full text-center amniat" maxlength="5" placeholder="کد امنیتی" />
            <div class="h-max m-auto cursor-pointer btnChangeCode">
            <img src="../img/reload-svgrepo-com (1).png" class="w-8" alt="" />
            </div>
            </div>
            <img src="../img/download (3).jpg" class="w-40 rounded-2xl ImgRandom" alt="" />
            </div>
          </div>
          <div class="my-4">
            <p class="text-sm text-zinc-600">رمز دوم</p>
            <div class="flex p-1.5 overflow-hidden gap-5 justify-between mx-auto">
            <div class="p-2 ps-2 border-2 border-zinc-100 rounded-2xl w-full flex">
            <input type="text" class="mx-auto outline-none w-full text-center amniat px-2" placeholder="رمز دوم" />
            <div class="h-max m-auto cursor-pointer btnChangeCode">
            <img src="../img/cards-svgrepo-com (1).png" class="w-8" alt="" />
            </div>
            </div>
            <div class="w-40 p-2 bg-blueText rounded-lg flex-none cursor-pointer text-center text-white relative">
              <span class="absolute w-full left-0 mt-1">درخاست رمز پویا</span>
            </div>

            </div>
          </div>
          <div class="t2 my-4 cursor-pointer text-lg bg-[#00c291] p-3 text-white rounded-lg text-center">پرداخت </div>
          <div class="my-4 cursor-pointer p-3 text-red-500 rounded-lg text-center border-[1px] border-red-100 cancelPardakht">انصراف</div>
        </div>
      </div>
      <div class="md:col-span-1 p-5 bg-white rounded-lg border-[1px] border-zinc-200 text-right">
        <div class="p-3 bg-[#eef4fd] w-full rounded-lg flex justify-between text-sm">
          <div class="time text-blueText">10:00</div>
          <span class="text-blueText"> : زمان باقی مانده</span>
        </div>
        <div class="p-1 my-5">
          <div class="border-b-2 border-zinc-200">
          <div class="flex gap-3 my-2">
          <div class="h-max m-auto">
          <img src="../img/shop-svgrepo-com.png" class="w-8 h-6" alt="" />
               </div>
               <div class="w-full">
                 <p class="text-sm text-zinc-400 ">پذیرنده</p>
                 <p class="my-1 text-2xl ">زرین اکسپرس</p>
                 </div>
                 </div>
                 <div class="flex gap-3 my-2">
             <div class="h-max m-auto">
             <img src="../img/shop-svgrepo-com.png" class="w-8 h-6" alt="" />
             </div>
             <div class="w-full">
               <p class="text-sm text-zinc-400 t1">مبلغ</p>
               <p class="my-1 text-2xl t2"></p>
             </div>
             </div>
          </div>
          <div>
            <div class="flex gap-3 my-2">
            <div class="h-max m-auto">
              <img src="../img/shop-svgrepo-com.png" class="w-8 h-6" alt="" />
            </div>
              <div class="w-full">
                <p class="text-sm text-zinc-400">شماره پذیرنده / ترمینال</p>
                <p class="my-1 text-sm ">2525642 / 74588</p>
              </div>
            </div>
            <div class="flex gap-3 my-2">
            <div class="h-max m-auto">
              <img src="../img/shop-svgrepo-com.png" class="w-8 h-6" alt="" />
            </div>
              <div class="w-full">
                <p class="text-sm text-zinc-400">سایت پذیرنده</p>
                <p class="my-1 text-sm ">Dirowit.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <div class="w-full bg-blueText p-10 mt-10">
    <div class="max-w-[450px] w-full text-center mx-auto text-white">
      <div class="w-max mx-auto"><img src="../img/SEP-NEW-LOGO-104x65.png" alt="" /></div>
      <p class="my-5">شرکت پرداختی بانک سامان (سهامی عام) <br />2008 - 2024</p>
      <p class="my-5">تمامی حقوق این صفحه مربوط به تیم دیروویت می باشد</p>
      <p>مرکز شبانه روزی ارتباط با مشتریان : 2155555</p>
    </div>
    </div>
    </div>`
  );
  const Focus = () => {
    let input = document.querySelector(".amniat");
    input.onfocus = () => {
      input.parentElement.classList.replace("border-zinc-100", "border-[#2b73e3]");
    };
    input.onblur = () => {
      input.parentElement.classList.replace("border-[#2b73e3]", "border-zinc-100");
    };
  };
  Focus();
  function RandomImgAmniat() {
    let arr = ["", "33523", "44486", "85176", "08320", "63738"];
    Random < 5 ? Random++ : (Random = 1);
    document.querySelector(".amniat").id = arr[Random + 1];
    document.querySelector(".ImgRandom").src = `../img/download (${Random}).jpg`;
  }
  document.querySelector(".btnChangeCode").onclick = RandomImgAmniat;
  document.querySelector(".cancelPardakht").onclick = () => {
    location.href = "../index.html";
  };
  let pric = JSON.parse(localStorage.getItem("mahsol")).reduce((prev, next) => {
    return (prev += next.count * next.price);
  }, 0);
  let t2span = document.querySelectorAll(".t2");
  t2span[0].innerHTML = `${pric.toLocaleString()} تومان `;
  t2span[0].innerHTML = `پرداخت:   ${pric.toLocaleString()}   تومان  `;
  RandomImgAmniat();
}
