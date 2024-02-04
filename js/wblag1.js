let $ = document;
const ReturnStyleLik = () => {
  return `<link rel="stylesheet" href="../tailwind/tailwind.css">
    <link rel="stylesheet" href="../css/css.css">`;
};

let template1 = document.createElement("template");
template1.innerHTML = `
   ${ReturnStyleLik()}
    <div>
    <img src="" alt="" class="w-full" />
    <div class="my-7">
      <span>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
        هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
        در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
      </span>
      <p class="my-3"><span class="text-zinc-500 onvan" > برنامه نویس حرفه ای </span> – آدرس وبسایت من</p>
    </div>
  </div>

 `;
class ImgTopLorem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template1.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".onvan").textContent = this.getAttribute("title");
  }
}

let template2 = document.createElement("template");

template2.innerHTML = `
${ReturnStyleLik()}
                         <div>
                            <div class="my-7">
                              <span>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
                                در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
                              </span>
                              <p class="my-3"><span class="text-zinc-500 onvan"> برنامه نویس حرفه ای </span> – آدرس وبسایت من</p>
                            </div>
                            <img src="" alt=""  class="w-full"/>
                          </div>
  `;
class ImgBottomLorem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template2.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".onvan").textContent = this.getAttribute("title");
  }
}

let template3 = document.createElement("template");
template3.innerHTML = `
${ReturnStyleLik()}
<div class="lavazem-roshanayi my-10" style="margin-top: 70px">
<div class="flex my-5">
  <div class="w-full border-b-2 border-zinc-400 p-3"></div>
  <div class="flex-none border-b-2 border-warning text-4xl p-3 onvan"></div>
  <div class="w-full border-b-2 border-zinc-400 p-3"></div>
</div>
<img slot="images-images" src="" alt="" class="w-full" />
<div class="my-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها</div>
</div>
`;

class lavazem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template3.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".onvan").textContent = this.getAttribute("title");
  }
}

let template4 = document.createElement("template");
template4.innerHTML = `
${ReturnStyleLik()}
<div class="grid grid-cols-1 md:grid-cols-4 gap-10 my-8">
<div class="hidden md:block">
  <img src="../img/smart-sys1.jpg" class="img1"  alt="" />
</div>
<div class="md:col-span-2">
  <div class="text-center flex">
    <div class="w-full p-2 border-b-2 border-zinc-400"></div>
    <div class="flex-none p-2" style="border-bottom: 2px solid #ccc"><span class="text-2xl onvan"></span></div>
    <div class="w-full p-2 border-b-2 border-zinc-400"></div>
  </div>
  <div class="my-4">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
    بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
    زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
  </div>
</div>
<div class="hidden md:block">
  <img src="" class="img2" alt="" />
</div>
</div>
`;

class TemplateNextLavazem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template4.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector(".img1").src = this.getAttribute("img1");
    this.shadowRoot.querySelector(".img2").src = this.getAttribute("img2");
    this.shadowRoot.querySelector(".onvan").textContent = this.getAttribute("title");
  }
}

let template5 = document.createElement("template");
template5.innerHTML = `
     ${ReturnStyleLik()}
                 <div class="my-3">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 my-8">
                          <div class="text-zinc-600 text-center pt-10">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                            زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
                          </div>
                          <div class="md:col-span-2">
                            <img src="" alt="" />
                          </div>
                        </div>
                        <div class="w-full text-zinc-600">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                          فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام
                        </div>
                      </div>
`;
class template extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template5.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".gap-10").setAttribute("dir", this.getAttribute("direation"));
  }
}

let template6 = document.createElement("template");
template6.innerHTML = `
${ReturnStyleLik()}
<a href="" >
                <div class="flex gap-5 my-2 border-b-[1px] border-zinc-400 p-5">
                  <img src="../img/interior decorasion.jpg" class="w-24" />
                  <div>
                    <p class="n my-2"></p>
                    <p class="text-zinc-400">ژوئن 22, 2017 2 دیدگاه</p>
                  </div>
                </div>
              </a>`;

class postAkhir extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template6.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("a").href = this.getAttribute("link");
    this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    this.shadowRoot.querySelector(".n").textContent = this.getAttribute("title");
  }
}
const Category = () => {
  document.querySelector(".category").innerHTML = ` <p>دسته بندی ها</p>
    <a href="../html/SearchMahsol.html?id=چراغ فانتزی 107"> <p class="text-zinc-600 my-3">چراغ فانتزی</p></a>
    <a href="../html/SearchMahsol.html?id=لباس زنانه"> <p class="text-zinc-600 my-3">لباس زنانه</p></a>
    <a href="../html/Product.html?id=مبلمان"> <p class="text-zinc-600 my-3">مبلمان</p></a>
    <div class="w-full border border-zinc-400 mt-10"></div>
    <p class="my-2">پست های اخیر</p>
    <img src="" alt="" />
    <post-akhar link="../html/sites-weblag.html" img="../img/interior decorasion.jpg" title="طراحی داخلی"></post-akhar>
    <post-akhar link="../html/sites-weblag2.html" img="../img/climbing things.jpg" title="وسایل مورد نیاز کوه نوردی"></post-akhar>
    <post-akhar link="../html/sites-weblag3.html" img="../img/design decorasion.jpg" title="طراحی دکوراسیون داخلی"></post-akhar>
    <p class=" p-5">ایسنتاگرام ما</p>
    <div class="p-4 text-white" style="background-color: rgb(56, 148, 224)">امکان برقراری ارتباط با Instagram وجود ندارد.</div>

  
    `;
};

