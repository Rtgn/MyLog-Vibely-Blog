/*Yapıskan Menü */

        $(window).scroll(function () {
    if ($(window).scrollTop()) {
        $("#nav-bar").addClass("stick");
    
    }
    else {
        $("#nav-bar").removeClass("stick")
    }
});

/* Hamburger Menu */

var menuAc=document.querySelector(".hamburger-menu");
var menu=document.querySelector("#hamb-menu");
var kapatBtn=document.querySelector(".kapatBtn");


menuAc.addEventListener("click",function(){
    menu.style.left="0vw"; 
 });
 kapatBtn.addEventListener("click",function(){
    menu.style.left="-100vw"; 
});


