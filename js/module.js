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
  notSuccess,
} from "./Hedear-Site.js";
let cokieSubmit = document.cookie;
import { ResultPrice, TaiinBasket, TedadBasket, TedadLove } from "./export.js";
if (cokieSubmit) {
  body("حساب کاربری من", "#", ".");
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
notSuccess();
RemoveItem(local, `.`);
TaiinBasket(local);
ResultPrice(local);
TedadBasket(local);
TedadLove();
