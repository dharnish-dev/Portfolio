const menu = document.querySelector('#menu');
const ul = document.querySelector('.menu-ul');

// Hamburger Menu Toggle
menu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    ul.classList.toggle('show-ul');
});