const $ = document;
let containercomment = $.querySelector(".comments");
const Maincomments = () => {
  containercomment.innerHTML = `

<div class="users-comments block    w-full relative ">
<div class="text-2xl font-bold mt-14 flex-none w-full" >
<h3 class="font-bold  ">
<p class="my-10">دیدگاهی در مورد “طراحی داخلی”</p>
</h3>
</div>
<div class="user flex  w-full  relative border-b-[1.5px] ">
<img class="w-[73px]  h-[73px] rounded-full m-auto" alt="author-avatar" src="https://secure.gravatar.com/avatar/9bc2e2258167305294dc4ad35e49e01f?s=32&amp;d=mm&amp;r=g">
<div class="flex-none md:flex-auto container  my-10"  >
  
    <span >
      <span class="text-zinc-800 font-bold " >
        امین حسینی گفت:
      </span>
      <div class="md:float-left flex-none  md:w-max  mt-2.5  md:mt-20 block md:hidden ">
        <span class=" text-zinc-400   ">
          دسامبر 24, 2019 در 3:49 ب.ظ
          </span>
      </div>
      <span class="block text-zinc-500   md:mt-3 mt-4">
    بسیار عالی بود ، ممنون به خاطر پست مناسب و بی نقص شما
    </span>
    <span class="text-yellow-400 text-lg font-bold  mt-3 " >
   پاسخ
    </span>
  </span>

</div>
<div class="md:float-left flex-none  md:w-max  md:mt-20 hidden md:block">
<span class=" text-zinc-400   ">
دسامبر 24, 2019 در 3:49 ب.ظ
</span>
</div>
</div>
<div class="user flex  w-full  relative border-b-[1.5px] ">
<img class="w-[73px]  h-[73px] rounded-full mt-11  md:ms-2" alt="author-avatar" src="https://secure.gravatar.com/avatar/9bc2e2258167305294dc4ad35e49e01f?s=32&amp;d=mm&amp;r=g">
<div class="flex-none md:flex-auto container md:container-0 smalldiv:container-0 my-10 "  >
  <span slot="lorems">
    <span class="text-zinc-800 font-bold " >
      مدیریت سایت گفت:
    </span>
    <div class="md:float-left flex-none  md:w-max  mt-2.5  md:mt-20 block md:hidden ">
      <span class=" text-zinc-400   ">
        دسامبر 24, 2019 در 3:49 ب.ظ
        </span>
    </div>
    <span class="block text-zinc-500   md:mt-3 mt-4">
        با سلام و درود خدمات شما
        از دیدگاه خوب شما کمال تشکر را داریم       
    </span>
   
  <span class="text-yellow-400 text-lg font-bold  mt-3" >
 پاسخ
  </span>
</span>

</div>


<div class="md:float-left flex-none  md:w-max  md:mt-20 hidden md:block">
<span class=" text-zinc-400   ">
دسامبر 24, 2019 در 4:02 ب.ظ
</span>
</div>
</div>
<!-- <div class="user"></div> -->
</div>
<div class="didgah ">
<div class="label-didgah ">
<div class="text-2xl font-bold mt-14 flex-none w-full" >
<h3 class="font-bold  ">
<slot name="title-border2">دیدگاهتان را بنویسید</slot>
</h3>
</div>
<span class="flex text-zinc-500   md:mt-3 mt-4">
نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند 
<span class="required text-pink-600 text-lg ms-1">*</span>
</span>
<span class="flex text-zinc-800   md:mt-3 mt-4">
دیدگاه 
<span class="required text-pink-600 text-lg ms-1">*</span>
</span>
</div>
<div class="text-area-div  relative ">
<textarea name="" id="" cols="30" rows="8" class=" input text-area w-full  border-[2px] rounded-[40px] p-5 focus:border-warning outline-none" ></textarea>
<div class="textarea-filled-err hidden ms-2.5">
<small class="textError my-2 text-orange-600 mt-auto" style="font-size: 11px;">  ...please comment about</small>
</div>
</div>
<div class="datas-users grid md:grid-cols-4 grid-cols-1 gap-5 ">
<div class="col-span-2">
<span class="flex text-zinc-800   md:mt-3 mt-4">
  نام
  <span class="required text-pink-600 text-lg ms-1">*</span>
</span>
<input type="text" class="input username  border-[2px]  h-[42px]  rounded-[25px] w-full p-3 focus:border-warning outline-none">
<div class="name-filled-err  ms-2.5 hidden my-2">
    <small class="text-danger   textError mt-auto" style="font-size: 11px;"> - please fill this filled</small>
</div>
</div>
<div class="col-span-2 ">
<span class="flex text-zinc-800   md:mt-3">
ایمیل
  <span class="required text-pink-600 text-lg ms-1">*</span>
</span>
<input id="txtEmail" type="email" class="input usergmail border-[2px] h-[42px] rounded-[25px] w-full p-3 focus:border-warning outline-none">
<div class="filled-err hidden ms-2.5">
  <div class="filled-vallid-email hidden my-2">
    <small class="text-danger textError  mt-auto" style="font-size: 11px;"> - please fill this filled</small>
  </div>
  <div class="chars-vallid-email hidden">
    <small class="text-danger textError  mt-auto" style="font-size: 11px;"> - this filled must be big and small characters</small>
  </div>
</div>
</div>
</div>
<div class="datas-users grid md:grid-cols-4 grid-cols-1 gap-3 ">
<span class="flex text-zinc-800   md:mt-3 mt-4">
وب‌ سایت
  </span>
<input placeholder="اختیاری" type="text" class="lastwebsite border-[2px] h-[42px] col-span-4 rounded-[25px] p-3 focus:border-warning outline-none ">
</div>
<div class="check-box mt-3 flex">
<input class="md:mt-4"  type="checkbox" >
<span class="flex text-zinc-800   md:mt-3 mt-4 ms-2">
ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
</span>
</div>
<div class="mt-6">
<button class="send-didgah bg-warning  text-white  py-3 px-[20px]  rounded-full hover:bg-yellow-500" style="transition: 0.4s;"> 
<span class="w-max  font-bold">فرستادن دیدگاه</span>
</button>
</div>
</div>
<!-- <div class="didgah-modal bg-red-700">
خطا: لطفاً زمینه‌های ضروری را پر نمایید.
</div> -->


`;
};

let Secondheadweblags = $.querySelector(".Secondheadweblag");
const Secondheadweblag = () => {
  Secondheadweblags.insertAdjacentHTML(
    "beforeend",
    ` <div class="dark-weblag  text-white  bg-black pt-[80px] text-4xl lg:p-10 p-10  md:text-8xl  block">
    <div class="flex-none w-max m-a m-auto text-center">
    وبلاگ
    <p class="my-2 text-base"> وبلاگ / طراحی داخلی </p>
    </div>
    

       
  </div>`
  );
};

export {Maincomments, Secondheadweblag};
