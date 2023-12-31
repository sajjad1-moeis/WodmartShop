let $ = document;

//import

let cokieSubmit = document.cookie;

if (cokieSubmit) {
  body("حساب کاربری من", "./html/userPage.html", "");
} else {
  body("ورود / ثبت نام", "./html/vrood.html", "");
}

/// Api Mahsol

let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/gol");
let arrMahsol = await api.json();
document.querySelector(".body").classList.remove("hidden");
document.querySelector(".loding").classList.add("hidden");

//header

//mySwiper1

function mySwiper1() {
  let swiper1 = new Swiper(".mySwiper1", {
    rewind: true,
    navigation: { nextEl: ".mySwiper1 .swiper-button-next", prevEl: ".mySwiper1 .swiper-button-prev" },
    pagination: { el: ".mySwiper1 .swiper-pagination", clickable: true },
    keyboard: true,
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
}
mySwiper1();

//MySwiper2

function slideSwiper2(div, swiper) {
  let swiper2 = new Swiper(`${swiper}`, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 6, spaceBetween: 10 },
      1280: { loop: false, slidesPerView: 6, spaceBetween: 10 },
    },
  });
  let slideSwiper2 = [
    { img: "./img/لباس.png", count: 4, title: "پوشاک" },
    { img: "./img/تخت خواب.png", count: 3, title: "تخت خواب" },
    { img: "./img/کفش.png", count: 5, title: "کفش" },
    { img: "./img/گل.png", count: 2, title: "گل و گیاه" },
    { img: "./img/لوازم خانگی.png", count: 8, title: "لوازم خانگی" },
    { img: "./img/صندلی 2.png", count: 4, title: "مبلمان" },
  ];
  let fragmentSlid = $.createDocumentFragment();
  slideSwiper2.forEach((item) => {
    let div = $.createElement("div");
    div.classList = "swiper-slide";
    div.innerHTML = `
              <a href="./html/Product.html?id=${item.title}">
                <div class="w-full bg-secondary">
                  <div class="hovermahsolList">
                    <img class="h-[182px] w-[182px]" src="${item.img}" alt="" />
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
}
slideSwiper2($.querySelector(" .mySwiper2  .swiper-wrapper"), ".mySwiper2");
slideSwiper2($.querySelector(" .mySwiper88  .swiper-wrapper"), ".mySwiper88");

//MySwiper2

///MySwiper3

function hoverLeft(arr, div) {
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
}
function slideSwiper3() {
  let swiper3 = new Swiper(".mySwiper3", {
    rewind: true,
    navigation: { prevEl: ".swiper3 .swiper-button-next", nextEl: ".swiper3 .swiper-button-prev" },
  });
  hoverLeft(arrMahsol.slice(6, 11), ".mySwiper3 .swiper-wrapper");
}
slideSwiper3();
let mySwiper5 = () => {
  let swiper5 = new Swiper(".mySwiper5", { rewind: true, navigation: { prevEl: ".swiper5 .swiper-button-next", nextEl: ".swiper5 .swiper-button-prev" } });
  hoverLeft(arrMahsol.slice(6, 11), ".mySwiper5 .swiper-wrapper");
};
mySwiper5();

///MySwiper3

//MySwiper4

const MySwiper4 = () => {
  let swiper4 = new Swiper(".mySwiper4", {
    cssMode: true,
    navigation: { prevEl: ".swiper4 .swiper-button-next", nextEl: ".swiper4 .swiper-button-prev" },
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
    div.classList = `bg-secondary rounded-md overflow-hidden ${slide}`;
    if (item.current) {
      div.innerHTML = `
       <div class=" itemKharid relative">
       ${divVizhehAndPercon(item.label[0], item.label[1], "bg-warning")}
          ${hoverBottom(item.id)}
       <div class=" ">
         <img class="m-auto"  alt="" src="${item.img}"/>
       </div>
       <div class="mt-7 text-base">
         <p class="md:mb-2 title   h-10 md:h-max overflow-hidden">${item.title}</p>
         <p class=" text-warning price">${item.price.toLocaleString()} تومان</p>
       </div>
     </div>
    `;
    } else {
      div.innerHTML = `
      <div class=" itemKharid relative opacity-50">
      ${divVizhehAndPercon(item.label[0], item.label[1], "bg-primary")}
      <div class=" ">
        <img class="m-auto"  alt="" src="${item.img}"/>
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
export { CreateProductSlide4 };
///MySwiper4

// MySwiper6

function MySwiper6() {
  let swiper6 = new Swiper(".mySwiper6", {
    pagination: { el: ".mySwiper6 .swiper-pagination", clickable: true },
    navigation: { nextEl: ".mySwiper6 .swiper-button-next", prevEl: ".mySwiper6 .swiper-button-prev" },
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
}
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
    navigation: { nextEl: ".mySwiper8 .swiper-button-next", prevEl: ".mySwiper8 .swiper-button-prev" },
    pagination: { el: ".mySwiper8 .swiper-pagination", clickable: true },
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
    navigation: { prevEl: ".swiper9 .swiper-button-next", nextEl: ".swiper9 .swiper-button-prev" },
    breakpoints: {
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 6, spaceBetween: 10 },
    },
  });
  CreateProductSlide4(arrMahsol.slice(20, 26), document.querySelector(".mySwiper9 .swiper-wrapper"), "swiper-slide");
};
MySwiper9();

