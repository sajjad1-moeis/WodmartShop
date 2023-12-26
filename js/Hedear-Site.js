let $ = document;
function tekrar() {
  return ` <div class="p-2 leading-loose">
    <p>روشنایی</p>
    
    <p>لامپ</p>
    <p>مهتابی</p>
    <p>موس</p>
    <p>برق</p>
    <p>کتاب</p>
    <p>موبایل</p>
    <p>لبتاب</p>
    <p>خودکار</p>
    <p>ادکلن</p>
  </div>
`;
}

function Header(dot) {
  let arr = [
    { name: "خانه", img: ["", `${dot}./index.html`], current: false },
    { name: "مبلمان", img: [`${dot}./img/arrow.png`, "#"], current: true },
    { name: "لوازم آشپزخانه", img: [`${dot}./img/arrow.png`, "#"], current: true },
    { name: "لوازم جانبی", img: [`${dot}./img/arrow.png`, "#"], current: true },
    { name: "مد روز", img: [`${dot}./img/arrow.png`, "#"], current: true },
    { name: " ساعت", img: ["", ""], current: false },
    { name: "لوازم روشنایی", img: [`${dot}./img/arrow.png`, "#"], current: true },
    { name: "صنایع دستی", img: ["", "#"], current: false },
    { name: "نوشت افزار", img: [`${dot}./img/arrow.png`, "#"], current: true },
  ];
  arr.forEach((item) => {
    if (item.current) {
      document.querySelector(".list-none").innerHTML += `
      <a href="${dot}${item.img[1]}">
    <li class="  flex cursor-pointer text-base">
    ${item.name}
    <div class="mt-1 ms-1">
      <img src="${item.img[0]}" class="w-2.5">
    </div>
        
          <div
            class="grid g absolute mt-5 p-2 md:w-full w-1/2   grid-cols-4 gap-3   text-center  "
          >
           ${tekrar()}
           ${tekrar()}
           ${tekrar()}
           ${tekrar()}
        
        </div>
      </li>
      </a>
          `;
    } else {
      document.querySelector(".list-none").innerHTML += `
      <a href="${item.img[1]}">
      <li class="  flex text-base cursor-pointer">
      ${item.name}
      <div class="mt-0.5 ms-0.5">
        <img src="${item.img[0]}" class="w-4">
      </div>
      </li>
      </a>`;
    }
  });
}
const IconHeader = (dot) => {
  let index = 0;
  let img = [
    [
      `${dot}./img/heart-svgrepo-com (8).svg `,
      `${dot}./img/sort-arrow-svgrepo-com (1).svg`,
      `${dot}./img/shopping-bag-svgrepo-com.svg`,
    ],
    ["interest", "moghaiese", "basket"],
  ];
  document.querySelectorAll(".iconHeader").forEach((div) => {
    div.innerHTML += `<span
    class="absolute top-[-5px] bg-warning h-[16px] left-[-8px] text-center leading-[8px] pt-[5px]  p-1 w-[17px] rounded-full text-xs ${img[1][index]}">0</span>
    <img src="${img[0][index]}" class="w-6 h-5" alt="${img[1][index]}" />
    `;
    index++;
  });
};
function body(IsSubmit, href, dot) {
  document.querySelector(".body").insertAdjacentHTML(
    "afterbegin",
    `
  <div class="loding"></div>
  <header>
  <div class="bg-darkBlue lg:block hidden">
  <div class="w-full border-b-[1px] border-silver">
          <div class="container p-0 h-max max-w-[1200px] w-full flex justify-between ps-1.5">
          <div class="text-slate-300 my-auto text-xs">
          <span>بهترین ها رو میتونید از سایت ما خریداری کنید</span>
          </div>
          <div class="flex">
          <div class="flex">
          <div class="flex w-max text-white gap-2 my-auto text-lg Ertebat"></div>
          <div class="m-auto">
          <img src="${dot}./img/facebook.png" class="w-7 h-max" alt="" />
          </div>
          </div>
          <div class="flex text-white text-xs ms-3">
          <a href="#">
          <!-- btnKhabarName -->
  
          <div class="p-2.5 border-[1px] border-b-0 border-silver h-full flex btnKhabarName">
          <div class="me-1.5 mt-0.5">
                      <i class="fa fa-envelope-o"></i>
                    </div>
                    خبر نامه
                    </div>
                    </a>
                    <a href="${dot}./html/Ertebat.html">
                    <div class="p-2.5 border-y-[1px] border-b-0 border-silver h-full">تماس با ما</div>
                    </a>
                <a href="${dot}./html/Soal.html">
                <div class="p-2.5 border-[1px] border-b-0 border-silver h-full">سوالات متداول</div>
                </a>
                </div>
                </div>
                </div>
                </div>
                </div>
                
                <div class="h-max py-7 w-full bg-darkBlue lg:block hidden">
                <div class="max-w-[1200px] container w-full flex justify-between">
                <div class="w-[245px] h-[35px]">
                <a href="${dot}./index.html">
                   <img src="${dot}./img/wood-logo-white-reserve.svg" alt="" />
                   </a>
                   </div>
                
                <div class="max-w-[580px] xl:w-full rounded-full relative bg-white md:flex hidden">
                <div class="w-full xl:w-2/3 my-auto ms-3 py-3">
                <input type="text" class="w-full outline-none inputSearchProduct px-3" placeholder="جستجو برای محصولات" />
            </div>
            <div class="flex justify-between xl:w-1/3 w-full border-r-[1px] border-zinc-300">
              <div class="my-auto text-zinc-400 flex justify-between w-full  ps-3 relative dasteBandi">
                <div>انتخاب دسته بندی</div>
                <div class="text-zinc-600">
                  <div class="absolute pt-[32px] w-[180px] h-max right-0 leading-7 hidden list-next-search" style="z-index: 5000">
                  <div class="bg-white h-max p-3 pb-0"></div>
                  </div>
                  </div>
                  <i class="fa fa-angle-down" style="font-size: 18px"></i>
                  </div>
                  </div>
                  <div class="ms-3 bg-warning h-full p-3 px-4 rounded-l-full cursor-pointer btnSearchProduct">
                  <img src="${dot}./img/search3.png" class="w-7" alt="" />
                  </div>
                  </div>
                  <div class="flex my-auto text-white alage">
                  <div class="ms-4">
                  <a href="${href}">
                  <span>${IsSubmit}</span>
                  </a>
                  </div>
                  <div class="flex gap-5 ms-4">
                  <a href="${dot}./html/love.html">
                  <div class="relative iconHeader cursor-pointer"></div>
                  </a>
                  <div class="relative iconHeader  cursor-pointer"></div>
                  <div class="flex btnShowBasket cursor-pointer">
                  <div class="relative iconHeader"></div>
                  <span class="ms-4">0 تومان</span>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  
                  <div class="flex justify-between bg-darkBlue p-3 lg:hidden">
                  <div class="my-auto flex text-white cursor-pointer btn-ShowMenu">
                  <div>
                  <img src="${dot}./img/menu-svgrepo-com (1).svg" class="w-6" alt="" />
                  </div>
                  <span class="ms-2">منو</span>
                  </div>
                  <div>
                  <img src="${dot}./img/wood-logo-white-reserve.svg" alt="" class="w-[200px]" />
                  </div>
                  <div class="btnShowBasket cursor-pointer relative">
                  <span
                  class="absolute top-[-5px] bg-warning text-white h-[16px] left-[-8px] text-center leading-[8px] pt-[5px] p-1 w-[17px] rounded-full text-xs basket" 
                  >0</span 
                  >
                  <img src="${dot}./img/shopping-bag-svgrepo-com.svg" class="w-6" alt="" />
                  </div>
                  </div>
                  
                  <div class="h-max bg-white py-3 shadow lg:flex hidden border-[1px] border-b-silver">
                  <div class="max-w-[1200px] container">
                  <ul class="list-none gap-5 grid-cols-4 text-sm relative flex"></ul>
                  </div>
                  </div>
                  </header>
                  
                  <!-- SabadKharid -->
                  
                  <div
                  class="fixed  h-[100vh] w-[300px] lg:w-[350px]  bg-white  top-0 left-[-350px] DivBasket"
                  style="transition: 0.4s ease-in-out;z-index:55555"
    >
          <div class=" p-5 text-center text-base bg-white z-50  w-full absolute top-2/4 md:bottom-5">
            <div>
              <div class="TotalPrice">مجموع سبد خرید شما : 0 تومان</div>
            </div>
            <div class="BtnNahaii w-full p-2 my-2 rounded-lg bg-warning text-white cursor-pointer">نهایی کردن خرید</div>
          </div>
    <div class="flex justify-between p-3 relative">
    
        <div class="text-lg mt-1 w-max">
          <h1>سبد خرید</h1>
          </div>
          <div class="w-max flex closeBtnBasket cursor-pointer">
          <div class="mt-1">
          <span class="me-2">بستن</span>
          </div>
          <img src="${dot}./img/close4.png" class="w-8" alt="" />
          </div>
          </div>
      <div class="border-b-2 border-warning w-[90%] mx-auto"></div>
      <div class="ProductUser p-3"></div>
      <div class="p-5 text-center DivBasketKhali absolute w-full top-24 left-1/2 translate-x-[-50%]">
          <div class="w-max mx-auto">
            <img src="${dot}./img/notBasket.png" class="w-24" alt="" />
          </div>
          <div class="text-lg my-3">در حال حاضر سبد خرید شما خالی است</div>
        </div>
        
      </div>
      
    <!--DivMenuMobile-->

    <div
    class="fixed h-[100vh] left-[-350px] w-[300px] lg:w-[350px] z-50 top-0 bg-darkBlue  DivMenu"
    style="transition: 0.4s ease-in-out"
  >
    <div class="flex justify-end p-3">
      <div class="w-max closeBtnMenu cursor-pointer flex">
        <div class="mt-1 text-white">
          <span class="me-2">بستن</span>
        </div>
        <img src="${dot}./img/close3.png" class="w-8" alt="" />
      </div>
    </div>
    <div class="border-b-2 border-silver w-[90%] mx-auto"></div>
    <div class="px-4 py-2 flex">
      <input type="text" class="inputSearchProduct form-control text-black bg-white placeholder:text-dark" placeholder="جستجو برای محصولات..." />
    </div>
    <div class="px-4 mt-1 text-white">
      <a href="${dot}./index.html">
        <div class=" p-4 border-b-[1px] border-silver">خانه</div>
      </a>
      
      <a href="${dot}./html/love.html">
        <div class=" p-4 border-b-[1px] border-silver">علاقه مندی</div>
      </a>
      <a href="${href}">
        <div class=" p-4 border-b-[1px] border-silver">${IsSubmit}</div>
      </a>
      <div class=" p-4 border-b-[1px] border-silver">مقایسه</div>
    </div>
  </div>

    <div
      class="fixed h-[100vh] w-[300px] lg:w-[350px] bg-secondary z-50 top-0 left-[-350px] DivMenu"
        style="transition: 0.4s ease-in-out"
        >
        <div class="flex justify-between p-3">
        <div class="text-lg mt-1 w-max">
        <h1>سبد خرید</h1>
        </div>
        <div class="w-max flex closeBtnBasket cursor-pointer">
        <div class="mt-1">
        <span class="me-2">بستن</span>
        </div>
        <img src="${dot}./img/close4.png" class="w-8" alt="" />
        </div>
        </div>
        <div class="border-b-2 border-warning w-[90%] mx-auto"></div>
        <div class="ProductUser p-3">sa</div>
        </div>

      <!-- divKhabarName -->
      
      <div
      class="text-white fixed z-50 top-1/2 left-1/2 hidden translate-x-[-50%] divKhabarName translate-y-[-50%] bg-dark p-7 rounded-3xl max-w-[800px] w-full"
      >
      <div class="relative">
      <div class="w-max absolute left-5 top-5 cursor-pointer btnCloseKhabarName">
      <img src="${dot}./img/close-svgrepo-com.png" class="w-8" alt="" />
      </div>
      <div class="border-2 border-white w-full p-7 py-20 text-center rounded-md">
      <div class="mx-auto w-3/4 text-4xl mb-5">
      <h1>به وبسایت ما خوش آمدید ، در خبرنامه ما ثبت نام کنید</h1>
      </div>
      <p class="mb-2">با ثبت نام در خبرنامه وبسایت ما ، از اخبار و تخفیف ها مطلع شوید</p>
      <p>از اخبار و تخفیف های وبسایت ما خبردار شوید</p>
      </div>
      </div>
      </div>
      `
  );
}

