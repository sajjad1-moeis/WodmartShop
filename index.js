let $ = document;

//import

let cokieSubmit = document.cookie;
let Vrood = new Promise((resole, regect) => {
  cokieSubmit ? resole() : regect();
});
Vrood.then(() => {
  body("حساب کاربری من", "./html/userPage.html", "");
  FoterSite("", "./html/userPage.html");
}).catch(() => {
  body("ورود / ثبت نام", "./html/vrood.html", "");
  FoterSite("", "./html/vrood.html");
});

/// Api Mahsol

let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let arrMahsol = await api.json();
document.querySelector(".body").classList.remove("hidden");
document.querySelector(".loding").classList.add("hidden");

//header

//mySwiper1

const mySwiper1 = () => {
  let swiper1 = new Swiper(".mySwiper1", {
    rewind: true,
    navigation: {nextEl: ".mySwiper1 .swiper-button-next", prevEl: ".mySwiper1 .swiper-button-prev"},
    pagination: {el: ".mySwiper1 .swiper-pagination", clickable: true},
    centeredSlides: true,
    grabCursor: true,
  });

  for (let i = 1; i < 4; i++) {
    $.querySelector(".mySwiper1 .swiper-wrapper").innerHTML += `<div  class=" swiper-slide a${i}">
<div class="max-w-[716px]  w-3/4 md:w-full AbutSite" >
  <div class="w-full text-center">
    <div class="text-warning text-xl">
      <span>برترین سایت فروشگاهی سال</span>
    </div>
    <div class="text-white text-2xl md:text-5xl mt-3 md:mt-6 md:leading-[60px]">
      <h1>خریدی امن در کمترین زمان ممکن با نازلترین قیمت و با کیفیت ترین محصول</h1>
    </div>
    <div class="mt-5 text-base flex justify-center">
      <button class=" rounded-full py-3 px-5 text-white bg-warning me-2">مشاهده کنید</button>
      <button
        class=" rounded-full py-3 px-5 text-white bg-transparent border-[1.2px] border-white"
      >
        همین حالا خرید کنید
      </button>
    </div>
  </div>
</div>
</div>`;
  }
};
mySwiper1();

//MySwiper2

const slideSwiper2 = (div, swiper) => {
  let swiper2 = new Swiper(`${swiper}`, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {el: ".swiper-pagination", clickable: true},
    breakpoints: {
      768: {slidesPerView: 3, spaceBetween: 40},
      1024: {slidesPerView: 6, spaceBetween: 10},
      1280: {loop: false, slidesPerView: 6, spaceBetween: 10},
    },
  });
  let slideSwiper2 = [
    {img: "./img/لباس.png", count: 4, title: "پوشاک"},
    {img: "./img/تخت خواب.png", count: 3, title: "تخت خواب"},
    {img: "./img/کفش.png", count: 5, title: "کفش"},
    {img: "./img/گل.png", count: 2, title: "گل و گیاه"},
    {img: "./img/لوازم خانگی.png", count: 8, title: "لوازم خانگی"},
    {img: "./img/صندلی 2.png", count: 4, title: "مبلمان"},
  ];
  let fragmentSlid = $.createDocumentFragment();
  slideSwiper2.forEach((item) => {
    let div = $.createElement("div");
    div.classList = "swiper-slide";
    div.innerHTML = `
              <a href="./html/Product.html?id=${item.title}">
                <div class="w-full bg-secondary">
                  <div class="hovermahsolList">
                    <img class="h-[182px] w-[182px]  m-auto" src="${item.img}" alt="" />
                  </div>
                  <div class="mt-5 ">
                    <p class="text-xl"> ${item.title}</p>
                    <p class="text-sm text-zinc-600 mt-1">${item.count} محصول</p>
                  </div>
                </div>
                </a>
              
`;
    fragmentSlid.append(div);
  });
  div.append(fragmentSlid);
  div.append(fragmentSlid);
};
slideSwiper2($.querySelector(" .mySwiper2  .swiper-wrapper"), ".mySwiper2");
slideSwiper2($.querySelector(" .mySwiper88  .swiper-wrapper"), ".mySwiper88");

