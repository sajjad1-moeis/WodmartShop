let $ = document;
import {Category, postAkhir, Commentsvalidate} from "./wblag1.js";
import {Maincomments, Secondheadweblag} from "./main-modules-sites-weblag.js";
Secondheadweblag();
Maincomments();
Category();
customElements.define("post-akhar", postAkhir);
//texts-images

//didgah-js

Commentsvalidate();

function setCookie(cookieName, cookieValue, exDay) {
  let now = new Date();
  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);
  console.log(now);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
}

//didgah-js
