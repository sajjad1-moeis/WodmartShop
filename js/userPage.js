let cookie = document.cookie.split(";");
let arrCookie = [];
cookie.forEach((item) => {
  let index = item.indexOf("=");
  arrCookie.push(item.slice(index + 1));
});
let pElm = document.querySelectorAll(".setCookei");
pElm[0].innerHTML = arrCookie[0];
pElm[1].innerHTML = arrCookie[1];

document.querySelector(".logOut").onclick = () => {
  let date = new Date();
  console.log(date.getTime());
  let now = date.setTime(date.getTime() - 20 * 24 * 60 * 60 * 1000);
  document.cookie = `name=${arrCookie[0]};path=/;expires=${date}`;
  document.cookie = `family=${arrCookie[1]};path=/;expires=${date}`;
  document.cookie = `pass=${arrCookie[2]};path=/;expires=${date}`;
  setTimeout(() => {
    location.href = "../index.html";
  }, 500);
};