//MySwiper2

///MySwiper3

const hoverLeft = (arr, div) => {
  let fragment = $.createDocumentFragment();
  arr.forEach((item) => {
    let div = $.createElement("div");
    div.className = "swiper-slide relative";
    div.innerHTML = ` 
                      <div class="absolute w-[50px] left-0 md:left-[-50px] p-1 py-6 shadow list-menu2 gap-y-5 " data-num=${item.id} >
                        <div class="cursor-pointer love" ">
                        <img src="./img/heart-svgrepo-com (7).svg" alt="" class="w-6 ms-1.5" />

                        </div>
                        <div class="cursor-pointer my-2  kharid">
                        <img src="./img/shopping-cart-svgrepo-com (1).svg" alt="" class="w-6 my-3 ms-[7px]" />
                        </div>
                        <div class="cursor-pointer ">
                        <img src="./img/search-svgrepo-com (2).svg" class="w-6 ms-1.5" alt="" />
                        </div>
                      </div>
                      <div class="border-b-2 border-b-zinc-200">
                        <a href="#">
                          <img class="w-full" src="${item.img}" alt="" />
                        </a>
                      </div>
                      <div class=" m-2 mt-4">
                        <p class="my-2">${item.title}</p>
                        <p class=" text-warning">${item.price.toLocaleString()} تومان</p>
                      </div>
                 

    `;
    fragment.append(div);
  });

  $.querySelector(`${div}`).append(fragment);
};
const slideSwiper3 = () => {
  let swiper3 = new Swiper(".mySwiper3", {
    rewind: true,
    navigation: {prevEl: ".swiper3 .swiper-button-next", nextEl: ".swiper3 .swiper-button-prev"},
  });
  hoverLeft(arrMahsol.slice(6, 11), ".mySwiper3 .swiper-wrapper");
};
slideSwiper3();
let mySwiper5 = () => {
  let swiper5 = new Swiper(".mySwiper5", {
    rewind: true,
    navigation: {prevEl: ".swiper5 .swiper-button-next", nextEl: ".swiper5 .swiper-button-prev"},
  });
  hoverLeft(arrMahsol.slice(6, 11), ".mySwiper5 .swiper-wrapper");
};
mySwiper5();

///MySwiper3

//MySwiper4

const MySwiper4 = () => {
  let swiper4 = new Swiper(".mySwiper4", {
    cssMode: true,
    navigation: {prevEl: ".swiper4 .swiper-button-next", nextEl: ".swiper4 .swiper-button-prev"},
  });

  let slide1 = $.querySelector(".mySwiper4 .slide1");
  let slide2 = $.querySelector(".mySwiper4 .slide2");
  CreateProductSlide4(arrMahsol.slice(0, 6), slide1);
  CreateProductSlide4(arrMahsol.slice(0, 6), slide2);
};
MySwiper4();

// Div Hover Kharid (l)

function hoverBottom(i) {
  return `
      <div class=" w-max lg:w-full bg-white absolute h-max bottom-8 lg:bottom-[-45px] px-3  p-1.5 shadow list-menu2 gap-y-5" data-num="${i}">
          <div style="z-index: 1000" class="flex mx-auto w-max ">
          <div class="cursor-pointer mt-0.5 w-5 lg:w-[25px] love" >
            <img src="./img/heart-svgrepo-com (7).svg" alt="" class="w-full m-auto " />
           </div>
        <div class="cursor-pointer lg:w-[60px] ms-1 lg:mx-3 lg:border-x-[1px] border-zinc-200 kharid">
           <img src="./img/shopping-cart-svgrepo-com (1).svg" alt="" class=" px-1 w-8 lg:w-[35px] m-auto" />
         </div>
         <div class="cursor-pointer hidden lg:block" >
           <img src="./img/search-svgrepo-com (2).svg" class="w-[25px] m-auto " alt="" />
         </div>
      </div>
  </div>`;
}

//DivTakhfif Va Na Mojod

function divVizhehAndPercon(label0, label1, color) {
  return `<div class="absolute top-1 right-2 bg-danger  mx-auto text-xs px-3 w-max text-white"><span>${label0}</span></div>
  <div class="absolute top-[30px] right-2 ${color}  mx-auto text-xs px-1.5 w-[50px] text-white">
     <span> ${label1} </span>
  </div>`;
}

