const showYear = new Date();
document.getElementById('footer_date').innerHTML = showYear.getFullYear();

const menuTarget = document.getElementById('target');
const menu = document.querySelector('.main-menu');

menuTarget.addEventListener('click', ()=>{
    menu.classList.toggle('isActive');
});

const closeTarget = document.getElementById('close');
const menuMobile = document.getElementById('targetMobile');
const mobileMenu = document.querySelector('.main-menu__mobile');

menuMobile.addEventListener('click', ()=>{
    mobileMenu.classList.add('isActiveMobile');
});

closeTarget.addEventListener('click', ()=>{
    mobileMenu.classList.remove('isActiveMobile');
})