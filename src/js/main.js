
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const header = document?.querySelector('.header');
const navItem = document?.querySelectorAll('.nav-item');
const body = document?.body;
const headerHeight = header.offsetHeight;
console.log(headerHeight);

document.querySelector('html').style.setProperty('--header-height',headerHeight +'px');





burger?.addEventListener('click', () =>{
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--close');
    nav.classList.toggle('nav--visible');
    
});

navItem.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger.classList.remove('burger--close');
        nav.classList.remove('nav--visible');
    })
})