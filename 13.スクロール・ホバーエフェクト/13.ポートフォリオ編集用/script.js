"use strict";
const pageType = document.body.getAttribute('data-page');

// ハンバーガーメニュー
const humburger = document.querySelector(".humburger");
const box = document.querySelector(".box");

humburger.addEventListener("click", () => {
humburger.classList.toggle("open");
box.classList.toggle("open");
});

// ここに自動スクロールのコードを記述

// スライダー
if (pageType === 'index') {
const SliderImages = document.querySelectorAll('.slider-bg img');
let currentIndex = 0;

SliderImages[currentIndex].classList.add('active');

const changeSlide = () => {
    SliderImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % SliderImages.length; 
    SliderImages[currentIndex].classList.add('active');
};
setInterval(changeSlide, 3000);

// ここにホバーエフェクトのコードを記述

}