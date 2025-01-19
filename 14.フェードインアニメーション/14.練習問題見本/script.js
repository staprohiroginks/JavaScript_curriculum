"use strict";

const target = document.querySelectorAll(".fade-in");

document.addEventListener("scroll", () =>{
    
for (let i = 0; i < target.length; i ++){
        const getDistance = target[i].getBoundingClientRect().top + target[i].clientHeight * 0.5
        if(window.innerHeight > getDistance){
            target[i].classList.add('show');
        }
    }
})