'use strict'
const mobButton = document.querySelector('.mob-menu-bttn');
const menu = document.querySelector('.mobile-menu');

mobButton.addEventListener('click',(e)=>{
mobButton.classList.toggle('active');
menu.classList.toggle('active');
})
