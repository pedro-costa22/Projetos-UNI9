const btnRegister = document.querySelector(".btn-acessar");
const senhaRegister = document.querySelector(".password-reg");
const senhaRegisterConfirm = document.querySelector(".password-reg2");
const msg = document.querySelector("#valid-pass");



function createPasswordValid(){
    let senhaValid = senhaRegister.value.length;
    let senhaValidConfirm = senhaRegisterConfirm.value.length;
    
    if(senhaValid >= 4 && senhaValid <= 20){
        if(senhaValidConfirm >=4 && senhaValidConfirm <= 20) {
            if(senhaRegister.value == senhaRegisterConfirm.value){
                btnRegister.classList.add('sucess')
                msg.innerHTML = "As senhas conferem";
                msg.style.color = "#77c277"

            }else {
                btnRegister.classList.remove('sucess')
                msg.innerHTML = "As senhas devem ser iguais"
                msg.style.color = "#ff4040";
            }
        }

    }else {
        btnRegister.classList.remove('sucess')
        msg.innerHTML = '';
        
    }

}; 


const btnOpen = document.querySelectorAll('#open-password');
const btnClosed = document.querySelectorAll("#closed-password");
let openPass = document.querySelectorAll('.openPass');
let closePass = document.querySelectorAll('.closePass');

btnOpen[0].addEventListener("click", () =>{
    document.querySelector(".password-reg").type = "text"

    openPass[0].classList.add('closed')
    closePass[0].classList.add("open")
})

btnClosed[0].addEventListener("click", () =>{
    document.querySelector(".password-reg").type = "password"

    openPass[0].classList.remove('closed')
    closePass[0].classList.remove("open")
})

btnOpen[1].addEventListener("click", () =>{
    document.querySelector(".password-reg2").type = "text"

    openPass[1].classList.add('closed')
    closePass[1].classList.add("open")
})

btnClosed[1].addEventListener("click", () =>{
    document.querySelector(".password-reg2").type = "password"

    openPass[1].classList.remove('closed')
    closePass[1].classList.remove("open")
})




