const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const body = document.querySelector('.body');

menu.addEventListener('click', () => {
  menu.classList.add('menu--hide');
  close.classList.add('close--show');
  nav.classList.add('nav--visible');
  body.classList.add('body--no-scroll');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu--hide');
  close.classList.remove('close--show');
  nav.classList.remove('nav--visible');
  body.classList.remove('body--no-scroll');
});
