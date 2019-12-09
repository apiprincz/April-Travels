
let togglerIcon = document.querySelectorAll("img.header__column--toggler");
let togglerMenu = document.querySelector(".header__menu");
let modalCloseIcon = document.querySelectorAll(".header__menu--close");
let bgInactive = document.querySelector(".bg__inactive");

for (let i = 0; i < togglerIcon.length; i++) {
    
    togglerIcon[i].addEventListener("click", function () {
        
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
    $(".owlslides").owlCarousel({
        autoplay:true,
        autoplayTimeout:5000,
        loop:true,
        items: 6,
        responsive:{
            0:{
                items:2
            },
            500:{
                items:2
            },
            768:{
                items:3
            }
        }
    });
    
  });

