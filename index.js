burger = document.querySelector(".burger");
navbar = document.querySelector("#nav-bar");
navbarHeight = document.querySelector(".nav-height");



burger.addEventListener("click", ()=>{
    navbar.classList.toggle("v-resp");
    navbarHeight.classList.toggle("h-resp");
    

})