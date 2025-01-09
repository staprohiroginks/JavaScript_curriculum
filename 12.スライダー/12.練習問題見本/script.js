"use strict";

const SliderImages = document.querySelectorAll('.slider-bg img');
let currentIndex = 0;

SliderImages[currentIndex].classList.add('active');

const nextButton = document.getElementById('nextButton')

nextButton.addEventListener('click',() =>{
    SliderImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % SliderImages.length; 
    SliderImages[currentIndex].classList.add('active');
});
