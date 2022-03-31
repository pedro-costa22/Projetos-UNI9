let cont = 1;
let id = document.querySelector("#radio1").checked = true;
const btnNext = document.querySelector("#btn-next");
const btnBack = document.querySelector("#btn-back");

setInterval(() =>{
   nextSlide()
}, 10000)

function nextSlide(){
    cont++;
    
    if(cont > 3) {
        cont = 1;
    }
    id = document.querySelector("#radio" + cont).checked = true;
}

btnNext.addEventListener("click", nextSlide);

btnBack.addEventListener("click",  () =>{
    cont--;

    if(cont > 3) {
        cont = 1;

    } if (cont < 1) {
        cont = 3;
    }

    id = document.querySelector("#radio" + cont).checked = true;
})