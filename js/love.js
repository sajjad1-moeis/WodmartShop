let $ = document;
import { CreateMahsol, findMahsolLove, CreateMahsolBasket, RemoveItem, HoverBottom } from "./Hedear-Site.js";
import { TedadLove, TaiinBasket, ResultPrice, TedadBasket } from "./export.js";
let LocalStorageItem = JSON.parse(localStorage.getItem("love"));
let LocalStorageItemMahsol = JSON.parse(localStorage.getItem("mahsol"));
let arrUserLove = [];
arrUserLove = LocalStorageItemMahsol;
CreateMahsol(LocalStorageItem, document.querySelector(".loveeee"));
document.querySelectorAll(".list-menu2").forEach((div) => {
  div.addEventListener("click", (e) => {
    if (e.target.parentElement.className.includes("kharid")) {
      findMahsolLove(div.dataset.id, LocalStorageItem, arrUserLove, ".");
      $.querySelector(".DivBasket").classList.replace("left-[-350px]", "left-0");
      localStorage.setItem("mahsol", JSON.stringify(arrUserLove));
      CreateMahsolBasket(arrUserLove, ".");
      TaiinBasket(arrUserLove);
      ResultPrice(arrUserLove);
      TedadBasket(arrUserLove);
    } else if (e.target.parentElement.className.includes("love")) {
      let find = LocalStorageItem.findIndex((item) => item.id == div.dataset.id);
      LocalStorageItem.splice(find, 1);
      console.log(e.target.parentElement);
      localStorage.setItem("love", JSON.stringify(LocalStorageItem));
      CreateMahsol(JSON.parse(localStorage.getItem("love")), document.querySelector(".loveeee"));
    }
  });
});
TedadLove();
RemoveItem(arrUserLove, ".");