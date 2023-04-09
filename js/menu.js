window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
});

const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#activo');

iconoMenu.addEventListener('click', (e) => {

        menu.classList.toggle('MenuActivo');
    });