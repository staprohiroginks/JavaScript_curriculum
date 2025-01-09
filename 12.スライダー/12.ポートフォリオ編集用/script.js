"use strict";

// ハンバーガーメニュー
const humburger = document.querySelector(".humburger");
const box = document.querySelector(".box");

humburger.addEventListener("click", () => {
humburger.classList.toggle("open");
box.classList.toggle("open");
});