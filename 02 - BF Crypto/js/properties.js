//--------------------- Clique p/ ver propriedades ---------------------// 
const personImages = document.querySelectorAll('[data-textImg]');
const legendText = document.querySelectorAll('.legend-img');
const btnExit = document.querySelectorAll('.btn-exit');
const legendOver = 'legend-img-over';



personImages.forEach((imgText) =>{
    imgText.addEventListener('mouseover', () =>{

        switch (imgText) {
            case personImages[0]:
                legendText[0].classList.toggle(legendOver);
                break;
            
            case personImages[1]:
                legendText[1].classList.toggle(legendOver);
                break;

            case personImages[2]:
                legendText[2].classList.toggle(legendOver);
                break;
            
            case personImages[3]:
                legendText[3].classList.toggle(legendOver);
                break;

            case personImages[4]:
                legendText[4].classList.toggle(legendOver);
                break;

            case personImages[5]:
                legendText[5].classList.toggle(legendOver);
                break;

            case personImages[6]:
                legendText[6].classList.toggle(legendOver);
                break;

            case personImages[7]:
                legendText[7].classList.toggle(legendOver);
                break;

            case personImages[8]:
                legendText[8].classList.toggle(legendOver);
                break;

            case personImages[9]:
                legendText[9].classList.toggle(legendOver);
                break;

            case personImages[10]:
                legendText[10].classList.toggle(legendOver);
                break;

            case personImages[11]:
                legendText[11].classList.toggle(legendOver);
                break;

            default:
                legendText.classList.remove(legendOver);
        }
    
    })

    imgText.addEventListener('mouseout', () =>{

        switch (imgText) {
            case personImages[0]:
                legendText[0].classList.remove(legendOver);
                break;
            
            case personImages[1]:
                legendText[1].classList.remove(legendOver);
                break;

            case personImages[2]:
                legendText[2].classList.remove(legendOver);
                break;
            
            case personImages[3]:
                legendText[3].classList.remove(legendOver);
                break;

            case personImages[4]:
                legendText[4].classList.remove(legendOver);
                break;

            case personImages[5]:
                legendText[5].classList.remove(legendOver);
                break;

            case personImages[6]:
                legendText[6].classList.remove(legendOver);
                break;

            case personImages[7]:
                legendText[7].classList.remove(legendOver);
                break;

            case personImages[8]:
                legendText[8].classList.remove(legendOver);
                break;

            case personImages[9]:
                legendText[9].classList.remove(legendOver);
                break;

            case personImages[10]:
                legendText[10].classList.remove(legendOver);
                break;

            case personImages[11]:
                legendText[11].classList.remove(legendOver);
                break;

            default:
                legendText.classList.remove(legendOver);
        }
    })
}) 


personImages.forEach((imgPerson) =>{
    imgPerson.addEventListener("click", () => {

        switch(imgPerson) {
            case personImages[0]:
                 personImages[0].src = "./images/propriedade_guerreiro1.png";
                 legendText[0].classList.remove(legendOver)
                 legendText[0].classList.add('opacity');
                 btnExit[0].classList.add('btn-exitAtivo')
                 break;

            case personImages[1]:
                 personImages[1].src = "./images/propriedade_guerreiro2.png";
                 legendText[1].classList.remove(legendOver);
                 legendText[1].classList.add('opacity');
                 btnExit[1].classList.add('btn-exitAtivo')
                 break;

            case personImages[2]:
                 personImages[2].src = "./images/propriedade_guerreiro3.png";
                 legendText[2].classList.remove(legendOver);
                 legendText[2].classList.add('opacity');
                 btnExit[2].classList.add('btn-exitAtivo')
                 break;

            case personImages[3]:
                 personImages[3].src = "./images/propriedade_guerreiro4.png";
                 legendText[3].classList.remove(legendOver);
                 legendText[3].classList.add('opacity');
                 btnExit[3].classList.add('btn-exitAtivo')
                 break;

            case personImages[4]:
                 personImages[4].src = "./images/propriedade_arqueiro1.png";
                 legendText[4].classList.remove(legendOver);
                 legendText[4].classList.add('opacity');
                 btnExit[4].classList.add('btn-exitAtivo')
                 break;

            case personImages[5]:
                 personImages[5].src = "./images/propriedade_arqueiro2.png";
                 legendText[5].classList.remove(legendOver);
                 legendText[5].classList.add('opacity');
                 btnExit[5].classList.add('btn-exitAtivo')
                 break;

            case personImages[6]:
                 personImages[6].src = "./images/propriedade_arqueiro3.png";
                 legendText[6].classList.remove(legendOver);
                 legendText[6].classList.add('opacity');
                 btnExit[6].classList.add('btn-exitAtivo')
                 break;

            case personImages[7]:
                 personImages[7].src = "./images/propriedade_arqueiro4.png";
                 legendText[7].classList.remove(legendOver);
                 legendText[7].classList.add('opacity');
                 btnExit[7].classList.add('btn-exitAtivo')
                 break;

            case personImages[8]:
                 personImages[8].src = "./images/propriedade_mago1.png";
                 legendText[8].classList.remove(legendOver);
                 legendText[8].classList.add('opacity');
                 btnExit[8].classList.add('btn-exitAtivo')
                 break;

            case personImages[9]:
                 personImages[9].src = "./images/propriedade_mago2.png";
                 legendText[9].classList.remove(legendOver);
                 legendText[9].classList.add('opacity');
                 btnExit[9].classList.add('btn-exitAtivo')
                 break;

            case personImages[10]:
                 personImages[10].src = "./images/propriedade_mago3.png";
                 legendText[10].classList.remove(legendOver);
                 legendText[10].classList.add('opacity');
                 btnExit[10].classList.add('btn-exitAtivo')
                 break;

            case personImages[11]:
                 personImages[11].src = "./images/propriedade_mago4.png";
                 legendText[11].classList.remove(legendOver);
                 legendText[11].classList.add('opacity');
                 btnExit[11].classList.add('btn-exitAtivo')
                 break;

             default:
                legendText.classList.remove(legendOver);
        }
    })

})



