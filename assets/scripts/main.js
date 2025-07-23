// ===SHOW MENU===

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// -MENU SHOW-
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// -MENU HIDDEN-
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// ===REMOVE MENU MOBILE===
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Quando clicar em cada nav__link, remove a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click', linkAction))


//===CHANGE BACKGROUND HEADER===
function scrollHeader() {
    const header = document.getElementById('header');
    // Quando o scroll for maior que 100vh (100% viewport height), adiciona a class scroll-header à tag header
    if(this.scrollY >- 100) header.classList 
}


// ===SCROLL SECTIONS ACTIVE LINK===

// ===SCROLL REVEAL ANIMATION===