// ===SHOW MENU===

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// -MENU SHOW-
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// -MENU HIDDEN-
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
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
navLink.forEach(n => n.addEventListener('click', linkAction))


//===CHANGE BACKGROUND HEADER===
function scrollHeader() {
    const header = document.getElementById('header');
    // Quando o scroll for maior que 50vh (50% viewport height), adiciona a class scroll-header à tag header
    if (this.scrollY > 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ===SHOW SCROLL UP===
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // Quando o scroll for maior que 200vh, adiciona a classe show-scroll à tag com a classe scroll-top
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ===SCROLL SECTIONS ACTIVE LINK===
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ===SCROLL REVEAL ANIMATION===

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset: true
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home__footer`, {delay: 700})
sr.reveal(`.home__img`, {delay: 900})

sr.reveal(`.sponsor__img, .products__card, .footer_logo, .footer__content, .footer__copy`,{origin:'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin:'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin:'right' })
sr.reveal(`.case__img`,{origin:'top'})
sr.reveal(`.case__data`)