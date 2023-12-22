let $ = document;
import { findMahsol, ShowElan, success, notSuccess } from "./Hedear-Site.js";
let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
let filter = await mahsol.filter((item) => {
  return item.title.includes(SearchLocation);
});
import { CreateMahsolBasket, RemoveItem, SetLocal } from "./Hedear-Site.js";
function HoverBottom(id) {
  return `
  <div class="w-full bg-white absolute h-max bottom-0 lg:bottom-[-45px] p-2 shadow list-menu2  gap-y-5" data-id=${id}>
  <div style="z-index: 1000" class="flex mx-auto w-max">
  <div class="cursor-pointer w-[25px] love">
  <img src="../img/heart-svgrepo-com (7).svg" alt="" class="w-full m-auto" />
  </div>
  <div class="cursor-pointer w-[60px] mx-3 border-x-[1px] border-zinc-200 kharid" >
  <img src="../img/shopping-cart-svgrepo-com (1).svg" alt="" class="px-1 w-[35px] m-auto" />
  </div>
  <div class="cursor-pointer" >
  <img src="../img/search-svgrepo-com (2).svg" class="w-[25px] m-auto" alt="" />
  </div>
  </div>
  </div>`;
}

function divVizhehAndPercon(label0, label1, color) {
  return `<div class="absolute top-1 right-2 bg-danger  mx-auto text-xs px-3 w-max text-white"><span>${label0}</span></div>
  <div class="absolute top-[30px] right-2 ${color}  mx-auto text-xs px-1.5 w-[50px] text-white">
  <span> ${label1} </span>
  </div>`;
}

function CreateMahsol(arr, current) {
  document.querySelector(".SearchUser").innerHTML = "";
  arr.forEach((element) => {
    if (element.current) {
      document.querySelector(".SearchUser").innerHTML += `
      <div class="relative rounded bg-secondary md:pt-3   h-max overflow-hidden imgHover">
      ${divVizhehAndPercon(element.label[0], element.label[1], "bg-warning")}
      ${HoverBottom(element.id)}
      <div class=" h-[200px]">
      <img src=".${element.img}" alt="" class="mx-auto w-full h-full object-cover"   />
      </div>
      <div class="text-center mt-3">
      <p class="h-7 my-auto">${element.title}</p>
      <p class="my-2 text-warning">${element.price.toLocaleString()} هزار تومان</p>
      </div>
      </div>`;
    } else {
      document.querySelector(".SearchUser").innerHTML += `
      <div class="relative rounded bg-secondary pt-5  h-max opacity-50 overflow-hidden imgHover1">
      ${divVizhehAndPercon(element.label[0], element.label[1], "bg-primary")}
      <div class="h-[200px] md:h-max">
      <img src=".${element.img}" alt="" class="object-cover mx-auto w-full h-full" />
      </div>
      <div class="text-center mt-3">
      <p class="h-7">${element.title}</p>
      <p class="my-2 text-warning">${element.price.toLocaleString()} هزار تومان</p>
      </div>
      </div>`;
    }
  });
}

function ShowNot() {
  $.querySelector(".notSearch").classList.remove("hidden");
}
function HideNot() {
  $.querySelector(".notSearch").classList.add("hidden");
}
if (filter == "") {
  ShowNot();
} else {
  CreateMahsol(filter);

  HideNot();
}
function AddToBasket() {
  let DivKharid = $.querySelectorAll(".list-menu2");
  DivKharid.forEach((div) => {
    div.addEventListener("click", (e) => {
      console.log("object");
      console.log();
      let parent = e.target.parentElement;
      if (document.cookie.includes("name")) {
        if (parent.className.includes("kharid")) {
          findMahsol(div.dataset.id, mahsol, arrUserMahsol, ".");
          $.querySelector(".DivBasket").classList.replace("left-[-350px]", "left-0");
          let DivElanKharid = $.querySelector(".IsProduct");

          let width = 100;
          ShowElan(DivElanKharid, $.querySelector(".heightDivIsKhard"), width);
        }
      } else {
        let width = 100;

        let DivIsSubmit = document.querySelector(".IsSubmit");
        ShowElan(DivIsSubmit, $.querySelector(".heightDivIsSubmit"), width);
      }
    });
  });
}
AddToBasket();
document.querySelector(".loding").classList.add("hidden");
document.querySelector(".body").classList.remove("hidden");
let inputSearchProduct = document.querySelector(".inputSearchProduct");
inputSearchProduct.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let filter1 = mahsol.filter((item) => {
      return item.title.includes(inputSearchProduct.value);
    });
    filter1 == "" ? ShowNot() + CreateMahsol(filter1) : HideNot() + CreateMahsol(filter1);
    AddToBasket();
  }
});
/////DivSabadKharid
let DivBasket = document.querySelector(".ProductUser");

///Add Product Basket

let arrUserMahsol = [];

///Load Create Basket
let time = new Date();
console.log(time);
document.querySelector(".timeNow").innerHTML = ` تاریخ : ${time.getFullYear()} ,${time.getMonth()} ,${time.getDate()} `;
let local = JSON.parse(localStorage.getItem("mahsol"));
arrUserMahsol = local;
CreateMahsolBasket(local, ".");
RemoveItem(arrUserMahsol, ".");
SetLocal(arrUserMahsol);
$.querySelectorAll(".resultSerch").forEach((span) => (span.innerHTML = ` نتیجه جستجو : ${SearchLocation}`));
success();
notSuccess();
let ColorFilter = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
let jsonColor = await ColorFilter.json();
console.log(jsonColor);
let Color = [];
jsonColor.slice(4).forEach((item) => {
  document.querySelector(".filterColorProduct").innerHTML += `
  <div class="flex justify-between px-2 my-3">
  <div class="flex">
    <div class="w-7 h-7 ${item.more} rounded-full me-2"></div>
    <div class="mt-1">${item.diration}</div>
  </div>
  <div class="border-[1px] border-zinc-300 px-3 md:text-xs py-0.5 rounded-full  my-auto ">${item.count}</div>
</div>`;
});
