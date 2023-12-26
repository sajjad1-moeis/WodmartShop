let $ = document;
import { CreateMahsol, findMahsolLove, CreateMahsolBasket, RemoveItem } from "./Hedear-Site.js";
import { TedadLove, TaiinBasket, ResultPrice, TedadBasket } from "./export.js";
let LocalStorageItem = JSON.parse(localStorage.getItem("love"));
let LocalStorageItemMahsol = JSON.parse(localStorage.getItem("mahsol"));
let arrUserLove = [];
arrUserLove = LocalStorageItemMahsol;
console.log(LocalStorageItem);
CreateMahsol(LocalStorageItem, document.querySelector(".love"));
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
    }
  });
});
TedadLove();
RemoveItem(arrUserLove, ".");
