let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="../tailwind/tailwind.css" />
<link rel="stylesheet" href="../components/Proudct/product.css" />
<div class="border-2 bg-white border-zinc-200 p-3 pb-10">
<div class="h-max mt-1">
<div class="w-full bg-zinc-200 p-3">فیلتر بر اساس قیمت</div>
</div>
<div class="px-2 my-3">
<input type="range" class="w-full FilterPrice" value="0" />
</div>
<div class="text-center">
<p class="text-right">قیمت :</p>
<span class="PriceSpan my-2"> 0 هزار تومان --- 20,400,000</span>
</div>
</div>

`;
let locationSite = location.search;
let IdLocation = new URLSearchParams(locationSite);
let SearchLocation = IdLocation.get("id");
let arrUserMahsol = [];
import { CreateMahsol, AddToBasket } from "../../js/Hedear-Site.js";
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
let filter1 = await mahsol.filter((item) => {
  return item.label[3].includes(SearchLocation.trim());
});
let filter2 = await mahsol.filter((item) => {
  return item.title.includes(SearchLocation);
});
console.log(filter2);
console.log(filter1);
let search;
if (filter2 == "") {
  search = filter1;
} else {
  search = filter2;
}
if (filter2 == "") {
  search = mahsol;
}
class FilterPrice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  connectedCallback() {
    let FliterSorted = search.sort((a, b) => b.price - a.price);
    this.shadowRoot.querySelector("span").innerHTML = `0 هزار تومان --- ${FliterSorted[0].price.toLocaleString()}`;
    console.log(FliterSorted);
    this.shadowRoot.querySelector("input").oninput = () => {
      let valueInput = this.shadowRoot.querySelector("input").value;
      let value = valueInput * (FliterSorted[0].price / 100);
      this.shadowRoot.querySelector(
        ".PriceSpan"
      ).innerHTML = `${value.toLocaleString()} هزار تومان --- ${FliterSorted[0].price.toLocaleString()} `;

      let FilterPrice = search.filter((item) => item.price >= value).sort((a, b) => a.price - b.price);
      CreateMahsol(FilterPrice, document.querySelector(".SearchUser"));
      console.log(FilterPrice);
      AddToBasket(mahsol, arrUserMahsol);
    };
  }
}

export { FilterPrice };
