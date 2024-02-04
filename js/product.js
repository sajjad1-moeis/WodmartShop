let $ = document;
let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
import {CreateMahsol, AddToBasket, RemoveItem, FilterPrice} from "./Hedear-Site.js";
import {FilterColor, ShowNot, HideNot, TaiinBasket, TedadBasket, Price, sortProduct, filterValueInput, SitePage} from "./export.js";
///Id Is Location
FilterColor();
document.querySelector(".s").insertAdjacentHTML("afterbegin", Price());
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
let filter = await mahsol.filter((item) => {
  return item.label[3].includes(SearchLocation.trim());
});
document.querySelector(".loding").classList.add("hidden");
document.querySelector(".body").classList.remove("hidden");

///Color Filter
let arrUserMahsol = [];
arrUserMahsol = JSON.parse(localStorage.getItem("mahsol"));
///////////////////////////////////

async function FilterColorMahsol(Color) {
  let filterMahsol = await filter.filter((item) => item.label.includes(`${Color}`));
  return filterMahsol;
}
document.querySelector(".filterColorProduct").onclick = async (e) => {
  if (e.target.className.includes("-bg") || e.target.className.includes("bg")) {
    let sliceIndex = e.target.className.indexOf("bg");
    let result = await e.target.className.substring(sliceIndex + 3);
    let Array = await FilterColorMahsol(result);
    if (Array == "") {
      ShowNot();
    } else {
      HideNot();
    }
    CreateMahsol(Array, document.querySelector(".SearchUser"));
    AddToBasket(mahsol, arrUserMahsol);
    TedadBasket(arrUserMahsol);
    TaiinBasket(arrUserMahsol);
    SitePage(Array, mahsol, arrUserMahsol);
  }
};

document.querySelector(".moratabSazi").onclick = () => {
  document.querySelector(".arrowMoratab").classList.toggle("showList");
  document.querySelector(".Divlist").classList.toggle("hidden");
};

sortProduct(filter, mahsol, arrUserMahsol);

FilterPrice(filter, arrUserMahsol, document.querySelector(".SearchUser"), mahsol);
SitePage(filter, mahsol, arrUserMahsol);
RemoveItem(arrUserMahsol, `.`);

document.querySelector(".Mahsol").innerHTML = `محصول : ${SearchLocation}`;
$.querySelectorAll(".resultSerch").forEach((span) => (span.innerHTML = ` محصول : ${SearchLocation}`));

let time = new Date().toLocaleString("fa-IR");
document.querySelector(".timeNow").innerHTML = ` تاریخ : ${time.split(",")[0]} `;
filterValueInput();
