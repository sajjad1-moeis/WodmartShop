let $ = document;
let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
import { CreateMahsol, AddToBasket, RemoveItem, FilterPrice } from "./Hedear-Site.js";
import { FilterColor, ShowNot, HideNot, TaiinBasket, TedadBasket, Price, ResultPrice } from "./export.js";
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
(() => {
  let local = JSON.parse(localStorage.getItem("mahsol"));
  arrUserMahsol = local;
  CreateMahsol(filter, document.querySelector(".SearchUser"));
  AddToBasket(mahsol, arrUserMahsol);
  RemoveItem(arrUserMahsol, `.`);
  TaiinBasket(arrUserMahsol);
  TedadBasket(arrUserMahsol);
  ResultPrice(arrUserMahsol);
})();

//Create Div Filter Color

async function FilterColorMahsol(Color) {
  let filterMahsol = await mahsol.filter((item) => item.label.includes(`${Color}`));
  return filterMahsol;
}
document.querySelector(".filterColorProduct").onclick = async (e) => {
  if (e.target.className.includes("-bg") || e.target.className.includes("bg")) {
    let sliceIndex = e.target.className.indexOf("bg");
    let result = await e.target.className.substring(sliceIndex + 3);
    let Array = await FilterColorMahsol(result);
    if (Array == "") {
      console.log(Array);
      ShowNot();
    } else {
      HideNot();
    }
    CreateMahsol(Array, document.querySelector(".SearchUser"));
    AddToBasket(mahsol, arrUserMahsol);
    TedadBasket(arrUserMahsol);
    TaiinBasket(arrUserMahsol);
  }
};

FilterPrice(filter, arrUserMahsol, document.querySelector(".SearchUser"));
document.querySelector(".Mahsol").innerHTML = `محصول : ${SearchLocation}`;
