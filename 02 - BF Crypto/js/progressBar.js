function progressBar(){
    let progressBar = document.querySelectorAll(".circle");
let progressText = document.querySelectorAll(".text");
let inicio = [0, 0, 0, 0];
let final = [500, 100, 60, 80];

let progressao = setInterval(() =>{
    inicio[0]++;
    progressText[0].innerHTML = `+${inicio[0]}`
    progressBar[0].style.background = `conic-gradient(
        #AB08BB, #612abb ${inicio[0] * 0.75}deg,
        #c9c9c9 ${inicio[0] *0.75}deg
    )`

    if(inicio[0] == final[0]){
        clearInterval(progressao)
    }
}, 3)

let progressao2 = setInterval(() =>{
    inicio[1]++
    progressText[1].innerHTML = `+${inicio[1]}`
    progressBar[1].style.background = `conic-gradient(
        #AB08BB, #612abb ${inicio[1] * 3.6}deg,
        #c9c9c9 ${inicio[1] *3.6}deg
    )`

    if(inicio[1] == final[1]){
        clearInterval(progressao2)
    }
    
}, 20)

let progressao3 = setInterval(() =>{
    inicio[2]++
    progressText[2].innerHTML = `+${inicio[2]}`
    progressBar[2].style.background = `conic-gradient(
        #AB08BB, #612abb ${inicio[2] * 6.0}deg,
        #c9c9c9 ${inicio[2] *6.0}deg

    )`

    if(inicio[2] == final[2]){
        clearInterval(progressao3)
    }
}, 33)

let progressao4 = setInterval(() =>{
    inicio[3]++
    progressText[3].innerHTML = `${inicio[3]}`
    progressBar[3].style.background = `conic-gradient(
        #AB08BB, #612abb ${inicio[3] * 4.5}deg,
        #c9c9c9 ${inicio[3] *4.5}deg

    )`

    if(inicio[3] == final[3]){
        clearInterval(progressao4)
    }
}, 25)
}



window.addEventListener("scroll", progressAnimation)


function progressAnimation(){
    let scroll = window.pageYOffset + ((window.innerHeight * 3) /4);
    let positionProgressBar = document.querySelector('.review').offsetTop; 

    if(scroll >= positionProgressBar){
        progressBar()

        window.removeEventListener("scroll", progressAnimation)
    }
  
} 

