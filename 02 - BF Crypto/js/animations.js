//--------------------- Inicio Texto animado --------------------- //
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() =>
            elemento.innerHTML += letra, 75 * i)
    })
}

const titulo = document.querySelector('h1');
typeWriter(titulo) 


//Navbar - -Menu responsivo
function responsiveMenu(){
    const menuItem = document.querySelector("#menu");
    menuItem.classList.toggle("open");
    
    

    window.onscroll = () => {
        menuItem.classList.remove("open")
    }
}

const menu = document.querySelector(".checkbtn");
menu.addEventListener("click", responsiveMenu);



// -------------- Scroll Suave animation --------------------- //
const menuList = document.querySelectorAll('#menu a[href^="#"]');

menuList.forEach(item =>{
    item.addEventListener("click", scrollToId)
})

function scrollToId(event){
    event.preventDefault();
    const to = scrollPosition(event.target) - 30;

    scrollToAnimation(to)
}

function scrollPosition(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToAnimation(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}


//--------------------- Animation items ---------------------//
const animate = document.querySelectorAll('[data-anime]');
const animate2 = document.querySelectorAll('[data-bfcoins]');
const animationClass = 'animate';

function animationScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    animate.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    animate2.forEach(function(test){
        if((windowTop) > test.offsetTop) {
            test.classList.add(animationClass)
        }
    })

}

if(animate.length){
    window.addEventListener('scroll', animationScroll)
}


//--------------------- Navbar fixed ---------------------//

window.addEventListener("scroll", () =>{
    const navbar = document.querySelector("#home");
    const containerBfc = document.querySelector("#container_bfc").offsetTop;
    let alturaScrollSite = window.pageYOffset;

    if(alturaScrollSite >= containerBfc){
        navbar.classList.add('navbarFixed')

    } else {
        navbar.classList.remove('navbarFixed')
    }
 
})





















 