// Create Basket Shop

let ArrayUserBasket = [].concat(JSON.parse(localStorage.getItem("mahsol")));
import {
  body,
  ShoeMenuMobile,
  Header,
  SearchProduct,
  ShowDivKhabarName,
  IconHeader,
  listNextSearch,
  ShowBasket,
  AbutMe,
  CreateMahsolBasket,
  RemoveItem,
  findMahsol,
  ShowElan,
  notSuccess,
} from "./js/Hedear-Site.js";
import { TedadBasket, ResultPrice, TaiinBasket, TedadLove, AddLove } from "./js/export.js";
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
})();
import { Garden } from "./components/GardenElement/garden.js";
customElements.define("garden-elm", Garden);

// omid
//omid
//myswiper5

let arrswips = [
  { img: "./img/دریل.jpg", title: "پیچ گوشتی الکترونیکی DeWlat", price: 254_000, count: 1, current: true },
  { img: "./img/پاپیون.jpg", title: "پاپیون رنگ چوبی ", price: 72_000, count: 1, current: true },
  { img: "./img/النگو.jpg", title: "النگوزنانه", price: 3_600_000, count: 1, current: true },
  { img: "./img/are.png", title: " اره برقی مدلهStanley", price: 870_000, count: 1, current: true },
  { img: "./img/are2.png", title: "اره برقی رومیزی Hitachi", price: 670_000, count: 1, current: true },
];

//best-selling products myswiper7

let sellproductsarr = [
  { id: 100, title: "صندلی راحتی", price: 245_000, label: ["-6%", "جدید"], img: "./img/product-furniture-19-2-200x200 copy.jpg", count: "", current: true },
  { id: 101, title: "عروسک چوبی", price: 70_000, label: ["", ""], img: "./img/product-furniture-15-200x200.jpg", count: "", current: true },
  { id: 102, title: "ساعت فانتزی ظرح مهتاب ساده", price: 90_000, label: ["", "ویژه"], img: "./img/clocks5_2-200x200.jpg", count: "", current: true },
  { id: 103, title: " جاخودکاری ساده", price: 15_000, label: ["-20%", "ویژه"], img: "./img/product-furniture-14-200x200.jpg", count: "", current: true },
  { id: 104, title: " چراغ فانتزی 107", price: 95_000, label: ["-20%", "ویژه"], img: "./img/لامپ قرمز.jpg", count: "", current: true },
  { id: 105, title: "قفسه آیفون چوبی", price: 180_000, label: ["", ""], img: "./img/dock-black-walnut-ip6-grid-B1_1-200x200.jpg", count: "", current: true },
  { id: 106, title: "موبایل اپل 8", price: 8_000_000, label: ["", ""], img: "./img/white-electronics-product-1-200x200.jpg", count: "", current: true },
  { id: 107, title: "هندزفری مدل ال جی 114", price: 140_000, label: ["", ""], img: "./img/white-electronics-product-2-200x200.jpg", count: "", current: true },
  { id: 108, title: "لپ تاب ایسوس مدل P520", price: 12_000_000, label: ["", ""], img: "./img/lobtap.png", count: "", current: true },
  { id: 109, title: " هدفون بلوتوث دار سونی ", price: 210_000, label: ["", ""], img: "./img/ghosh.jpg", count: "", current: true },
  { id: 110, title: "هدفون ایسوس 12", price: 174_000, label: ["", ""], img: "./img/white-electronics-product-8-200x200.jpg", count: "", current: true },
  {
    id: 119,
    title: "لپ تاپ ایسوس مدل K700",
    price: 8_600_000,
    label: ["", ""],
    img: "./img/white-electronics-product-7-200x200.jpg",
    count: "",
    current: true,
  },
];

CreateProductSlide4(arrMahsol.slice(0, 6), document.querySelector(".mySwiper7 .slide1"), "swiper-slide");
CreateProductSlide4(arrMahsol.slice(6, 12), document.querySelector(".mySwiper7 .slide2"), "swiper-slide");

//brands-Swiper11