// -------- removendo propriedades guerreiros ---- //
btnExit[0].addEventListener("click", () =>{
    personImages[0].src = "./images/guerreiro1.png";
    legendText[0].classList.remove('opacity');
    btnExit[0].classList.remove('btn-exitAtivo');
})

btnExit[1].addEventListener("click", () =>{
    personImages[1].src = "./images/guerreiro2.png";
    legendText[1].classList.remove('opacity');
    btnExit[1].classList.remove('btn-exitAtivo');
})

btnExit[2].addEventListener("click", () =>{
    personImages[2].src = "./images/guerreiro3.png";
    legendText[2].classList.remove('opacity');
    btnExit[2].classList.remove('btn-exitAtivo');
})

btnExit[3].addEventListener("click", () =>{
    personImages[3].src = "./images/guerreiro4.png";
    legendText[3].classList.remove('opacity');
    btnExit[3].classList.remove('btn-exitAtivo');
})


// -------- removendo propriedades arqueiros ---- //
btnExit[4].addEventListener("click", () =>{
    personImages[4].src = "./images/arqueiro1.png";
    legendText[4].classList.remove('opacity');
    btnExit[4].classList.remove('btn-exitAtivo');
})

btnExit[5].addEventListener("click", () =>{
    personImages[5].src = "./images/arqueiro2.png";
    legendText[5].classList.remove('opacity');
    btnExit[5].classList.remove('btn-exitAtivo');
})

btnExit[6].addEventListener("click", () =>{
    personImages[6].src = "./images/arqueiro3.png";
    legendText[6].classList.remove('opacity');
    btnExit[6].classList.remove('btn-exitAtivo');
})

btnExit[7].addEventListener("click", () =>{
    personImages[7].src = "./images/arqueiro4.png";
    legendText[7].classList.remove('opacity');
    btnExit[7].classList.remove('btn-exitAtivo');
})


// -------- removendo propriedades magos ---- //
btnExit[8].addEventListener("click", () =>{
    personImages[8].src = "./images/mago1.png";
    legendText[8].classList.remove('opacity');
    btnExit[8].classList.remove('btn-exitAtivo');
})

btnExit[9].addEventListener("click", () =>{
    personImages[9].src = "./images/mago2.png";
    legendText[9].classList.remove('opacity');
    btnExit[9].classList.remove('btn-exitAtivo');
})

btnExit[10].addEventListener("click", () =>{
    personImages[10].src = "./images/mago3.png";
    legendText[10].classList.remove('opacity');
    btnExit[10].classList.remove('btn-exitAtivo');
})

btnExit[11].addEventListener("click", () =>{
    personImages[11].src = "./images/mago4.png";
    legendText[11].classList.remove('opacity');
    btnExit[11].classList.remove('btn-exitAtivo');
})
