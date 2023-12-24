let $ = document;
let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
import { CreateMahsol, AddToBasket, RemoveItem } from "./Hedear-Site.js";
console.log(SearchLocation);
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
let filter = await mahsol.filter((item) => {
  return item.label[3].includes(SearchLocation);
});
let arrUserMahsol = [];
let local = JSON.parse(localStorage.getItem("mahsol"));
arrUserMahsol = local;
CreateMahsol(filter, document.querySelector(".filter"));
console.log(filter);
AddToBasket(mahsol, arrUserMahsol);
RemoveItem(arrUserMahsol, `.`);
