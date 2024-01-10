import {Header, IconHeader, HideBasketMainClick} from "./Hedear-Site.js";
import {body} from "./Hedear-Site.js";
import {FoterSite} from "./foter-Site.js";
import {Footer, FooterLast} from "../components/Foter/foter.js";
customElements.define("img-foter", FooterLast);
customElements.define("free-footer", Footer);
import {ShoeMenuMobile, SearchProduct, CreateMahsolBasket, ShowDivKhabarName, ShowBasket, listNextSearch, AbutMe, RemoveItem, notSuccess, SabtNahaii} from "./Hedear-Site.js";
let cokieSubmit = document.cookie;
import {ResultPrice, TaiinBasket, TedadBasket, TedadLove} from "./export.js";
if (cokieSubmit) {
  body("حساب کاربری من", "./html/userPage.html", ".");
  FoterSite(".", "./html/userPage.html");
} else {
  body("ورود / ثبت نام", "./html/vrood.html", ".");
  FoterSite(".", "./html/vrood.html");
}
Header(".");
IconHeader(".");
ShowDivKhabarName();
SearchProduct("../html/SearchMahsol.html?id=");
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
SabtNahaii(".");
HideBasketMainClick();
