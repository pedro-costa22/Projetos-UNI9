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



//--------------------- Ask ---------------------//
let btnAsk = document.querySelectorAll(".quest");
let answer = document.querySelectorAll(".answer");
let iconAsk = document.querySelectorAll(".iconAsk");
let imgQuest = document.querySelector(".img-quest");

/*
btnAsk[0].addEventListener("click", () =>{
     answer[0].classList.add("open-answer");
     iconAsk[0].style.display = "none" 
}); 
    
answer[0].addEventListener("click", () =>{
    answer[0].classList.remove("open-answer");
     iconAsk[0].style.display = "block" 
});  */

btnAsk.forEach((ask) =>{
    ask.addEventListener("click", () =>{

        switch(ask) {
            case btnAsk[0]:
                answer[0].classList.add("open-answer");
                iconAsk[0].style.display = "none";
                imgQuest.src = "./images/moeda.svg";
                break;

            case btnAsk[1]:
                answer[1].classList.add("open-answer");
                iconAsk[1].style.display = "none";
                imgQuest.src = "./images/saque.svg";
                break;

            case btnAsk[2]:
                answer[2].classList.add("open-answer");
                iconAsk[2].style.display = "none";
                imgQuest.src = "./images/lancamento.svg";
                break;

            case btnAsk[3]:
                answer[3].classList.add("open-answer");
                iconAsk[3].style.display = "none";
                imgQuest.src = "./images/gaming.svg";
                break;
        }
    })
})

answer.forEach((resp) =>{
    resp.addEventListener("click", () =>{

        switch(resp){
            case answer[0]:
                answer[0].classList.remove("open-answer");
                iconAsk[0].style.display = "block";
                imgQuest.src = "./images/questDefault.svg";
                break;
            
            case answer[1]:
                answer[1].classList.remove("open-answer");
                iconAsk[1].style.display = "block";
                imgQuest.src = "./images/questDefault.svg";
                break;

            case answer[2]:
                answer[2].classList.remove("open-answer");
                iconAsk[2].style.display = "block";
                imgQuest.src = "./images/questDefault.svg";
                break;

            case answer[3]:
                answer[3].classList.remove("open-answer");
                iconAsk[3].style.display = "block";
                imgQuest.src = "./images/questDefault.svg";
                break;
        }
    })
})





























 






