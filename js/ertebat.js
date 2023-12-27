let $ = document;
let ertebatDiv = document.querySelectorAll(".collapse1");
console.log(ertebatDiv);
document.querySelector(".sabtNazar").onclick = () => {
  alert("پیغام شما با موفقیت ثبت شد :)");

  location.reload();
  window.scrollTo(0, 0);
};
