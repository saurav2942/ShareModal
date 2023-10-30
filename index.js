"use strict";

let share = document.querySelector(".link-1");
let message = document.querySelector(".message");
let follow = document.querySelector(".link-2");

share.addEventListener("click", (e) => {
  let link = "http://127.0.0.1:5500/01DOM/Share%20Modal/index.html";
  navigator.clipboard.writeText(link);
  message.classList.add("animate");
  console.log(message);
  setTimeout(() => {
    message.classList.remove("animate");
    console.log(message);
  }, 2000);
});
