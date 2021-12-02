const burger = document.querySelector(".burger");
const navbar = document.querySelector("#nav-bar");
const navbarHeight = document.querySelector(".nav-height");



burger.addEventListener("click", ()=>{
    navbar.classList.toggle("v-resp");
    navbarHeight.classList.toggle("h-resp");
    

})

