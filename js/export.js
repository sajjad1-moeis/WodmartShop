let $ = document;
import {CreateMahsol, AddToBasket, RemoveItem} from "./Hedear-Site.js";

async function FilterColor() {
  let ColorFilter = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
  let jsonColor = await ColorFilter.json();
  jsonColor.slice(4, 12).forEach((item) => {
    document.querySelector(".filterColorProduct").innerHTML += `
        <div class="flex justify-between px-2 my-3 DivColor text-lg -${item.more}">
        <div class="flex -${item.more}">
        <div class="w-7 h-7  rounded-full me-2  ${item.more}"></div>
        <div class="mt-1 -${item.more}">${item.diration}</div>
        </div>
        <div class="border-[1px] border-zinc-300 px-3 md:text-xs py-0.5 rounded-full  my-auto -${item.more}">${item.count}</div>
        </div>`;
  });
}

function ShowNot() {
  $.querySelector(".notSearch").classList.remove("hidden");
}
function HideNot() {
  $.querySelector(".notSearch").classList.add("hidden");
}

///Nubmer Basket
function TedadBasket(arr) {
  document.querySelectorAll(".basket").forEach((span) => (span.innerHTML = arr.length));
}
function TedadLove() {
  let local = JSON.parse(localStorage.getItem("love"));
  if (local) {
    document.querySelectorAll(".interest").forEach((span) => (span.innerHTML = JSON.parse(localStorage.getItem("love")).length));
  } else {
    localStorage.setItem("love", JSON.stringify([]));
  }
}
function ResultPrice(arr) {
  let result = arr.reduce((prev, next) => {
    return prev + next.count * next.price;
  }, 0);
  document.querySelector(".TotalPrice").innerHTML = `مجموع سبد خرید شما : ${result.toLocaleString()} تومان`;
}
function TaiinBasket(arr) {
  if (arr) {
    arr.length > 0 ? document.querySelector(".DivBasketKhali").classList.add("hidden") : document.querySelector(".DivBasketKhali").classList.remove("hidden");
  }
}
function Price() {
  return `<div class="border-2 bg-white border-zinc-200 p-3 py-5 text-xl">
  <div class="h-max mt-1">
  <div class="w-full bg-zinc-200 p-3">فیلتر بر اساس قیمت</div>
  </div>
  <div class="px-2 my-3">
  <div class="flex text-sm text-zinc-400">
  <div class="w-1/2">از :</div>
  <div class="w-1/2">تا :</div>
</div>
<div class="flex gap-3">
  <input type="text" class="form-control filterInput w-1/2 text-sm placeholder:text-sm" placeholder="0 تومان" />
  <input type="text" class="form-control w-1/2 text-sm placeholder:text-sm filterInput" placeholder="0 تومان"/>
</div>
<div class="mt-4">
<span class="notFilter  text-danger text-sm"></span>
</div>
  </div>
  <div class="my-5 px-2">
  <span class="PriceSpan my-2"> 0 هزار تومان --- 0 هزار تومان</span>
  </div>
  <div class="w-full p-2 cursor-pointer text-center mt-4 btnFilter rounded-lg bg-warning text-white text-lg">فیلتر کردن</div>

  </div>`;
}

function filterValueInput() {
  document.querySelectorAll(".filterInput").forEach((input) => {
    input.oninput = () => {
      let inputText = input.value;

      // حذف هر فاصله یا کاراکتر غیر عددی از متن
      let numericText = inputText.replace(/\D/g, "");
      // جدا کردن متن به دسته‌های سه رقمی
      let separatedText = numericText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      input.value = separatedText;
    };
  });
}
function AddLove(arrMahsol, arrUserLove, id) {
  let find = arrMahsol.find((item) => item.id == id);
  let some = arrUserLove.some((item) => item.id == id);
  if (!some) {
    arrUserLove.push(find);
    alert("محصول به علاقه مندی اضافه شد");
  } else {
    alert("محصول در علاقه مندی وجود دارد");
  }

  localStorage.setItem("love", JSON.stringify(arrUserLove));
}
async function Total(arr) {
  if (arr) {
    if (document.querySelector(".total")) {
      let sum = await arr.reduce((prev, next) => {
        return (prev += next.count * next.price);
      }, 0);
      let res = 0;
      let interval = setInterval(() => {
        res += sum / 100;
        if (res === sum) {
          clearInterval(interval);
        }
        document.querySelector(".total").innerHTML = `${res.toLocaleString()}  تومان`;
      }, 15);
      if (sum === 0) {
        setTimeout(() => {
          location.href = "../index.html";
        }, 200);
      }
    }
  }
}
function DivMajmoe(local) {
  if (local) {
    if (document.querySelector(".mahsolNahaii")) {
      document.querySelector(".mahsolNahaii").innerHTML = "";
      local.forEach((item) => {
        document.querySelector(".mahsolNahaii").innerHTML += `
        <div class="flex justify-between border-b-[1px] border-zinc-200 p-5">
        <div>${item.title} <span class="text-warning">*</span> ${item.count}</div>
        <div >${item.price.toLocaleString()} تومان</div>
        </div>
        `;
      });
    }
  }
}
//Pagination
async function SitePage(filter, mahsol, arrUserMahsol) {
  let TedadPage = Math.ceil(filter.length / 12);
  let num = 1;
  let CurrentPage = 6;
  document.querySelector(".pagination").innerHTML = "";
  for (let i = 1; i < TedadPage + 1; i++) {
    document.querySelector(".pagination").innerHTML += `
  <div class="Page-Item">${i}</div>
  `;
  }
  let DivPage = document.querySelectorAll(".Page-Item");
  if (!DivPage == []) {
    DivPage.forEach((div) => {
      DivPage[0].classList.add("active1");
      div.onclick = () => {
        num = +div.innerHTML;
        Pagination(filter.slice(num * CurrentPage - CurrentPage, num * CurrentPage));
        AddActivePageClass(num);
      };
    });
  } else {
    Pagination([]);
  }

  function Pagination(arr) {
    CreateMahsol(arr, document.querySelector(".SearchUser"));
    AddToBasket(mahsol, arrUserMahsol);
  }
  Pagination(filter.slice(0, CurrentPage));

  //Create Div Filter Color
  let prevBtnPagination = document.querySelector(".prev-page");
  let nextBtnPagination = document.querySelector(".next-page");
  prevBtnPagination.onclick = PrevPage;
  nextBtnPagination.onclick = NextPage;
  function PrevPage() {
    num < 2 ? (num = TedadPage) : num--;
    let end = num * CurrentPage;
    let start = end - CurrentPage;
    Pagination(filter.slice(start, end));
    AddActivePageClass(num);
  }
  function NextPage() {
    num > TedadPage - 1 ? (num = 1) : num++;
    let end = num * CurrentPage;
    let start = end - CurrentPage;
    Pagination(filter.slice(start, end));
    AddActivePageClass(num);
  }
  function AddActivePageClass(num) {
    DivPage.forEach((div) => {
      div.classList.remove("active1");
    });
    DivPage[num - 1].classList.add("active1");
  }
}
export {SitePage, FilterColor, ShowNot, HideNot, TedadBasket, ResultPrice, TaiinBasket, Price, TedadLove, AddLove, filterValueInput, DivMajmoe, Total};