function CreateProductSlide4(arr, parent, slide) {
  let fragment = $.createDocumentFragment();
  arr.forEach((item) => {
    let div = $.createElement("div");
    div.classList = `bg-secondary rounded-lg border-[1px] md:border-0 border-zinc-100 pb-5 md:pb-0 overflow-hidden ${slide}`;
    if (item.current) {
      div.innerHTML = `
       <div class=" itemKharid relative">
       ${divVizhehAndPercon(item.label[0], item.label[1], "bg-warning")}
          ${hoverBottom(item.id)}
       <div class=" max-w-[200px] max-h-[200px] object-cover overflow-hidden m-auto">
         <img class="  object-cover h-36 md:h-[200px] mx-auto"  alt="" src="${item.img}"/>
       </div>
       <div class="mt-7 text-lg">
         <p class="md:mb-2 title   h-10 md:h-max overflow-hidden">${item.title}</p>
         <p class=" text-warning price">${item.price.toLocaleString()} تومان</p>
       </div>
     </div>
    `;
    } else {
      div.innerHTML = `
      <div class=" itemKharid relative opacity-50">
      ${divVizhehAndPercon(item.label[0], item.label[1], "bg-primary")}
      <div class=" max-w-[200px] max-h-[200px] object-cover">
        <img class="  object-cover h-36  md:h-[200px] mx-auto"  alt="" src="${item.img}"/>
      </div>
      <div class="mt-7 text-base">
        <p class="md:mb-2   h-10 md:h-max overflow-hidden">${item.title}</p>
        <p class=" text-warning price">${item.price.toLocaleString()} تومان</p>
      </div>
    </div>`;
    }
    fragment.append(div);
  });
  parent.append(fragment);
}
export {CreateProductSlide4};

///MySwiper4

// MySwiper6

const MySwiper6 = () => {
  let swiper6 = new Swiper(".mySwiper6", {
    pagination: {el: ".mySwiper6 .swiper-pagination", clickable: true},
    navigation: {nextEl: ".mySwiper6 .swiper-button-next", prevEl: ".mySwiper6 .swiper-button-prev"},
  });

  let fragment = $.createDocumentFragment();
  arrMahsol.slice(11, 13).forEach((item) => {
    let div = $.createElement("div");
    div.className = "swiper-slide relative text-center p-5 h-max slide-top-more";
    div.setAttribute("style", "height: max-content;");
    div.innerHTML = `
    <div class="md:w-max mx-auto relative overflow-hidden ">
    ${hoverBottom(item.id)}
                      
                      <img src="${item.img}" alt="" class="w-[270px] m-auto" />
                      
                    </div>
                    <div class="text-base mt-2">
                      <p class="">${item.title}</p>
                      <p class=" mt-2 text-warning">${item.price.toLocaleString()} هزار تومان</p>
                    </div>
    `;
    fragment.append(div);
  });
  $.querySelector(".mySwiper6 .swiper-wrapper").append(fragment);
};

MySwiper6();

//more-abut

async function moreAbut() {
  let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
  let arr = await api.json();
  let fragment = $.createDocumentFragment();
  arr.slice(0, 4).forEach((item) => {
    let div = $.createElement("div");
    div.setAttribute("data-aos", "fade-up");
    div.className = "flex";
    div.innerHTML = `
          
              <div class="text-5xl h-max my-auto">
                <span class="mt-2 h-max text-warning">${item.count}</span>
              </div>
              <div class="ms-3">
                <p class="text-2xl">${item.diration}</p>
                <p class="mt-2 text-zinc-500">${item.more}</p>
              </div>
           
  `;
    fragment.append(div);
  });
  $.querySelector(".more-abut").append(fragment);
}
moreAbut();

//MySwiper8

