const nav = document.querySelector('.menu-items-list');
const burger = document.querySelector('.burger-button');
const navLinks = document.querySelectorAll('.--item');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        burger.classList.toggle('toggle');
    })
})