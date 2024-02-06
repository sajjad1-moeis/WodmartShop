const $ = document;

import {Category, postAkhir, Commentsvalidate} from "./wblag1.js";
import {Maincomments, Secondheadweblag} from "./main-modules-sites-weblag.js";
Secondheadweblag();
Maincomments();
Category();
customElements.define("post-akhar", postAkhir);

//didgah-js

Commentsvalidate();

//didgah-js

//site's weblag
let weblagsarray = [{img: "../img/white-box12.jpg"}, {img: "../img/white-book-now.jpg"}, {img: "../img/white-sofa.jpg"}, {img: "../img/white-balb.jpg"}];
const mySwiper13 = (parentDiv5, sliceitem5) => {
  let swiper10 = new Swiper(".mySwiper13", {
    //rewind: true,
    navigation: {
      nextEl: ".mySwiper13 .swiper-button-next",
      prevEl: ".mySwiper13 .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      195: {slidesPerView: 1, spaceBetween: 16},
      640: {slidesPerView: 2, spaceBetween: 16},
      768: {slidesPerView: 3, spaceBetween: 16},
    },
  });

  let swiperfragment5 = document.createDocumentFragment();
  sliceitem5.forEach((element) => {
    let wraperfargment5 = document.createElement("div");
    wraperfargment5.className = "swiper-slide akharin ";
    //wraperfargment5.setAttribute("style", "width:max-content");
    wraperfargment5.innerHTML = `
    <div class="interior-design   border-[2px] border-gray-100  shadow-sm relative overflow-hidden">
    <div class="divimg5  overflow-hidden  relative max-w-full">
    <img src="${element.img}" alt="" class="last-img w-full object-cover">
    </div>
      </div>
      <div class="swiper-wrapper">
      </div>
    `;
    swiperfragment5.append(wraperfargment5);
  });
  parentDiv5.append(swiperfragment5);
};
mySwiper13(document.querySelector(".mySwiper13 .swiper-wrapper"), weblagsarray);

//site's weblag

//site's weblag
let weblagsarray2 = [
  {img: "../img/محمد سلجوقی.jpg", name: "محمد سلجوقی", job: "طراح ساختمان"},
  {img: "../img/هلیا یزدانی.jpg", name: "هلیا یزدانی", job: "معماری"},
  {img: "../img/سهراب احمدی.jpg", name: "سهراب احمدی", job: "معمار حرفه ای"},
];
const mySwiper17 = (parentDiv8, sliceitem8) => {
  let swiper17 = new Swiper(".mySwiper17", {
    //rewind: true,
    navigation: {
      nextEl: ".mySwiper17 .swiper-button-next",
      prevEl: ".mySwiper17 .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      195: {slidesPerView: 1, spaceBetween: 16},
      640: {slidesPerView: 2, spaceBetween: 16},
      768: {slidesPerView: 1, spaceBetween: 16},
    },
  });

  let swiperfragment8 = document.createDocumentFragment();
  sliceitem8.forEach((element) => {
    let wraperfargment8 = document.createElement("div");
    wraperfargment8.className = "swiper-slide akharin2   ;";
    //wraperfargment8.setAttribute("style", "width:max-content");
    wraperfargment8.innerHTML = `
              <div class="interior-design2    shadow-sm relative overflow-hidden bg-secondary p-4 text-sm cursor-pointer">
                 <div class="md:flex block text-center md:text-start  ">
                    <div class="divimg5  overflow-hidden  relative  w-full ">
                    <img src="${element.img}" alt="" class="last-img   w-max  mx-auto rounded-full">
                    </div> 
                 <span slot="lorems" class="">                                    
                 <div class="">
                 <span class="text-sm text-zinc-400 italic font-bold">
                 "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه "
                 </span>   
                  </div>
                 <div class="text-lg md:text-sm  font-bold  text-dark mt-3" >
                 <h3 class="font-bold w-full">
                 <span>
                 ${element.name} –${element.job}</span>
                 </h3>
                  </div>
                  </span> 
              
    </div>   
    </div>
    `;
    swiperfragment8.append(wraperfargment8);
  });

  parentDiv8.append(swiperfragment8);
};
mySwiper17(document.querySelector(".mySwiper17 .swiper-wrapper"), weblagsarray2);

let template = $.createElement("template");
template.innerHTML = `
               <link rel="stylesheet" href="../tailwind/tailwind.css">
                   <link rel="stylesheet" href="../css/css.css">
                     <div class="my-5 overflow-hidden">
                      <img slot="images-images" src="../img/فانتزی.jpg" alt="" />
                      <div class="my-5">
                        <span slot="lorems" class="">
                          <div class="text-lg md:text-xl flex-none font-bold text-center text-dark">
                            <h3 class="font-bold w-full">
                              <span class="onvan"> </span>
                            </h3>
                          </div>
                          <div class="mt-5">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                          </div>
                        </span>
                      </div>
                    </div>
`;
class Template extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".onvan").textContent = this.getAttribute("title");
  }
}
customElements.define("div-element", Template);
//site's weblag
