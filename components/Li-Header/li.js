let temp = document.createElement("template");
temp.innerHTML = `
<link rel="stylesheet" href="./components/Li-Header/li.css" />
<a href="#" >
<li id="parent"> 
<slot name="k"></slot>
  <div class="zir-menu">
  <div >
  <h1>salam</h1>

  </div>
  <div>
    <h1>salam</h1>
  </div>
  <div>
    <h1>salam</h1>
  </div>
  <div>
    <h1>salam</h1>
  </div>
  </div>
</li>
</a>
`;

class LiHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(temp.content.cloneNode(true));
  }
  connectedCallback() {}
}
export { LiHeader };
