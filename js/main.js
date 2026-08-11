const menuBtn = document.querySelector('.menu__btn');
const menumobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=> {
    menumobile.classList.toggle('menu--open');
});