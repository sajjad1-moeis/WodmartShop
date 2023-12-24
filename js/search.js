let $ = document;
import { AddToBasket, SetLocal, CreateMahsol, RemoveItem } from "./Hedear-Site.js";
import { FilterPrice } from "../components/Proudct/product.js";
customElements.define("divfilter-price", FilterPrice);

let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
let filter = await mahsol.filter((item) => {
  return item.title.includes(SearchLocation);
});

function ShowNot() {
  $.querySelector(".notSearch").classList.remove("hidden");
}
function HideNot() {
  $.querySelector(".notSearch").classList.add("hidden");
}
if (filter == "") {
  ShowNot();
} else {
  CreateMahsol(filter, document.querySelector(".SearchUser"));

  HideNot();
}

document.querySelector(".loding").classList.add("hidden");
document.querySelector(".body").classList.remove("hidden");
let inputSearchProduct = document.querySelector(".inputSearchProduct");
inputSearchProduct.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let filter1 = mahsol.filter((item) => {
      return item.title.includes(inputSearchProduct.value);
    });
    filter1 == ""
      ? ShowNot() + CreateMahsol(filter1, document.querySelector(".SearchUser"))
      : HideNot() + CreateMahsol(filter1, document.querySelector(".SearchUser"));
    AddToBasket(mahsol, arrUserMahsol);
  }
});

//// Set Time top Malsol

let time = new Date();
document.querySelector(".timeNow").innerHTML = ` تاریخ : ${time.getFullYear()} ,${time.getMonth()} ,${time.getDate()} `;

///Add Product Basket
let arrUserMahsol = [];
let local = JSON.parse(localStorage.getItem("mahsol"));
arrUserMahsol = local;

SetLocal(arrUserMahsol);
$.querySelectorAll(".resultSerch").forEach((span) => (span.innerHTML = ` نتیجه جستجو : ${SearchLocation}`));

let ColorFilter = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
let jsonColor = await ColorFilter.json();
console.log(jsonColor);
let Color = [];
jsonColor.slice(4).forEach((item) => {
  document.querySelector(".filterColorProduct").innerHTML += `
  <div class="flex justify-between px-2 my-3 DivColor -${item.more}">
  <div class="flex -${item.more}">
  <div class="w-7 h-7  rounded-full me-2  ${item.more}"></div>
  <div class="mt-1 -${item.more}">${item.diration}</div>
  </div>
  <div class="border-[1px] border-zinc-300 px-3 md:text-xs py-0.5 rounded-full  my-auto -${item.more}">${item.count}</div>
  </div>`;
});

async function FilterColorMahsol(Color) {
  let filterMahsol = await mahsol.filter((item) => item.label.includes(`${Color}`));
  return filterMahsol;
}

document.querySelector(".filterColorProduct").onclick = async (e) => {
  if (e.target.className.includes("-bg") || e.target.className.includes("bg")) {
    let sliceIndex = e.target.className.indexOf("bg");
    let result = await e.target.className.substring(sliceIndex + 3);
    let Array = await FilterColorMahsol(result);
    console.log(Array);
    if (Array == "") {
      ShowNot();
    } else {
      HideNot();
    }
    CreateMahsol(Array, document.querySelector(".SearchUser"));
    AddToBasket(mahsol, arrUserMahsol);
  }
};

("bg-purple bg-orange-500 bg-pink-500");
RemoveItem(arrUserMahsol, `.`);
