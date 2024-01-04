let $ = document;

const FoterSite = (dot) => {
  document.querySelector(".body").insertAdjacentHTML(
    "beforeend",
    `
    <footer>
        <section class="footer bg-darkBlue relative pb-5 mt-14" data-aos="fade-up">
          <div class="border border-b-gray-700 border-darkBlue" data-aos="fade-up">
            <div class="Adventages pb-4 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 footersbig gap-5 container max-w-[1213px] w-full relative">
              <Free-Footer img="${dot}./img/free-send.png" post="ارسال رایگان" city="ارسال رایگان در تهران"> </Free-Footer>
              <Free-Footer img="${dot}./img/support.png" post="پشتیبانی 24 ساعته" city="پشتیبانی به صورت مادام العمر"> </Free-Footer>
              <Free-Footer img="${dot}./img/online-pay.png" post="پرداخت آنلاین" city="دارای درگاه های بانکی"> </Free-Footer>
              <Free-Footer img="${dot}./img/fast-receive.png" post="تحویل سریع" city="ارسال به سراسر کشور"> </Free-Footer>
            </div>
          </div>
          <div class="border border-b-gray-700 border-darkBlue" data-aos="fade-up">
            <div class="footers-texts py-8 pb-14 grid grid-cols-2 md:grid-cols-6 gap-5 container max-w-[1213px] w-full relative">
              <div class="apllication col-span-2">
                <span class="text-white block my-3.5" style="font-size: 15px">اپلیکیشن وبسایت</span>
                <div class="apps gap-5 ms-3.5 grid grid-cols-2">
                  <img src="${dot}./img/apple store.png" alt="" />
                  <img src="${dot}./img/google play.png" alt="" />
                </div>
                <div class="text-apps">
                  <span class="text-white block my-3.5" style="font-size: 16.3px">در خبرنامه ما ثبت نام کنید</span>
                  <span class="text-gray-500 block my-3.5" style="font-size: 16.3px">اولین نفری باشید که از تحفیف های ما با خبر میشود</span>
                </div>
              </div>
            </div>
          </div>
          <div class="border border-darkBlue border-b-gray-700 py-5" data-aos="fade-up">
            <div class="text-white tools-icons grid grid-cols-2 md:grid-cols-3 gap-5 container max-w-[1211px] w-full relative my-2 pb-[60px]">
              <div>
                <div class="text-base">پیوندهای اجتماعی ما</div>
                <div class="flex gap-1.5 my-3">
                  <img-foter img="${dot}./img/instagram.png" bg="#37AEE2"></img-foter>
                  <img-foter img="${dot}./img/telegram.png" bg="#37AEE2"></img-foter>
                  <img-foter img="${dot}./img/pinterest.png" bg="#CB2027"></img-foter>
                  <img-foter img="${dot}./img/twiiter.png" bg="#3CF"></img-foter>
                  <img-foter img="${dot}./img/facebook.png" bg="#365493"></img-foter>
                </div>
              </div>
              <div>
                <div class="text-base">سیستم ارسال محصول</div>
                <div class="my-4">
                  <img src=".${dot}/img/shipping-290x24-1.png" alt="" />
                </div>
              </div>
              <div>
                <div class="text-base">سیستم پرداخت</div>
                <div class="my-4">
                  <img src="${dot}./img/payment-290x23-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="akharin-text text-white text-center pt-4" >
            <small class="" style="font-size: 12px">
              تمامی حقوق این قالب <i class="fa fa-copyright"></i> برای طراح <small class="text-danger" style="font-size: 12px">محفوظ است</small> ارائه شده در
              وبسایت راستچین
            </small>
          </div>
        </section>
      </footer>
    `
  );
  const textsfootersarray = [
    //step1
    { a: "برگه", b: "سوالات متداول", c: "تیم ما", d: "اسلایدر ها", e: "نظرات مشتریان", f: "اینستاگرام", g: "نمونه کارها" },
    { a: "لینک های مفید", b: "فروشگاه", c: "سبد خرید", d: "تماس با ما", e: "برگه ها", f: "وبلاگ", g: "المان ها " },
    { a: "فروشگاه های ما", b: "تهران", c: "اصفهان", d: "  شیراز", e: " مشهد", f: " کرج ", g: " شهرکرد" },
    { a: " لینک های ضروری", b: " حفظ حریم خصوصی", c: " بازگشت وجه ", d: " شرایط و ضوابط", e: " تماس با ما", f: " اخبار اخیر", g: " نقشه سایت" },
  ];
  let apliidiv = $.querySelector(".apllication");
  const footertexts = (parentDiv6, sliceitem7) => {
    let swiperfragment6 = document.createDocumentFragment();
    textsfootersarray.forEach((element) => {
      let wraperfargment6 = document.createElement("div");
      //wraperfargment5.setAttribute("style", "width:max-content");
      wraperfargment6.innerHTML = `
      <div class="col-span-1 text-sm text-zinc-400 ">
        <p class="font-bold text-white block my-3.5">${element.a}</p>
        <p class="my-3.5>${element.b}</p>
        <p class="my-3.5>${element.c}</p>
        <p class="my-3.5>${element.d}</p>
        <p class="my-3.5>${element.e}</p>
        <p class="my-3.5>${element.f}</p>
        <p class="my-3.5>${element.g}</p>
      </div>  
  `;
      swiperfragment6.append(wraperfargment6);
    });
    parentDiv6.append(swiperfragment6, apliidiv);
  };

  footertexts(document.querySelector(".footers-texts"), textsfootersarray);
};

export { FoterSite };