const mySwiper8 = () => {
  ////////////////
  let swiper8 = new Swiper(".mySwiper8", {
    navigation: {nextEl: ".mySwiper8 .swiper-button-next", prevEl: ".mySwiper8 .swiper-button-prev"},
    pagination: {el: ".mySwiper8 .swiper-pagination", clickable: true},
  });

  let fragment = document.createDocumentFragment();
  arrMahsol.slice(13, 16).forEach((item) => {
    let div = document.createElement("div");
    div.className = "swiper-slide relative text-center p-5 h-max slide-bottom-more p-3";
    div.setAttribute("style", "height: 380px;");

    div.innerHTML = `
    <div class="md:w-max mx-auto relative overflow-hidden ">
    ${hoverBottom(item.id)}
                      
                      <img src="${item.img}" alt="" class="w-[270px] m-auto" />
                      
                    </div>
                    <div class="mt-2 text-base">
                      <p class="">${item.title}</p>
                      <p class=" mt-2 text-warning">${item.price.toLocaleString()} هزار تومان</p>
                    </div>
    `;
    fragment.append(div);
  });
  document.querySelector(".mySwiper8 .swiper-wrapper").append(fragment);
};
mySwiper8();

const MySwiper9 = () => {
  let swiper9 = new Swiper(".mySwiper9", {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {prevEl: ".swiper9 .swiper-button-next", nextEl: ".swiper9 .swiper-button-prev"},
    breakpoints: {
      768: {slidesPerView: 3, spaceBetween: 40},
      1024: {slidesPerView: 6, spaceBetween: 10},
    },
  });
  CreateProductSlide4(arrMahsol.slice(20, 26), document.querySelector(".mySwiper9 .swiper-wrapper"), "swiper-slide");
};
MySwiper9();

// Create Basket Shop

let ArrayUserBasket = [].concat(JSON.parse(localStorage.getItem("mahsol")));
import {body, ShoeMenuMobile, Header, SearchProduct, ShowDivKhabarName, IconHeader, listNextSearch, ShowBasket, AbutMe, CreateMahsolBasket, RemoveItem, findMahsol, ShowElan, notSuccess, SabtNahaii} from "./js/Hedear-Site.js";
import {TedadBasket, ResultPrice, TaiinBasket, TedadLove, AddLove} from "./js/export.js";
import {AbutSwiper, HideMdAbut} from "./components/Btn-Swiper/Btn-Swiper.js";
import {FoterSite} from "./js/foter-Site.js";
import {Footer, FooterLast} from "./components/Foter/foter.js";
customElements.define("img-foter", FooterLast);
customElements.define("free-footer", Footer);
customElements.define("abut-swiper", AbutSwiper);
customElements.define("hide-abut-swiper", HideMdAbut);

import {Garden} from "./components/GardenElement/garden.js";
customElements.define("garden-elm", Garden);

// omid

//best-selling products myswiper7

const MySwiper7 = () => {
  //swiper7
  let swiper7 = new Swiper(".mySwiper7", {
    cssMode: true,

    navigation: {prevEl: ".swiper7 .swiper-button-next", nextEl: ".swiper7 .swiper-button-prev"},
  });
  CreateProductSlide4(arrMahsol.slice(78, 84), document.querySelector(".mySwiper7 .slide1"), "swiper-slide");
  CreateProductSlide4(arrMahsol.slice(75, 81), document.querySelector(".mySwiper7 .slide2"), "swiper-slide");
};
MySwiper7();
//brands-Swiper11
("bg-purple bg-orange-500 bg-pink-500 bg-success");

let brandsarry = [
  "./img/huawei.png",
  "./img/gucci.png",
  "./img/sony.png",
  "./img/samsun.png",
  "./img/ray-ban.png",
  "./img/tosan.png",
  "./img/panasonic.png",
  "./img/pars.png",
  "./img/bosch.png",
  "./img/xvision.png",
  "./img/Lg.png",
  "./img/adata.png",
];
const mySwiper11 = (parentDiv2, sliceitem2) => {
  let swiper11 = new Swiper(".mySwiper11", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {delay: 3500, disableOnInteraction: false},
    pagination: {el: ".swiper-pagination", clickable: true},
  });
  let swiperfragment4 = document.createDocumentFragment();
  sliceitem2.forEach((element) => {
    let wraperfargment4 = document.createElement("div");
    wraperfargment4.className = "swiper-slide  m-auto";
    wraperfargment4.innerHTML = `<div><a href="#"><img src="${element}" class="m-auto" alt=""></a></div>`;
    swiperfragment4.append(wraperfargment4);
  });
  parentDiv2.append(swiperfragment4);
};

