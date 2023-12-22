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
  <div class="w-full bg-white absolute h-max bottom-1.5 md:bottom-[-45px] p-2 shadow list-menu2  gap-y-5" data-id=${id}>
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
      <div class="relative rounded bg-secondary pt-5 pb-12 h-max overflow-hidden imgHover">
      ${divVizhehAndPercon(element.label[0], element.label[1], "bg-warning")}
      ${HoverBottom(element.id)}
      <div class=" ">
      <img src=".${element.img}" alt="" class="mx-auto w-full" />
      </div>
      <div class="text-center mt-3">
      <p>${element.title}</p>
      <p class="my-2 text-warning">${element.price}</p>
      </div>
      </div>`;
    } else {
      document.querySelector(".SearchUser").innerHTML += `
      <div class="relative rounded bg-secondary pt-5 pb-12 h-max opacity-50 overflow-hidden imgHover">
      ${divVizhehAndPercon(element.label[0], element.label[1], "bg-primary")}
      <div class=" ">
      <img src=".${element.img}" alt="" class="mx-auto w-full" />
      </div>
      <div class="text-center mt-3">
      <p>${element.title}</p>
      <p class="my-2 text-warning">${element.price}</p>
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

let local = JSON.parse(localStorage.getItem("mahsol"));
arrUserMahsol = local;
CreateMahsolBasket(local, ".");
RemoveItem(arrUserMahsol, ".");
SetLocal(arrUserMahsol);
$.querySelector(".resultSerch").innerHTML = ` نتیجه جستجو : ${SearchLocation}`;
success();
notSuccess();
