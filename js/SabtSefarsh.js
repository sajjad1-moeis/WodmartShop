async function AddInput() {
  let api = await fetch("https://657eea449d10ccb465d58032.mockapi.io/AbutMore");
  let arr = await api.json();
  arr.slice(12).forEach((item) => {
    document.querySelector(".TakmilInput").insertAdjacentHTML(
      "beforeend",
      `<div class="my-4">
           <p class="my-2">${item.diration} <span class="text-danger">${item.more}</span></p>
           <input type="text" class="rounded-full w-full form-control p-3" />
         </div>`
    );
  });
  document.querySelector(".loding").classList.add("hidden");
  document.querySelector(".body").classList.remove("hidden");
}
AddInput();

///
let fragment = document.createDocumentFragment();
for (let i = 0; i < 30; i++) {
  let div = document.createElement("div");
  div.className = " h-3 bg-secondary";
  div.setAttribute("style", "width:5px");
  fragment.append(div);
}
document.querySelector(".justify-evenly").append(fragment);

///Create Div Majmoh
function DivMajmoe(local) {
  if (local) {
    let fragment = document.createDocumentFragment();
    local.forEach((item) => {
      let div = document.createElement("div");
      div.className = "flex justify-between border-b-[1px] border-zinc-200 p-5";
      div.innerHTML = `
      <div>${item.title} <span class="text-warning">*</span> ${item.count}</div>
      <div>${item.price.toLocaleString()} تومان</div>
      `;
      fragment.append(div);
    });
    document.querySelector(".mahsolNahaii").append(fragment);
  }
}
let local = JSON.parse(localStorage.getItem("mahsol"));

function Total(arr) {
  if (arr) {
    let sum = arr.reduce((prev, next) => {
      return (prev += next.count * next.price);
    }, 0);
    document.querySelector(".total").innerHTML = `${sum.toLocaleString()}  تومان`;
  }
}
Total(local);
DivMajmoe(local);
