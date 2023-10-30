"use strict";

let share = document.querySelector(".link-1");
let message = document.querySelector(".message");
let follow = document.querySelector(".link-2");

share.addEventListener("click", (e) => {
  let link = "https://sauravmathuriya.netlify.app/";
  navigator.clipboard.writeText(link);
  message.classList.add("animate");
  console.log(message);
  setTimeout(() => {
    message.classList.remove("animate");
    console.log(message);
  }, 2000);
});
