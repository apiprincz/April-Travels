let descTabs = document.querySelectorAll(".description__menu--container-inner-home-tab-link");

let descontent = document.querySelectorAll(".description__menu--container-inner-home-content-text");

// let topHeader = document.querySelector(".header__top--fixed");

for (let i = 0; i < descTabs.length; i++) {
    
    descTabs[i].addEventListener("click", function (e) {
        e.preventDefault();

        for (let x = 0; x < descontent.length; x++) {
            
        descontent[x].classList.remove("description__menu--container-inner-home-content-text-active");
        descTabs[x].classList.remove("description__menu--container-inner-home-tab-link-current");
            
        }
        descontent[i].classList.add("description__menu--container-inner-home-content-text-active");
        descTabs[i].classList.add("description__menu--container-inner-home-tab-link-current");

    })
    
}


$(".js__description").waypoint(function (direction) {
    if (direction == "down") {
        $('.header__top--fixed').addClass ('js__nav--show')
    } else {
        $('.header__top--fixed').removeClass ('js__nav--show')
        
    }
})
