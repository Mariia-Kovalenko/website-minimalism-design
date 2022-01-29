"use strict";

const burgerButton = document.querySelector('.burger__button');
const menu = document.querySelector('.menu__list');


burgerButton.addEventListener('click', () => {
    if (!burgerButton.classList.contains('active')){
        burgerButton.classList.add('active');
        document.body.style.overflow = "hidden";
        menu.classList.add('slide');
    } else{
        burgerButton.classList.remove('active');
        document.body.style.overflow = "";
        menu.classList.remove('slide');
    }
});
