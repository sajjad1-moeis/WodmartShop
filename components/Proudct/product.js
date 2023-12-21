let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./components/Proudct/product.css">
<link rel="stylesheet" href="../tailwind/tailwind.css" />
<div class="absolute w-[20px] left-10" style="top: 30px">
<div class="swiper-button-next left-0"></div>
<div class="swiper-button-prev"></div>
</div>
                    
`;
class Proudct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  connectedCallback() {}
}
export { Proudct };
