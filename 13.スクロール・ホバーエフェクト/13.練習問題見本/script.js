"use strict";

const images = document.querySelectorAll('.images img');
console.log(images);

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', () => {
    images[i].classList.add('hovered'); 
    });

    images[i].addEventListener('mouseout', () => {
    images[i].classList.remove('hovered');
    });
}