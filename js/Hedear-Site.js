let $ = document;
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
    <li class="text-sm  flex cursor-pointer">
    ${item.name}
    <div class="mt-0.5 ms-0.5">
      <img src="${item.img[0]}" class="w-4">
    </div>
        
          <div
            class="grid g absolute mt-5 p-2 md:w-full w-1/2   grid-cols-4 gap-3   text-center  "
          >
            <div class="p-2">
              <p>ساعت</p>
              
                 <p>جون</p>
                 <p>جون</p>
                 <p>جون</p>
                 <p>جون</p>
                 <p>جون</p>
                 <p>جون</p>
                 <p>جون</p>
                 <p>جون</p>
                 <p>جون</p>
            </div>
            <div class="p-2">
              <p>سفره</p>
              
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
            </div>
            <div class="p-2">
              <p>لوازم آشپزخانه</p>
              
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
            </div>
            <div class="p-2">
              <p>روشنایی</p>
              
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
              <p>جون</p>
            </div>
          </div>
        
      </li>
      </a>
          `;
    } else {
      document.querySelector(".list-none").innerHTML += `
      <a href="${item.img[1]}">
      <li class="text-sm  flex cursor-pointer">
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
    ["علاقه مندی", "مقایسه کردن", "سبد خرید"],
  ];
  document.querySelectorAll(".iconHeader").forEach((div) => {
    div.innerHTML += `<span
    class="absolute top-[-4px] bg-warning h-[14px] left-[-8px] text-center leading-[6px] pt-[5px] p-1 w-[15px] rounded-full text-xs">0</span>
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
              <div class="my-auto text-zinc-400 flex justify-between w-full text-xs ps-3 relative dasteBandi">
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
                  class="absolute top-[-3px] bg-warning text-white h-[14px] left-[-6px] text-center leading-[6px] pt-[5px] p-1 w-[15px] rounded-full text-xs"
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
                  class="fixed h-[100vh] w-[300px] lg:w-[350px] bg-secondary  top-0 left-[-350px] DivBasket"
                  style="transition: 0.4s ease-in-out;z-index:55555"
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
      <div class="ProductUser p-3"></div>
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
        <div class="ProductUser p-4 border-b-[1px] border-silver">خانه</div>
      </a>
      <div class="ProductUser p-4 border-b-[1px] border-silver">وبلاگ</div>
      <a href="${dot}./html/love.html">
        <div class="ProductUser p-4 border-b-[1px] border-silver">علاقه مندی</div>
      </a>
      <a href="${href}">
        <div class="ProductUser p-4 border-b-[1px] border-silver">${IsSubmit}</div>
      </a>
      <div class="ProductUser p-4 border-b-[1px] border-silver">مقایسه</div>
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
  let arr = [" پوشاک", "تخت خواب", "کفش", "گیاه و گل ", "لوازم خانگی", "مبلمان"];
  arr.forEach((item) => {
    $.querySelector("header .list-next-search div").innerHTML += `
    <a href="http://127.0.0.1:5500/html/Product.html?id=${item}">
       <p class="p-1 border-b-[1px] border-b-zinc-200 w-full ">${item}</p>
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
      <img src="${dott}${item.img}" class="w-20" alt="" />
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
      }"><img src="${dott}./img/close4.png" class="w-5" alt="" /></div>
      </div>`;
    });
  } else {
    SetLocal([]);
  }
}

function RemoveItem(arr, dot) {
  let y = document.querySelector(".ProductUser");
  y.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    if (parent.className.includes("removeItemBasket")) {
      console.log(parent.dataset.remove);
      RemoveItemBasket(parent.dataset.remove, arr);
    }
  });
  function RemoveItemBasket(id, arr) {
    let IndexMahsol = arr.findIndex((item) => item.id === id);
    arr[IndexMahsol].count = 1;
    arr.splice(IndexMahsol, 1);
    SetLocal(arr);
    CreateMahsolBasket(arr, dot);
  }
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
}

function ShowElan(div, height, width) {
  div.classList.replace("right-[-288px]", "right-10");

  let interval = setInterval(() => {
    if (width < 1) {
      div.classList.replace("right-10", "right-[-288px]");
      clearInterval(interval);
    } else {
      width--;
      height.style.width = `${width}%`;
    }
  }, 18);
}
function success() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="fixed w-60 h-max p-3 py-5 rounded-lg right-[-288px] bg-success text-white z-50 top-10 shadow-md text-center IsProduct">
  <span>با موفقیت اضافه شد</span>
  <div class="h-[2px] bg-green-300 mx-auto mt-2 rounded heightDivIsKhard"></div>
</div>`
  );
}
function notSuccess() {
  document.body.insertAdjacentHTML(
    "beforeend",
    ` <div class="fixed w-60 h-max p-3 py-5 rounded-lg bg-danger text-white z-50 right-[-288px] shadow-lg top-10 text-center IsSubmit">
    <span>لطفا ابتدا ثبت نام کنید</span>
    <div class="h-[2px] bg-red-300 mx-auto mt-2 rounded heightDivIsSubmit"></div>
  </div>`
  );
}
export {
  notSuccess,
  success,
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