function ShowDivKhabarName() {
  let btnKhabarName = document.querySelector(".btnKhabarName");
  let divKhabarName = document.querySelector(".divKhabarName");
  let btnCloseKhabarName = document.querySelector(".btnCloseKhabarName");

  btnKhabarName.onclick = () => {
    divKhabarName.classList.remove("hidden");
    document.body.classList.add("show");
  };
  btnCloseKhabarName.onclick = () => {
    document.body.classList.remove("show");
    divKhabarName.classList.add("hidden");
  };
}
function SearchProduct(href) {
  const Search = (input) => {
    if (input.value) {
      location.href = `${href}${input.value}`;
    }
  };
  document.querySelectorAll(".inputSearchProduct").forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        Search(input);
      }
    });
  });
  let btnSearchProduct = document.querySelector(".btnSearchProduct");
  btnSearchProduct.addEventListener("click", () => {
    document.querySelectorAll(".inputSearchProduct").forEach((input) => {
      if (input.value) {
        location.href = `${href}${input.value}`;
      }
    });
  });
}

function ShowBasket() {
  let btnShowBasket = document.querySelectorAll(".btnShowBasket").forEach((btn) => {
    btn.onclick = () => {
      DivBasket.classList.replace("left-[-350px]", "left-0");
    };
  });
  let closeBtnBasket = document.querySelector(".closeBtnBasket");
  let DivBasket = document.querySelector(".DivBasket");
  closeBtnBasket.onclick = () => {
    console.log("object");
    DivBasket.classList.replace("left-0", "left-[-350px]");
  };
}
function listNextSearch() {
  let arr = [" پوشاک", "تخت خواب", "کفش", "گل و گیاه", "لوازم خانگی", "مبلمان"];
  arr.forEach((item) => {
    $.querySelector("header .list-next-search div").innerHTML += `
    <a href="http://127.0.0.1:5500/html/Product.html?id=${item}">
       <p class="p-1 border-b-[1px] border-b-zinc-200 w-full">${item}</p>
    </a>

    `;
  });
}
function AbutMe(dot) {
  let arr = [
    [`${dot}./img/github.png`, "https://github.com/sajjad1-moei/project"],
    [`${dot}./img/instagram.png`, "#"],
    [`${dot}./img/telegram.png", "https://t.me/Assistedd`],
  ];
  arr.forEach((img) => {
    document.querySelector(".Ertebat").innerHTML += `
    <a href="${img[1]}">
    <div class="m-auto">
      <img src="${img[0]}" class="w-5" alt="" />
    </div>
  </a>`;
  });
}
function ShoeMenuMobile() {
  let DivMenu = document.querySelector(".DivMenu");
  document.querySelectorAll(".closeBtnMenu").forEach((btn) => {
    btn.addEventListener("click", () => {
      DivMenu.classList.replace("left-0", "left-[-350px]");
    });
  });
  document.querySelectorAll(" .btn-ShowMenu").forEach((btn) => {
    btn.addEventListener("click", () => {
      DivMenu.classList.replace("left-[-350px]", "left-0");
    });
  });
}

