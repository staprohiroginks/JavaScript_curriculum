"use strict";

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
