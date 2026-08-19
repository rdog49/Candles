const menuBtn = document.querySelector('.menu__btn');
const menumobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=> {
    menumobile.classList.toggle('menu--open');
});

const swiperOne  = new Swiper('.feedback__slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});