function CreateMahsolBasket(arr, dott) {
  document.querySelector(".ProductUser").innerHTML = "";
  if (JSON.parse(localStorage.getItem("mahsol"))) {
    arr.forEach((item) => {
      document.querySelector(".ProductUser").innerHTML += `
      <div class="w-full flex justify-between border-b-[1px] border-zinc-500 py-2">
      <div class="flex w-full">
      <div>
      <img src="${dott}${item.img}" class="w-20 h-[72px] object-cover" alt="" />
      </div>
      <div class="my-auto ms-4">
      <p>${item.title}</p>
      <p class="mt-2 text-warning">
      <span class="me-4 text-black">${item.count} عدد</span> 
      ${item.price.toLocaleString()}
      </p>
      </div>
      </div>
      <div class="my-auto cursor-pointer removeItemBasket"  data-remove="${
        item.id
      }"><img src="${dott}./img/close4.png" class="md:w-5 w-7" alt="" /></div>
      </div>`;
    });
  } else {
    SetLocal([]);
  }
}
import { TedadBasket, TaiinBasket, ResultPrice } from "./export.js";
function RemoveItem(arr, dot) {
  let y = document.querySelector(".ProductUser");
  y.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    if (parent.className.includes("removeItemBasket")) {
      let id = parent.dataset.remove;
      let IndexMahsol = arr.findIndex((item) => item.id === id);
      if (arr[IndexMahsol]) {
        arr[IndexMahsol].count = 1;
      }
      arr.splice(IndexMahsol, 1);
      SetLocal(arr);
      CreateMahsolBasket(arr, dot);
      TedadBasket(arr);
      TaiinBasket(arr);
      ResultPrice(arr);
    }
  });
}

