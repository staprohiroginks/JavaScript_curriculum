"use strict";
const pageType = document.body.getAttribute('data-page');

// ハンバーガーメニュー
const humburger = document.querySelector(".humburger");
const box = document.querySelector(".box");

humburger.addEventListener("click", () => {
humburger.classList.toggle("open");
box.classList.toggle("open");
});

// 自動スクロール
const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 画像スライダー
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

// ホバーしたら画像が大きくなる
const images = document.querySelectorAll('.course_img img');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', () => {
    images[i].classList.add('hovered'); 
    });

    images[i].addEventListener('mouseout', () => {
    images[i].classList.remove('hovered');
    });
}

// フェードインアニメーション
const target = document.querySelectorAll(".fade-in");

document.addEventListener("scroll", () =>{
    
for (let i = 0; i < target.length; i ++){
        const getDistance = target[i].getBoundingClientRect().top + target[i].clientHeight * 0.5
        if(window.innerHeight > getDistance){
            target[i].classList.add('show');
        }
    }
})
}

// モーダルウィンドウ
if (pageType === 'learning') {
    const images = document.querySelectorAll('.clickable');
    const modal = document.querySelector('.modal');
    const modalImage = modal.querySelector('.modal-content');
    
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', () => {
            modalImage.src = images[i].src; 
            modal.showModal();             
        });
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modalImage.src = ''; 
            modal.close();       
        }
    });
}
