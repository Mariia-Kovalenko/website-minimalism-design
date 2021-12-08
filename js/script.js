"use strict";

const burgerButton = document.querySelector('.burger__button');
const menu = document.querySelector('.menu__list');


burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    menu.classList.toggle('slide');
});
