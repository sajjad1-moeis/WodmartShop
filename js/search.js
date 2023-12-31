let $ = document;
import {AddToBasket, SetLocal, CreateMahsol, RemoveItem, FilterPrice} from "./Hedear-Site.js";
import {FilterColor, ShowNot, HideNot, TedadBasket, TaiinBasket, Price, filterValueInput} from "./export.js";
FilterColor();
let g = Price();
document.querySelector(".s").insertAdjacentHTML("afterbegin", Price());
filterValueInput();
let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
let filter = await mahsol.filter((item) => {
  return item.title.includes(SearchLocation);
});

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
    filter1 == "" ? ShowNot() : HideNot();
    CreateMahsol(sortArr(filter1), document.querySelector(".SearchUser"));
    AddToBasket(mahsol, arrUserMahsol);
    TedadBasket(arrUserMahsol);
    TaiinBasket(arrUserMahsol);
  }
});

//// Set Time top Malsol

let time = new Date().toLocaleString("fa-IR");
console.log(time);
document.querySelector(".timeNow").innerHTML = ` تاریخ : ${time.split(",")[0]} `;

///Add Product Basket
let arrUserMahsol = [];
let local = JSON.parse(localStorage.getItem("mahsol"));
arrUserMahsol = local;

SetLocal(arrUserMahsol);
$.querySelectorAll(".resultSerch").forEach((span) => (span.innerHTML = ` نتیجه جستجو : ${SearchLocation}`));

async function FilterColorMahsol(Color) {
  let filterMahsol = await mahsol.filter((item) => item.label.includes(`${Color}`));
  return filterMahsol;
}
function sortArr(arr) {
  return arr.sort((a, b) => a.price - b.price);
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
    CreateMahsol(sortArr(Array), document.querySelector(".SearchUser"));
    AddToBasket(mahsol, arrUserMahsol);
    TedadBasket(arrUserMahsol);
    TaiinBasket(arrUserMahsol);
  }
};
AddToBasket(mahsol, arrUserMahsol);

RemoveItem(arrUserMahsol, `.`);
TaiinBasket(arrUserMahsol);

FilterPrice(filter, arrUserMahsol, document.querySelector(".SearchUser"));
let o = mahsol.filter((item) => item.price > 50000 && item.price < 1000000);
console.log(o);
