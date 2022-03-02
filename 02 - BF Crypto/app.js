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




//Propriedade personagens

//guerreiros
const guerComum = document.getElementById('guerreiro1');

guerComum.addEventListener("mouseover", function(){
    guerComum.src = "./images/propriedade_guerreiro1.png";
    guerComum.style.cursor = "pointer"
})

guerComum.addEventListener("mouseout", function(){
    guerComum.src = "./images/guerreiro1.png";
    guerComum.style.cursor = "pointer"
})


const guerRaro = document.getElementById('guerreiro2');

guerRaro.addEventListener("mouseover", function(){
    guerRaro.src = "./images/propriedade_guerreiro2.png";
    guerRaro.style.cursor = "pointer"
})

guerRaro.addEventListener("mouseout", function(){
    guerRaro.src = "./images/guerreiro2.png";
    guerRaro.style.cursor = "pointer";
})


const guerEpico = document.getElementById('guerreiro3');

guerEpico.addEventListener("mouseover", function(){
    guerEpico.src = "./images/propriedade_guerreiro3.png";
    guerEpico.style.cursor = "pointer";
})

guerEpico.addEventListener("mouseout", function(){
    guerEpico.src = "./images/guerreiro3.png";
    guerEpico.style.cursor = "pointer"
})


const guerLendario = document.getElementById('guerreiro4');

guerLendario.addEventListener("mouseover", function(){
    guerLendario.src = "./images/propriedade_guerreiro4.png";
    guerLendario.style.cursor = "pointer";
    
})

guerLendario.addEventListener("mouseout", function(){
    guerLendario.src = "./images/guerreiro4.png";
    guerLendario.style.cursor = "pointer";
    
})

//Arqueiros
const arqComum = document.getElementById('arqueiro1');
















