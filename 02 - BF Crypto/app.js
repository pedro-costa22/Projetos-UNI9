//Inicio Texto animado
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
}

const menu = document.querySelector(".checkbtn");
menu.addEventListener("click", responsiveMenu);


//Interações BF Coins
function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth"});
}

document.querySelector("#bfcoins").addEventListener("click", function(event){
    event.preventDefault();

    scrollTo("#container_txt");
}) 


//animation 
const animate = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animationScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    animate.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })
}

if(animate.length){
    window.addEventListener('scroll', animationScroll)
}









