var menu = document.querySelector('#nav-menu');
var narbar = document.querySelector('.nav-list');
var dark = document.querySelector('.darkmode-switch');
var background = document.querySelector('.nav-container');
var overlay = document.querySelector('.overlay');
var i = 0;


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
    i += 1;
    if (i % 2 == 1) {
        narbar.style.right = '0em';
        dark.style.right = '0em';
        background.style.right = '0px';
        overlay.style.display = 'block';
    } else {
        narbar.style.right = "-10em";
        dark.style.right = '-10em';
        background.style.right = '-10em';
        overlay.style.display = 'none';
    }
}

overlay.onclick = () => {
    narbar.style.right = "-10em";
    dark.style.right = '-10em';
    background.style.right = '-10em';
    overlay.style.display = 'none';
    menu.classList.remove('fa-times');
    menu.classList.add('fa-bars');
    i += 1;
}