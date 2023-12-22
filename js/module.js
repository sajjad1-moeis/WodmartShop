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
} from "./Hedear-Site.js";
let cokieSubmit = document.cookie;

if (cokieSubmit) {
  body("وبلاگ", "#", ".");
} else {
  body("ورود / ثبت نام", "../html/vrood.html", ".");
}
Header(".");
IconHeader();
ShowDivKhabarName();
SearchProduct("./SearchMahsol.html?id=");
ShowBasket();
listNextSearch();
AbutMe(".");
ShoeMenuMobile();
CreateMahsolBasket(JSON.parse(localStorage.getItem("mahsol")), ".");
RemoveItem(JSON.parse(localStorage.getItem("mahsol")));
