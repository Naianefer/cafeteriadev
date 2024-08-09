// /* Transformando o menu hamburguer em X */
// const menuHamburguer = document.querySelector('.menu-hamburguer');
// menuHamburguer.addEventListener('click', () => {
//     toggleMenu(); 
// });

// function toggleMenu() {
//     const nav = document.querySelector('.navbar-responsive');
//     menuHamburguer.classList.toggle('change');

//     if (menuHamburguer.classList.contains('change')) {
//         nav.style.display = 'block';
//     } else {
//         nav.style.display = 'none';
//     }
// }

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navbarResponsive = document.querySelector('.navbar-responsive');

    menuHamburguer.addEventListener('click', () => {
        console.log('Menu hamburguer clicado'); // Verifica se o clique é registrado
        menuHamburguer.classList.toggle('change');
        navbarResponsive.classList.toggle('show');
    });
});


