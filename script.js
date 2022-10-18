const showYear = new Date();
document.getElementById('footer_date').innerHTML = showYear.getFullYear();

const menuTarget = document.getElementById('target');
const menu = document.querySelector('.main-menu');

menuTarget.addEventListener('click', ()=>{
    menu.classList.toggle('isActive');
});