let brandsarry = [
  { img: "./img/huawei.png" },
  { img: "./img/gucci.png" },
  { img: "./img/sony.png" },
  { img: "./img/samsun.png" },
  { img: "./img/ray-ban.png" },
  { img: "./img/tosan.png" },
  /*  step2 */
  { img: "./img/panasonic.png" },
  { img: "./img/pars.png" },
  { img: "./img/bosch.png" },
  { img: "./img/xvision.png" },
  { img: "./img/Lg.png" },
  { img: "./img/adata.png" },
];
const mySwiper11 = (parentDiv2, sliceitem2) => {
  let swiper11 = new Swiper(".mySwiper11", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    autoplay: { delay: 12000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
  });

  let swiperfragment4 = document.createDocumentFragment();

  sliceitem2.forEach((element) => {
    let wraperfargment4 = document.createElement("div");
    wraperfargment4.className = "swiper-slide";
    wraperfargment4.innerHTML = `

      <div><a href="#"><img src="${element.img}" class="m-auto" alt=""></a></div>
`;
    swiperfragment4.append(wraperfargment4);
  });
  parentDiv2.append(swiperfragment4);
};
let mySwiper16 = new Swiper(" .mySwiper16", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  autoplay: { delay: 2000, disableOnInteraction: false },
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 6, spaceBetween: 10 },
  },
  pagination: { el: ".swiper-pagination", clickable: true },
});
let mySwiper17 = new Swiper(" .mySwiper17", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  autoplay: { delay: 2000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 6, spaceBetween: 10 },
  },
});
mySwiper11(document.querySelector(".swiper .brands-1 "), brandsarry.slice(0, 6));
mySwiper11(document.querySelector(".swiper .brands-2 "), brandsarry.slice(6, 12));

//brands-Swiper11

//new-products-mySwiper12
let newproductsarr = [
  { id: 200, title: "LED چراغ خواب", price: 230_000, label: ["-14%", ""], img: "./img/چراغ قرمزی.jpg", count: "", current: true },
  { id: 200, title: " چراغ خواب طرح سرامیکی", price: 78_000, label: ["-16%", ""], img: "./img/چراغ چتری.jpg", count: "", current: true },
  { id: 200, title: "چراغ فانتزی 107", price: 60_000, label: ["-20%", ""], img: "./img/لامپ قرمز.jpg", count: "", current: true },
  { id: 200, title: " دوربین عمودی پاناسونیک", price: 1_200_000, label: ["", ""], img: "./img/دوربین ایستاده.jpg", count: "", current: true },
  { id: 200, title: " چراغ لامپ کم مصرف", price: 239, label: ["", "ویژه"], img: "./img/لامپ سگی.jpg", count: "", current: true },
  { id: 200, title: "درختچه هلندی", price: 42_000, label: ["", ""], img: "./img/gol3.png", count: "", current: true },
  { id: 200, title: "پیرهن سفید زنانه", price: 185_000, label: ["", ""], img: "./img/داف.jpg", count: "", current: true },
  { id: 200, title: "دکوراسیون چوبی ساده", price: 890_000, label: ["", ""], img: "./img/خیارچوبی.jpg", count: "", current: true },
  { id: 200, title: "مایکرویو Oven", price: 750_000, label: ["", ""], img: "./img/مایکرویو.jpg", count: "", current: true },
  { id: 200, title: "مبل چرم شرکتی", price: 340_000, label: ["", ""], img: "./img/صندلی قرمز.jpg", count: "", current: true },
  { id: 200, title: "مانیتور Leonovo 700", price: 620_000, label: ["-9%", ""], img: "./img/مانیتور.jpg", count: "", current: true },
  { id: 200, title: " موبایل Huawei P Smart", price: 1_950_000, label: ["-7%", ""], img: "./img/huawei p smart.jpg", count: "", current: true },
  { id: 200, title: "کیبورد ایسوس 634", price: 67_000, label: ["-26%", ""], img: "./img/کیبورد.jpg", count: "", current: true },
  { id: 200, title: "موبایل ال جی V30", price: 3_450_000, label: ["", ""], img: "./img/ال جی 730.jpg", count: "", current: true },
  { id: 200, title: "موبایل سونی اکسپریا XZ1", price: 3_800_000, label: ["", ""], img: "./img/سونی اکسپریا.jpg", count: "", current: true },
  { id: 200, title: "موبایل گلکسی S8", price: 5_800_000, label: ["", ""], img: "./img/گلکسی s8.jpg", count: "", current: true },
];
let swiper12 = new Swiper(".mySwiper12", {
  navigation: {
    nextEl: ".mySwiper12 .swiper-button-next",
    prevEl: ".mySwiper12 .swiper-button-prev",
  },
  pagination: {
    // el: ".swiper-pagination",
    //clickable: true,
  },
});

CreateProductSlide4(arrMahsol.slice(0, 8), document.querySelector(".mySwiper12 .slide3"), "swiper-slide");
CreateProductSlide4(arrMahsol.slice(8, 16), document.querySelector(".mySwiper12 .slide4"), "swiper-slide");

// omid

///click Div Kharid

let LocalStorageItem = JSON.parse(localStorage.getItem("love"));
let arrUserLove = [];
arrUserLove = LocalStorageItem;

document.querySelectorAll(".list-menu2").forEach((btnLove) => {
  btnLove.addEventListener("click", (e) => {
    console.log(e.target);
    if (document.cookie.includes("name")) {
      let id = btnLove.dataset.num;
      if (e.target.parentElement.className.includes("kharid")) {
        console.log("object");
        findMahsol(id, arrMahsol.concat(sellproductsarr), ArrayUserBasket, "");
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