const ShowErrorComment = (tem1, tem2) => {
  document.querySelectorAll(".textError").forEach((item) => item.parentElement.classList.add("hidden"));
  document.querySelectorAll(".input").forEach((item) => item.classList.remove("showErrow"));
  if (tem1) {
    tem1.classList.replace("hidden", "flex");
    tem2.classList.add("showErrow");
  }
};

const Commentsvalidate = () => {
  let senddidgah = $.querySelector(".send-didgah");

  let textareaevv = $.querySelector(".text-area");
  let usersname = $.querySelector(".username");
  let usergmail = $.querySelector(".usergmail");
  let didgahcontainer = $.querySelector(".users-comments");
  let fillednamevalid = $.querySelector(".name-filled-err");
  let filledgmailvalid = $.querySelector(".filled-vallid-email");
  let divgmailvalid = $.querySelector(".filled-err");
  let chargmailvalid = $.querySelector(".chars-vallid-email");
  let textareavalid = $.querySelector(".textarea-filled-err");
  let mycheckbox = $.querySelector(".check-box input");
  let lastwebsite = $.querySelector(".lastwebsite");
  let commenttime = new Date();
  let monthes = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  let getmmonth = monthes[commenttime.getMonth()];
  let maintimecomment = ` ${commenttime.getFullYear()} , ${getmmonth}  ${commenttime.getDay()} در ${commenttime.getHours()}:${commenttime.getMinutes()}  `;
  const Commentsgenerator = () => {
    function separateCharacters(text, separationIndex, separator) {
      let regex = new RegExp(`(.{${separationIndex}})`, "g");
      let result = text.replace(regex, `$1${separator}`);
      return result;
    }

    ///

    let inputText = $.querySelector("textarea").value;
    let separationIndex = 80;
    let separator = "<br>";
    let result2 = separateCharacters(inputText, separationIndex, separator);

    didgahcontainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="user flex  w-full  relative border-b-[1.5px] ">
        <img class="w-[73px]  h-[73px] rounded-full mt-11  md:ms-2" alt="author-avatar" src="https://secure.gravatar.com/avatar/9bc2e2258167305294dc4ad35e49e01f?s=32&amp;d=mm&amp;r=g">
          <div class="flex-none md:flex-auto container my-10">
              <span slot="lorems">
                <span class="text-zinc-800 font-bold">
                  ${usersname.value} گفت:
                </span>
                <div class="md:float-left flex-none  md:w-max  mt-2.5  md:mt-20 block md:hidden ">
                  <span class=" text-zinc-400   ">
                  ${maintimecomment}
                    </span>
                </div>
                <div class="j h-auto  flex-none   overflow-hidden "  style="text-wrap:wrap;">
                <span class="block text-zinc-500   md:mt-3 mt-4">
                    ${result2}
              </span>
              </div>
              <span class="text-yellow-400 text-lg font-bold  mt-3 " >
             پاسخ
              </span>
            </span>
        </div>
      <div class="md:float-left flex-none  md:w-max  md:mt-12 hidden md:block">
        <span class=" text-zinc-400   ">   
       ${maintimecomment}
          </span>
      </div>
    </div>
    `
    );
  };

  console.log(filledgmailvalid);
  let newtemptodo = document.createElement("div");
  const Tododidgah = () => {
    const regex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    senddidgah.onclick = (event) => {
      if (mycheckbox.checked) {
        setCookie(`remem-token`, usersname.value + "--" + usergmail.value, 11);
      }
      if (textareaevv.value === "") {
        //
        ShowErrorComment(textareavalid, textareaevv);
        //
      } else if (usersname.value === "") {
        //
        ShowErrorComment(fillednamevalid, usersname);
        //
      } else if (usergmail.value === "") {
        //
        divgmailvalid.style.display = "flex";
        ShowErrorComment(filledgmailvalid, usergmail);
        //
      } else if (!regex.test(`${usergmail.value}`)) {
        //
        divgmailvalid.style.display = "flex";
        ShowErrorComment(chargmailvalid, usergmail);
        //
      } else {
        Commentsgenerator();
        ShowErrorComment("", "");
        textareaevv.value = "";
        usersname.value = "";
        usergmail.value = "";
        lastwebsite.value = "";
      }
    };
  };

  Tododidgah();
};

export {ImgBottomLorem, ImgTopLorem, lavazem, TemplateNextLavazem, template, Commentsvalidate, postAkhir, Category};
