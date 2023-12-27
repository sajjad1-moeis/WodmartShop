let $ = document;
let ertebatDiv = document.querySelectorAll(".collapse1");
document.querySelector(".sabtNazar").onclick = () => {
  alert("پیغام شما با موفقیت ثبت شد :)");

  location.reload();
  window.scrollTo(0, 0);
};

let divS = document.querySelectorAll(".colapse2");
divS.forEach((div) => {
  div.onclick = () => {
    if (div.className.includes("active1")) {
      div.classList.remove("active1");
      div.classList.replace("h-max", "h-[77px]");
    } else {
      div.classList.add("active1");
      div.classList.replace("h-[77px]", "h-max");
    }
  };
});