mySwiper11(document.querySelector(".mySwiper13 .brands-1 "), brandsarry.slice(0, 6));
mySwiper11(document.querySelector(".mySwiper14 .brands-2 "), brandsarry.slice(6, 12));
mySwiper11(document.querySelector(".mySwiper15 .brands-3 "), brandsarry.slice(0));

//brands-Swiper11

//new-products-mySwiper12
const Swiper12 = () => {
  let swiper12 = new Swiper(".mySwiper12", {
    cssMode: true,
    navigation: {
      prevEl: ".swiper12 .swiper-button-next",
      nextEl: ".swiper12 .swiper-button-prev",
    },
  });

  CreateProductSlide4(arrMahsol.slice(68, 76), document.querySelector(".mySwiper12 .slide3"), "swiper-slide");
  CreateProductSlide4(arrMahsol.slice(76, 84), document.querySelector(".mySwiper12 .slide4"), "swiper-slide");
};
Swiper12();

// omid

///click Div Kharid

let LocalStorageItem = JSON.parse(localStorage.getItem("love"));
let arrUserLove = [];
arrUserLove = LocalStorageItem;

document.querySelectorAll(".list-menu2").forEach((btnLove) => {
  btnLove.addEventListener("click", (e) => {
    if (document.cookie.includes("name")) {
      let id = btnLove.dataset.num;
      if (e.target.parentElement.className.includes("kharid")) {
        findMahsol(id, arrMahsol, ArrayUserBasket, "");
        TedadBasket(ArrayUserBasket);
        document.querySelector(".DivBasket").classList.replace("left-[-350px]", "left-0");
      } else if (e.target.parentElement.className.includes("love")) {
        AddLove(arrMahsol, arrUserLove, id);

        TedadLove();
      }
    } else {
      let DivIsSubmit = document.querySelector(".IsSubmit");
      ShowElan(DivIsSubmit, $.querySelector(".heightDivIsSubmit"));
    }
  });
});
///////////////////////////////////////////////////////////////// Code JS
const i = (swiper) => {
  let mySwiper16 = new Swiper(`${swiper}`, {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {el: ".swiper-pagination", clickable: true},
    autoplay: {delay: 2000, disableOnInteraction: false},
    breakpoints: {
      768: {slidesPerView: 3, spaceBetween: 40},
      1024: {slidesPerView: 6, spaceBetween: 10},
    },
  });
};
i(".mySwiper13");
i(".mySwiper14");
i(".mySwiper15");

