const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="../components/Foter/foter.css">
<link rel="stylesheet" href="../tailwind/tailwind.css">
   <div class="free-div flex ">
   <div class="free-img flex border border-darkBlue  border-r-gray-700 ">
     <img src="./img/free-send.png" alt="" class="img" />
      <div class="free-text ms-5">
        <p class="font-bold text-white" style="font-size: medium;">
          <span class="post"></span>
         </p>
         <div class="bg-darkBlue h-2"></div>
           <span class="mt-8 text-zinc-400 font-bold">
            <span class="city"></span>
           </span>
           </div>
         </div>
         </div> 

</div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".img").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".city").innerHTML = this.getAttribute("city");
    this.shadowRoot.querySelector(".post").innerHTML = this.getAttribute("post");
  }
}

let tempalte2 = document.createElement("template");
tempalte2.className = "w-max";
tempalte2.innerHTML = `
<link rel="stylesheet" href="../tailwind/tailwind.css">
<div class="overflow-hidden rounded-full w-[30px] h-[30px]  text-center leading-7 p-2">
<a href="#">
    <img src="" alt="" class="w-6 m-auto" />
    </a>
  </div>
`;

class FooterLast extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(tempalte2.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".m-auto").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".text-center").style.backgroundColor = this.getAttribute("bg");
  }
}
export {Footer, FooterLast};
