const $ = document;
import {ImgBottomLorem, ImgTopLorem, lavazem, TemplateNextLavazem, Commentsvalidate, Category, template, postAkhir} from "./wblag1.js";
import {Maincomments, Secondheadweblag} from "./main-modules-sites-weblag.js";
customElements.define("img-lorem-top", ImgTopLorem);
customElements.define("img-lorem-bottom", ImgBottomLorem);
customElements.define("div-lavazem", lavazem);
customElements.define("div-img-double", TemplateNextLavazem);
customElements.define("div-img", template);
customElements.define("post-akhar", postAkhir);
Maincomments();
Secondheadweblag();
Category();

//all items of Sitesweblag

let Allitemsarry = [
  {href: "../html/Product.html?id=گل و گیاه", img: "../img/گل.png", title: "گل و گیاه", countproduct: "61"},
  {href: "../html/Product.html?id= پوشاک", img: "../img/لباس.png", title: "پوشاک ", countproduct: "4"},
  {href: "../html/Product.html?id=تخت خواب", img: "../img/تخت خواب.png", title: "تخت خواب ", countproduct: "2"},
];

//all items of Sitesweblag

const mySwiper14 = (parentDiv6, sliceitem7) => {
  let swiper14 = new Swiper(".mySwiper14", {
    //rewind: true,
    navigation: {
      nextEl: ".mySwiper14 .swiper-button-next",
      prevEl: ".mySwiper14 .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      195: {slidesPerView: 2, spaceBetween: 19},
      640: {spaceBetween: 30, slidesPerView: 2},
      768: {spaceBetween: 30, slidesPerView: 3},
    },
  });

  let swiperfragment10 = document.createDocumentFragment();
  Allitemsarry.forEach((element) => {
    // console.log(element);
    let wraperfargment10 = document.createElement("div");
    wraperfargment10.className = "swiper-slide  w-full ";
    wraperfargment10.innerHTML = `
<div class="second-img-part  overflow-hidden md:shadow-md w-full">
<a href="${element.href}">
  <div class=" w-full">
  <img src="${element.img}" alt="" slot="first-img-second" class="second-main-img-part w-full md:h-[260px] bg-secondary ">
  </div>
<div class="relative  w-full">
<div class="second-main-title-part z-50  md:absolute md:right-6 md:bottom-[-20px]">
<p class="golo-giah font-bold " style="font-size: 16px;">${element.title}
</p>
<p class="mahsool-count   mt-3" style="font-size: 13px;">
${element.countproduct}محصول
</p>
</div>

</div>
</a>
</div>

`;
    swiperfragment10.append(wraperfargment10);
  });

  document.querySelector(".swiper14 .swiper-wrapper").append(swiperfragment10);
};

mySwiper14();

Commentsvalidate();
