let $ = document;
import { CreateMahsol, AddToBasket } from "./Hedear-Site.js";
async function FilterColor() {
  let ColorFilter = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
  let jsonColor = await ColorFilter.json();
  jsonColor.slice(4).forEach((item) => {
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
  document.querySelectorAll(".interest").forEach((span) => (span.innerHTML = JSON.parse(localStorage.getItem("love")).length));
}
function ResultPrice(arr) {
  let result = arr.reduce((prev, next) => {
    return prev + next.count * next.price;
  }, 0);
  document.querySelector(".TotalPrice").innerHTML = `مجموع سبد خرید شما : ${result.toLocaleString()} تومان`;
}
function TaiinBasket(arr) {
  arr.length > 0
    ? document.querySelector(".DivBasketKhali").classList.add("hidden")
    : document.querySelector(".DivBasketKhali").classList.remove("hidden");
}
function Price() {
  return `<div class="border-2 bg-white border-zinc-200 p-3 pb-10 text-xl">
  <div class="h-max mt-1">
  <div class="w-full bg-zinc-200 p-3">فیلتر بر اساس قیمت</div>
  </div>
  <div class="px-2 my-3">
  <input type="range" class="w-full FilterPrice" value="0" />
  </div>
  <div class="text-center">
  <p class="text-right">قیمت :</p>
  <span class="PriceSpan my-2"> 0 هزار تومان --- 20,400,000</span>
  </div>
  </div>`;
}

export { FilterColor, ShowNot, HideNot, TedadBasket, ResultPrice, TaiinBasket, Price, TedadLove };
