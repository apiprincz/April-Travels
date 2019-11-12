let togglerIcon = document.querySelectorAll("img.header__column--toggler");
let togglerMenu = document.querySelector(".header__menu");
let modalCloseIcon = document.querySelectorAll(".header__menu--close");
let bgInactive = document.querySelector(".bg__inactive");

for (let i = 0; i < togglerIcon.length; i++) {
    
    togglerIcon[i].addEventListener("click", function () {
        

        togglerMenu.classList.add("header__menu--show");
        bgInactive.classList.add("bg__active");
        
    })
    
}

for (let x = 0; x < modalCloseIcon.length; x++) {
    
    
    modalCloseIcon[x].addEventListener("click", function () {
        
        togglerMenu.classList.remove("header__menu--show");
        bgInactive.classList.remove("bg__active");


    })
    
}
bgInactive.addEventListener("click", function () {
    togglerMenu.classList.remove("header__menu--show");
    bgInactive.classList.remove("bg__active");
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        loop:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    
  });