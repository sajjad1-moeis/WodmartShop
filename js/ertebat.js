let $ = document;
let ertebatDiv = document.querySelectorAll(".collapse1");
document.querySelector(".sabtNazar").onclick = () => {
  alert("پیغام شما با موفقیت ثبت شد :)");

  location.reload();
  window.scrollTo(0, 0);
};
const ShowAcordian = (div) => {
  let sum = 0;
  let height = div.querySelector(".content").scrollHeight;
  document.querySelectorAll(".content").forEach((div) => (div.style.cssText = "height:0px;margin:0"));
  div.querySelector(".content").style.cssText = `height:${height}px;margin:20px 0`;
};

$.querySelectorAll(".colapse2").forEach((btn) => {
  btn.onclick = () => {
    ShowAcordian(btn);
  };
});
