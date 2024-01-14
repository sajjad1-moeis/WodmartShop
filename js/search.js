let $ = document;
import {AddToBasket, SetLocal, CreateMahsol, RemoveItem, FilterPrice} from "./Hedear-Site.js";
import {FilterColor, ShowNot, HideNot, TedadBasket, TaiinBasket, Price, filterValueInput, SitePage, sortProduct} from "./export.js";
FilterColor();
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
document.querySelector(".timeNow").innerHTML = ` تاریخ : ${time.split(",")[0]} `;

///Add Product Basket
let arrUserMahsol = [];
arrUserMahsol = JSON.parse(localStorage.getItem("mahsol"));

SetLocal(arrUserMahsol);
$.querySelectorAll(".resultSerch").forEach((span) => (span.innerHTML = ` نتیجه جستجو : ${SearchLocation}`));

async function FilterColorMahsol(Color) {
  let filterMahsol = await filter.filter((item) => item.label.includes(`${Color}`));
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
    SitePage(Array, mahsol, arrUserMahsol);
  }
};

//Pagination

document.querySelector(".moratabSazi").onclick = () => {
  document.querySelector(".arrowMoratab").classList.toggle("showList");
  document.querySelector(".Divlist").classList.toggle("hidden");
};

sortProduct(filter, mahsol, arrUserMahsol);
FilterPrice(filter, arrUserMahsol, document.querySelector(".SearchUser"), mahsol);
SitePage(filter, mahsol, arrUserMahsol);
RemoveItem(arrUserMahsol, `.`);
