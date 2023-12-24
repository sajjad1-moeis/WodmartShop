let $ = document;
let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
import { CreateMahsol, AddToBasket, RemoveItem } from "./Hedear-Site.js";
import { FilterPrice } from "../components/Proudct/product.js";
customElements.define("divfilter-price", FilterPrice);
console.log(SearchLocation);
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
let filter = await mahsol.filter((item) => {
  return item.label[3].includes(SearchLocation.trim());
});
document.querySelector(".loding").classList.add("hidden");
document.querySelector(".body").classList.remove("hidden");
let arrUserMahsol = [];
let local = JSON.parse(localStorage.getItem("mahsol"));
arrUserMahsol = local;
CreateMahsol(filter, document.querySelector(".SearchUser"));
mahsol.forEach((element) => {
  console.log(element.label[3].includes("پوشاک"));
});
let ColorFilter = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
let jsonColor = await ColorFilter.json();
function ShowNot() {
  $.querySelector(".notSearch").classList.remove("hidden");
}
function HideNot() {
  $.querySelector(".notSearch").classList.add("hidden");
}
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
    if (Array == "") {
      console.log(Array);
      ShowNot();
    } else {
      HideNot();
      AddToBasket(mahsol, arrUserMahsol);
    }
    CreateMahsol(Array, document.querySelector(".SearchUser"));
  }
};
AddToBasket(mahsol, arrUserMahsol);
RemoveItem(arrUserMahsol, `.`);
