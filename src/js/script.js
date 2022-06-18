$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        // nav: true,
        // dots: true,
    });
});



const popupBg = document.querySelector(".popup_bg");
const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".open-popup");
const closeBtn = document.querySelector(".close-popup");

openBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
});

closeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e)=>{
    if (e.target === popupBg){
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
