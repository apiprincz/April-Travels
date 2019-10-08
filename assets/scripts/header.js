let togglerIcon = document.querySelectorAll("img.header__column--toggler");
let togglerMenu = document.querySelector(".header__menu");
let modalCloseIcon = document.querySelectorAll(".header__menu--close")

for (let i = 0; i < togglerIcon.length; i++) {
    
    togglerIcon[i].addEventListener("click", function () {
        
        togglerMenu.classList.add("header__menu--show");
        
    })
    
}

for (let x = 0; x < modalCloseIcon.length; x++) {
    
    
    modalCloseIcon[x].addEventListener("click", function () {
        
        togglerMenu.classList.remove("header__menu--show")

    })
    
}
