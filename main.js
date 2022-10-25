const barButton = document.getElementById("bar");
const navList = document.getElementById("navbar");

function toggleMenu(){
    navList.classList.toggle("show");
}
barButton.addEventListener("click", toggleMenu)




/* let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}); */