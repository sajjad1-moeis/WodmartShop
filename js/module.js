import { Header, IconHeader } from "./Hedear-Site.js";
import { body } from "./Hedear-Site.js";
import {
  ShoeMenuMobile,
  SearchProduct,
  CreateMahsolBasket,
  ShowDivKhabarName,
  ShowBasket,
  listNextSearch,
  AbutMe,
  RemoveItem,
  success,
  notSuccess,
} from "./Hedear-Site.js";
let cokieSubmit = document.cookie;

if (cokieSubmit) {
  body("وبلاگ", "#", ".");
} else {
  body("ورود / ثبت نام", "../html/vrood.html", ".");
}
Header(".");
IconHeader(".");
ShowDivKhabarName();
SearchProduct("./SearchMahsol.html?id=");
ShowBasket();
listNextSearch();
AbutMe(".");
ShoeMenuMobile();
let local = JSON.parse(localStorage.getItem("mahsol"));
let f = ".";
CreateMahsolBasket(local, `.`);
success();
notSuccess();
RemoveItem(local, `.`);
