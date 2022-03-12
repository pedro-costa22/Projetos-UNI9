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

arqComum.addEventListener("mouseover", function(){
    arqComum.src = "./images/propriedade_arqueiro1.png";
    arqComum.style.cursor = "pointer";
})

arqComum.addEventListener("mouseout", function(){
    arqComum.src = "./images/arqueiro1.png";
})


const arqRaro = document.getElementById('arqueiro2');

arqRaro.addEventListener("mouseover", function(){
    arqRaro.src = "./images/propriedade_arqueiro2.png";
    arqRaro.style.cursor = "pointer"
})

arqRaro.addEventListener("mouseout", function(){
    arqRaro.src = "./images/arqueiro2.png";
})


const arqEpico = document.getElementById("arqueiro3");

arqEpico.addEventListener("mouseover", function(){
    arqEpico.src = "./images/propriedade_arqueiro3.png";
    arqEpico.style.cursor = "pointer";
})

arqEpico.addEventListener("mouseout", function(){
    arqEpico.src = "./images/arqueiro3.png";
    arqEpico.style.cursor = "pointer";
})


const arqLendario = document.getElementById('arqueiro4');

arqLendario.addEventListener("mouseover", function(){
    arqLendario.src = "./images/propriedade_arqueiro4.png";
    arqLendario.style.cursor = "pointer";
})

arqLendario.addEventListener("mouseout", function(){
    arqLendario.src = "./images/arqueiro4.png";
    arqLendario.style.cursor = "pointer";
})


//Magos

const magoComum = document.getElementById('mago1');

magoComum.addEventListener("mouseover", function(){
    magoComum.src = "./images/propriedade_mago1.png";
    magoComum.style.cursor = "pointer"
})

magoComum.addEventListener("mouseout", function(){
    magoComum.src = "./images/mago1.png";
    magoComum.style.cursor = "pointer";
})


const magoRaro = document.getElementById('mago2');

magoRaro.addEventListener("mouseover", function(){
    magoRaro.src = "./images/propriedade_mago2.png";
    magoRaro.style.cursor = "pointer"
})

magoRaro.addEventListener("mouseout", function(){
    magoRaro.src = "./images/mago2.png";
    magoRaro.style.cursor = "pointer";
})


const magoEpico = document.getElementById('mago3');

magoEpico.addEventListener("mouseover", function(){
    magoEpico.src = "./images/propriedade_mago3.png";
    magoEpico.style.cursor = "pointer";
})

magoEpico.addEventListener("mouseout", function(){
    magoEpico.src = "./images/mago3.png";
    magoEpico.style.cursor = "pointer";
})


const magoLendario = document.getElementById("mago4");

magoLendario.addEventListener("mouseover", function(){
    magoLendario.src = "./images/propriedade_mago4.png";
    magoLendario.style.cursor = "pointer";
})

magoLendario.addEventListener("mouseout", function(){
    magoLendario.src = "./images/mago4.png";
    magoLendario.style.cursor = "pointer";
})
















