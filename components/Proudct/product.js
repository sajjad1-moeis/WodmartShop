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
let arrUserMahsol = [];
import { CreateMahsol, AddToBasket } from "../../js/Hedear-Site.js";
let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let mahsol = await api.json();
class FilterPrice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("input").oninput = () => {
      let valueInput = this.shadowRoot.querySelector("input").value;
      let FliterSorted = mahsol.sort((a, b) => b.price - a.price);
      let value = valueInput * (FliterSorted[0].price / 100);
      this.shadowRoot.querySelector(
        ".PriceSpan"
      ).innerHTML = `${value.toLocaleString()} هزار تومان --- ${FliterSorted[0].price.toLocaleString()} `;
      let FilterPrice = mahsol.filter((item) => item.price >= value).sort((a, b) => a.price - b.price);
      CreateMahsol(FilterPrice, document.querySelector(".SearchUser"));
      console.log(FilterPrice);
      AddToBasket(mahsol, arrUserMahsol);
    };
  }
}

export { FilterPrice };
