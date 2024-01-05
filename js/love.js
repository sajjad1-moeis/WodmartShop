let $ = document;
import { CreateMahsol, findMahsolLove, CreateMahsolBasket, RemoveItem, HoverBottom, divVizhehAndPercon } from "./Hedear-Site.js";
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
    }
    if (e.target.parentElement.className.includes("love")) {
      let find = LocalStorageItem.findIndex((item) => item.id === Number(div.dataset.id));
      LocalStorageItem.splice(find, 1);
      localStorage.setItem("love", JSON.stringify(LocalStorageItem));
      CreateMahsol(LocalStorageItem, document.querySelector(".loveeee"));
      location.reload();
      LoveTedad();
    }
  });
});
TedadLove();
RemoveItem(arrUserLove, ".");

///Time

let time = new Date().toLocaleString("fa-IR");
document.querySelector(".time").innerHTML = time.split(",")[0];

///
function LoveTedad() {
  LocalStorageItem.length > 0
    ? document.querySelector(".tedadLove").classList.add("hidden") + document.querySelector(".loveeee").classList.remove("hidden")
    : document.querySelector(".tedadLove").classList.remove("hidden") + document.querySelector(".loveeee").classList.add("hidden");
}
LoveTedad();
