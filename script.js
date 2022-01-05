var menu = document.querySelector('#nav-menu');
var navbar = document.querySelector('.nav-list');
var i = 0;

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
    i += 1;
    if (i % 2 == 1) {
        navbar.style.left = '0';
    } else {
        navbar.style.left = '-100%';
    }
}

function CloseMenu() {
    navbar.style.left = '-100%';
    dark.style.right = '-100%';
    menu.classList.remove('fa-times');
    menu.classList.add('fa-bars');
    i = 0;
}

var item = document.getElementsByClassName('sec-1__nav-item');
for (var k = 0; k < item.length; k++) {
    item[k].addEventListener('click', CloseMenu, false);
}

/* To top - Script */

var backtop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backtop.classList.add("active");
    } else {
        backtop.classList.remove("active");
    }
})

/* Darkmode - Script */


var checkbox = document.getElementById('toggle');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

var dark = document.querySelector('#darkmode-btn');
dark.onclick = () => {
    dark.classList.toggle('fa-moon-o');
    document.body.classList.toggle('dark-theme');
};

/* Typer - Script/* */

var typed = new Typed(".sec-2__input", {
    strings: ["Jinun20th", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});


/* CounterUp - Script */


$(document).ready(function() {
    $('span.counter').counterUp({
        delay: 10,
        time: 800,
    });
});


/* Animate On Scroll - Script */


AOS.init({
    disable: 'mobile',
    easing: 'ease-out-back',
    offset: 100,
    duration: 800,
});


/* Start of Tawk.to Scrip */


var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/61c838e6c82c976b71c38d28/1fnr1si3c';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();


/* End of Tawk.to Scrip */

/* Swiper */


var swiper = new Swiper(".sec-6__slider", {
    spaceBetween: 50,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});


var swiper = new Swiper(".sec-8__slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});