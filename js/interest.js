import { CreateMahsol } from "./Hedear-Site.js";
import { TedadLove } from "./export.js";
let LocalStorageItem = JSON.parse(localStorage.getItem("love"));
let LocalStorageItemMahsol = JSON.parse(localStorage.getItem("mahsol"));
let arrUserLove = [];
arrUserLove = LocalStorageItemMahsol;
console.log(LocalStorageItem);
CreateMahsol(LocalStorageItem, document.querySelector(".love"));
document.querySelectorAll(".list-menu2").forEach((div) => {
  div.addEventListener("click", (e) => {
    if (e.target.parentElement.className.includes("kharid")) {
      let id = div.dataset.id;
      let find = LocalStorageItem.find((item) => item.id === id);
      let some = arrUserLove.some((item) => item.id === id);
      let index = arrUserLove.findIndex((item) => item.id === id);
      console.log(find);
      if (some) {
        arrUserLove[index].count++;
      } else {
        arrUserLove.push(find);
      }
      localStorage.setItem("mahsol", JSON.stringify(arrUserLove));
    }
  });
});
TedadLove();
