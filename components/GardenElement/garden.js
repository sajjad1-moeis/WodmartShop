let templete = document.createElement("template");
templete.innerHTML = `
<link rel="stylesheet" href="../components/GardenElement/garden.css">
<link rel="stylesheet" href="./tailwind/tailwind.css" />

           <div class="divimg1 overflow-hidden relative">
              <div class="label-garden1 absolute top-5 right-5 z-50">
                <p class="noehFrosh text-warning mt-1 ms-1"> </p>
                <div class="my-2 text-white size cursor-pointer">
                  <p class="t1 "></p>
                  <p class="t2 text-sm mt-3"></p>
                </div>
                <a href="#" class="no-underline text-white border-b-2 border-white pb-0.5"> مشاهده کنید </a>
              </div>
              <div class="cursor-pointer v"></div>
            </div>
`;
class Garden extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(templete.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".noehFrosh").innerHTML = this.getAttribute("noehFrosh");
    this.shadowRoot.querySelector(".t1").innerHTML = this.getAttribute("t1");
    this.shadowRoot.querySelector(".t2").innerHTML = this.getAttribute("t2");
    this.shadowRoot.querySelector(".v").classList.add(this.getAttribute("img"));
    this.shadowRoot.querySelector(".size").classList.add(this.getAttribute("size"));
  }
}

export { Garden };