//site's weblag
let weblagsarray = [
  {href: "./html/sites-weblag.html", title: "طراحی داخلی", img: "./img/interior decorasion.jpg", date: "22", lable: "مبلمان"},
  {href: "./html/sites-weblag2.html", title: "وسایل مورد نیاز کوهنوردی", img: "./img/climbing things.jpg", date: "16", lable: "وسایل"},
  {href: "./html/sites-weblag3.html", title: "طراحی دکوراسیون داخلی", img: "./img/design decorasion.jpg", date: "11", lable: "طراحی سه بعدی"},
  {href: "#", title: "وسایل باغبانی", img: "./img/things garden.jpg", date: "4", lable: "وسایل"},
];
const mySwiper16 = (parentDiv5, sliceitem5) => {
  let swiper10 = new Swiper(".mySwiper16", {
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
    wraperfargment5.innerHTML = `
      <div class="interior-design   border-[2px] border-gray-100  shadow-sm relative overflow-hidden">
      <a href="${element.href}">
    <div class="divimg5  overflow-hidden  relative max-w-full">
    <div class="h-max w-full relative vf">
            <div class="m-auto text-center absolute p-3 bg-transparent flex gap-3 z-50">
              <div class="w-3 h-3 bg-white rounded-full"></div>
              <div class="w-3 h-3 bg-white rounded-full"></div>
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
 
    <img src="${element.img}" alt="" class="last-img w-full object-cover">
    
    </div>
    <div class="relative w-[54px]  mx-auto">
    <div class="design-title bg-warning w-[54px] h-[26px] text-center text-white  bottom-[-11px] absolute overflow-hidden">${element.lable}</div>
  </div>
    <div class="label-interior-design text-dark  top-5  text-center overflow-hidden mt-4"  >
      <div class="mt-2   font-bold ">
    <p class="font-bold">
    ${element.title}
  </p>
  </div>
<div class="small-label " >
  <div class="lable-icon flex relative mx-16">
    <small class="lorm-small1   block mt-3  mx-2.5 text-gray-400" style="font-size: 14px;">
      منتشر شده در
    </small>
    <img class="w-[20px] h-[20px] rounded-full mt-3" alt="author-avatar" src="https://secure.gravatar.com/avatar/9bc2e2258167305294dc4ad35e49e01f?s=32&amp;d=mm&amp;r=g">
    <a href="#">
    <small class="lorm-small1   block mt-3  mx-2.5 text-gray-400" style="font-size: 14px;">
      Woodmart
    </small></a>
    <div class="meta-reply relative mt-3  " >
      <a href="#">
       
        <i class="fa fa-envelope-o ">
        </i>
        <i class="fa fa-circle text-gray-300 z-500 absolute right-2"><i class="text-dark z-500 absolute right-[1.5px]">2</i></i>
        <i class="fa fa-share-alt  z-500 absolute right-8 mt-1 text-lg"></i>
      </a></div>
  </div>
   <small class="lorm-small1   block mt-3  mx-6 text-gray-600" style="font-size: 14px;"  >
 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از 
    صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها 
        و متون بلکه روزنامه و مجله در ستون...
          </small>
        </div>
        <div class="bg-white mt-3">
        </div>
        <small class="text-warning font-bold " style="font-size: 13px;">
          ادامه مطلب
        </small>
  </div>
      </div>
      <div class="swiper-wrapper">
      
      </div>
      </a>
    `;
    swiperfragment5.append(wraperfargment5);
  });
  parentDiv5.append(swiperfragment5);
};
mySwiper16(document.querySelector(".mySwiper16 .swiper-wrapper"), weblagsarray);

//site's weblag

////Import All

(() => {
  CreateMahsolBasket(ArrayUserBasket, "");
  RemoveItem(ArrayUserBasket, "");
  ResultPrice(ArrayUserBasket);
  TaiinBasket(ArrayUserBasket);
  Header("");
  ShowDivKhabarName();
  SearchProduct("./html/SearchMahsol.html?id=");
  listNextSearch();
  ShowBasket();
  AbutMe("");
  IconHeader("");
  ShoeMenuMobile();
  notSuccess();
  TedadBasket(ArrayUserBasket);
  TedadLove();
  SabtNahaii("");
})();
let sul = "";
arrMahsol.slice(11, 16).forEach((item) => {
  sul += `<div class="absolute text-center">
  <div class="bg-white p-5">
    <div class="w-max"><img src="${item.img}" alt="" /></div>
    <div class="my-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
    <div class="my-3 text-warning"> ${item.price.toLocaleString()} <span class="text-black">تومان</span></div>
    <div class="cursor-pointer my-2 bg-warning rounded-full p-2 text-white btn-kharid" data-num="${item.id}">افزودن به سبد خرید</div>
  </div>
</div>
<div class=" rounded-full  bg-white" style="width: 6px; height: 6px; margin: auto; margin-top: 5px"></div>
...`;
});

let HoverDiv = document.querySelectorAll(".ho");
for (let i = 0; i < sul.split("...").length - 1; i++) {
  HoverDiv[i].innerHTML = sul.split("...")[i];
}
document.querySelectorAll(".ho .btn-kharid").forEach((btn) => {
  btn.onclick = (e) => {
    let DivBasket = document.querySelector(".DivBasket");

    let id = e.target.dataset.num;
    findMahsol(id, arrMahsol, ArrayUserBasket, "");
    DivBasket.classList.replace("left-[-350px]", "left-0");
  };
});