function SetLocal(arr) {
  localStorage.setItem("mahsol", JSON.stringify(arr));
}
function findMahsol(id, arr, arr2, dot) {
  let FindMahsol = arr.find((item) => item.id === id);
  let someMahsol = arr2.some((item) => item.id === id);
  let IndexMahsol = arr2.findIndex((item) => item.id === id);
  if (someMahsol) {
    arr2[IndexMahsol].count++;
  } else {
    arr2.push(FindMahsol);
  }
  CreateMahsolBasket(arr2, dot);
  SetLocal(arr2);
  TedadBasket(arr2);
  TaiinBasket(arr2);
  ResultPrice(arr2);
}
function findMahsolLove(id, arr, arr2, dot) {
  let FindMahsol = arr.find((item) => item.id === id);
  let someMahsol = arr2.some((item) => item.id === id);
  let IndexMahsol = arr2.findIndex((item) => item.id === id);
  if (!someMahsol) {
    arr2.push(FindMahsol);
  }

  SetLocal(arr2);
}
function ShowElan(div) {
  div.classList.replace("right-[-288px]", "right-10");
  let interval = setTimeout(function () {
    div.classList.replace("right-10", "right-[-288px]");
  }, 2000);
}

function notSuccess() {
  document.body.insertAdjacentHTML(
    "beforeend",
    ` <div class="fixed w-60  h-max p-3 py-5 rounded-lg bg-danger  text-white z-50 right-[-288px] shadow-lg top-10 text-center IsSubmit">
    <span>لطفا ابتدا ثبت نام کنید</span>
  </div>`
  );
}
function divVizhehAndPercon(label0, label1, color) {
  return `<div class="absolute top-1 right-2 bg-danger  mx-auto text-xs px-3 w-max text-white"><span>${label0}</span></div>
  <div class="absolute top-[30px] right-2 ${color}  mx-auto text-xs px-1.5 w-[50px] text-white">
  <span> ${label1} </span>
  </div>`;
}
function HoverBottom(id) {
  return `
  <div class="w-full bg-white absolute h-max bottom-0 lg:bottom-[-45px] p-2 shadow list-menu2  gap-y-5" data-id=${id}>
  <div style="z-index: 1000" class="flex mx-auto w-max">
  <div class="cursor-pointer w-[25px] love">
  <img src="../img/heart-svgrepo-com (7).svg" alt="" class="w-full m-auto" />
  </div>
  <div class="cursor-pointer w-[60px] mx-3 border-x-[1px] border-zinc-200 kharid" >
  <img src="../img/shopping-cart-svgrepo-com (1).svg" alt="" class="px-1 w-[35px] m-auto" />
  </div>
  <div class="cursor-pointer" >
  <img src="../img/search-svgrepo-com (2).svg" class="w-[25px] m-auto" alt="" />
  </div>
  </div>
  </div>`;
}
function CreateMahsol(arr, div) {
  let divFrag = document.createDocumentFragment();
  arr.forEach((element) => {
    let divS = document.createElement("div");
    if (element.current) {
      divS.innerHTML = `
      <div class="relative rounded bg-secondary    h-max overflow-hidden imgHover">
      ${divVizhehAndPercon(element.label[0], element.label[1], "bg-warning")}
      ${HoverBottom(element.id)}
      <div class=" h-[200px]">
      <img src=".${element.img}" alt="" class="mx-auto w-full h-full object-cover"   />
      </div>
      <div class="text-center mt-3  ">
      <p class="h-7 my-auto">${element.title}</p>
      <p class="my-1 text-warning">${element.price.toLocaleString()} هزار تومان</p>
      </div>
      </div>`;
    } else {
      divS.innerHTML = `
      <div class="relative rounded bg-secondary pt-5  h-max opacity-50 overflow-hidden imgHover1">
      ${divVizhehAndPercon(element.label[0], element.label[1], "bg-primary")}
      <div class="h-[200px] md:h-max">
      <img src=".${element.img}" alt="" class="object-cover mx-auto w-full h-full" />
      </div>
      <div class="text-center mt-3">
      <p class="h-7">${element.title}</p>
      <p class="my-2 text-warning">${element.price.toLocaleString()} هزار تومان</p>
      </div>
      </div>`;
    }
    divFrag.append(divS);
  });
  div.append(divFrag);
}
function AddToBasket(arr, arr2) {
  let DivKharid = $.querySelectorAll(".list-menu2");
  DivKharid.forEach((div) => {
    div.addEventListener("click", (e) => {
      console.log("object");
      console.log();
      let parent = e.target.parentElement;
      if (document.cookie.includes("name")) {
        if (parent.className.includes("kharid")) {
          findMahsol(div.dataset.id, arr, arr2, ".");
          $.querySelector(".DivBasket").classList.replace("left-[-350px]", "left-0");
        } else if (parent.className.includes("love")) {
          findMahsol(div.dataset.id, arr, arr2, ".");
          findMahsolLove(div.dataset.id, arr, arr2, ".");
          localStorage.setItem();
        }
      } else {
        let DivIsSubmit = document.querySelector(".IsSubmit");
        ShowElan(DivIsSubmit, $.querySelector(".heightDivIsSubmit"));
      }
    });
  });
}
function FilterPrice(arr, arr2, div) {
  let InputFilterPrice = document.querySelector(".FilterPrice");
  let max = arr.sort((a, b) => b.price - a.price)[0];
  let value = InputFilterPrice.value * (max.price / 100);
  document.querySelector(".PriceSpan").innerHTML = `${value.toLocaleString()} تومان --- ${max.price.toLocaleString()} تومان`;

  InputFilterPrice.oninput = () => {
    let value = InputFilterPrice.value * (max.price / 100);
    let filter1 = arr.filter((item) => {
      return item.price >= value;
    });
    CreateMahsol(filter1, div);
    document.querySelector(".PriceSpan").innerHTML = `${value.toLocaleString()} تومان --- ${max.price.toLocaleString()} تومان`;
    AddToBasket(filter1, arr2);
  };
}
export {
  FilterPrice,
  AddToBasket,
  CreateMahsol,
  HoverBottom,
  divVizhehAndPercon,
  notSuccess,
  ShowElan,
  findMahsol,
  SetLocal,
  RemoveItem,
  CreateMahsolBasket,
  Header,
  IconHeader,
  body,
  SearchProduct,
  ShowDivKhabarName,
  ShowBasket,
  listNextSearch,
  AbutMe,
  ShoeMenuMobile,
};
