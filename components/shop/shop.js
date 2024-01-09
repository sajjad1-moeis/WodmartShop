let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="../tailwind/tailwind.css" />

<div class="my-5">
              <p class="my-4 text text-sm text-zinc-600"></p>
              <div class="flex p-1.5 overflow-hidden gap-5 justify-between  rounded-2xl border-2 border-zinc-100 mx-auto">
              <input type="text" class="mx-auto outline-none w-full text-center   p-1" placeholder="کارت"/>
              <img src="" class="w-8" alt="" />
              </div>
            </div>
`;
class ShopItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".text").innerHTML = this.getAttribute("text");
    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector("input").maxLength = this.getAttribute("length");
    this.shadowRoot.querySelector("input").onfocus = () => {
      this.shadowRoot.querySelector("input").parentElement.classList.replace("border-zinc-100", "border-[#2b73e3]");
    };
    this.shadowRoot.querySelector("input").onblur = () => {
      this.shadowRoot.querySelector("input").parentElement.classList.replace("border-[#2b73e3]", "border-zinc-100");
    };
    this.shadowRoot.querySelector("input").oninput = () => {
      let inputText = this.shadowRoot.querySelector("input").value;

      // حذف هر فاصله یا کاراکتر غیر عددی از متن
      let numericText = inputText.replace(/\D/g, "");
      // جدا کردن متن به دسته‌های سه رقمی
      let separatedText = numericText.replace(/\B(?=(\d{4})+(?!\d))/g, "-");
      this.shadowRoot.querySelector("input").value = separatedText;
    };
  }
}
export {ShopItem};
