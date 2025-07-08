let nav_btn = document.querySelector(".navBtn");
let mobile_navigation = document.querySelector(".mobile-nav");
let mobile_navig_bg = document.querySelector(".bg-monav");
let bool = false;

nav_btn.addEventListener("click" , function(){
    let navBtnImg = document.querySelector(".btn-img");
    if(bool == false){
        mobile_navigation.style.display = "block";
        mobile_navig_bg.style.display = "block";
        navBtnImg.src = "./images/icon-close.svg";
        bool = true;
    }
    else{
        mobile_navigation.style.display = "none";
        mobile_navig_bg.style.display = "none";
        navBtnImg.src = "./images/icon-hamburger.svg";
        bool = false;
    }
});