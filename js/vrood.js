let $ = document;
let flag = true;
let SaveUser = $.querySelector(".SaveUser");
SaveUser.addEventListener("click", () => {
  if (flag) {
    flag = false;
    SaveUser.classList.replace("bg-black", "bg-blue-700");
    SaveUser.style.textAlign = "-webkit-left";
  } else {
    flag = true;
    SaveUser.style.textAlign = "-webkit-right";
    SaveUser.classList.replace("bg-blue-700", "bg-black");
  }
});

let cokie = $.cookie;
let loginText = $.querySelectorAll(".loginText");
let btnSubmit = $.querySelector(".btnSubmit");
let btnLogin = $.querySelector(".btnLogin");
let inputLogin = $.querySelectorAll(".inputLogin");
console.log(inputLogin);
let inputSubmit = $.querySelectorAll(".inputSubmit");
loginText.forEach((btn) => {
  btn.onclick = () => {
    if (btn.className.includes("Submit")) {
      $.querySelector(".DivSubmit").classList.remove("hidden");
      $.querySelector(".DivLogin").classList.add("hidden");
    } else {
      $.querySelector(".DivSubmit").classList.add("hidden");
      $.querySelector(".DivLogin").classList.remove("hidden");
    }
    loginText.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  };
});
btnLogin.addEventListener("click", () => {
  if (inputLogin[0].value && inputLogin[1].value) {
    if (cokie) {
      let cokie = document.cookie.split(";");
      let y = cokie.map((item) => item.slice(item.indexOf("=") + 1));
      console.log(y);
      if (inputLogin[0].value === y[0] && inputLogin[1].value === y[1]) {
        alert("با موفقیت ورود کردید");
        location.href = "../index.html";
      } else {
        $.querySelector(".ElmNotLogin").innerHTML = "نام کاربری یا پسوورد اشتباه است";
      }
    } else {
      $.querySelector(".ElmNotLogin").innerHTML = "ابتدا ثبت نام کنید";
    }
  } else {
    $.querySelector(".ElmNotLogin").innerHTML = "لطفا مقادیر را به درستی وارد کنید";
  }
});
btnSubmit.addEventListener("click", () => {
  if (cokie) {
    $.querySelector(".ElmNotSubmit").innerHTML = "وارد حساب خود شوید";
  } else {
    if (inputSubmit[2].value != inputSubmit[3].value) {
      $.querySelector(".ElmNotSubmit").innerHTML = "لطفا پسوورد رو عین هم تکرار کنید";
    } else if (inputSubmit[0].value && inputSubmit[1].value && inputSubmit[2].value && inputSubmit[3].value) {
      let date = new Date();
      console.log(date.getTime());
      let now = date.setTime(date.getTime() + 20 * 24 * 60 * 60 * 1000);
      $.cookie = `name=${inputSubmit[0].value + inputSubmit[1].value};path=/;expires=${date}`;
      $.cookie = `pass=${inputSubmit[3].value};path=/;expires=${date}`;
      alert("ثبت نام با موفقیت انجام شد");
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }
});

///ShowPass

$.querySelectorAll(".ShowPass").forEach((ShowPassBtn) => {
  ShowPassBtn.addEventListener("click", (e) => {
    let parent = e.target.parentElement;
    let input = parent.querySelector("input");
    if (e.target.src === "http://127.0.0.1:5500/img/eye.png") {
      ShowPassBtn.src = "../img/eye-slash.png";
      input.type = "text";
      console.log();
    } else {
      input.type = "password";
      ShowPassBtn.src = "../img/eye.png";
    }
  });
});
