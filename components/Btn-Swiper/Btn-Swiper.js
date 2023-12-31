let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./tailwind/tailwind.css" />

           <div class="flex">
                <div class="w-max border-b-2 border-b-warning py-2 flex">
                  <div class="text-2xl w-max">
                    <span class="title">محصولات جدید</span>
                  </div>
                </div>
                <div class="w-full border-b-2 border-b-zinc-200 flex">
                  <div class="gap-5 hidden mt-3 ms-4 lg:flex">
                    <span class="cursor-pointer text-warning">جدیدترین ها</span>
                    <span class="cursor-pointer"> محصولات ویژه</span>
                    <span class="cursor-pointer">پرفروش ترین ها</span>
                  </div>
                </div>
              </div>
`;

class AbutSwiper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".title").innerHTML = this.getAttribute("title");
  }
}

let template2 = document.createElement("template");
template2.innerHTML = `
<link rel="stylesheet" href="./tailwind/tailwind.css" />

<div class="gap-5 lg:hidden w-max mt-3 ms-4 flex" style="margin: 20px auto">
<span class="text-warning">ویژه </span>
<span> جدیدترین</span>
<span>محصولات حرفه ایی</span>
</div>
`;

class HideMdAbut extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template2.content.cloneNode(true));
  }
}

export { AbutSwiper, HideMdAbut };
