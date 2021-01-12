const nav = document.querySelector('.links');
const burger = document.querySelector('.burger-btn');
const navLinks = document.querySelectorAll('.__item');

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