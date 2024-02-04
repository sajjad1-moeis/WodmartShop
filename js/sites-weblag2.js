let $ = document;
import {Category, postAkhir, Commentsvalidate} from "./wblag1.js";
import {Maincomments, Secondheadweblag} from "./main-modules-sites-weblag.js";
Secondheadweblag();
Maincomments();
Category();
customElements.define("post-akhar", postAkhir);
//texts-images

Commentsvalidate();
