const btnOpen = document.querySelector('#open-password');
const btnClosed = document.querySelector("#closed-password");
let openPass = document.querySelector('.openPass');
let closePass = document.querySelector('.closePass');

btnOpen.addEventListener('click', () =>{
    document.querySelector('#password-input').type = 'text';
    
    openPass.classList.add('closed')
    closePass.classList.add("open")
    
});

btnClosed.addEventListener("click", () => {
    document.querySelector('#password-input').type = 'password';
    
    openPass.classList.remove('closed')
    closePass.classList.remove("open")
});



const btnAcessar = document.querySelector(".btn-acessar");
const senha = document.querySelector("#password-input");

function passwordValid() {
    let senhaValue = senha.value.length;

    if(senhaValue >= 4 && senhaValue <= 20) {
        btnAcessar.classList.add('sucess');
    
    }else {
        btnAcessar.classList.remove('sucess');
    }

};


const btnRegister = document.querySelector(".btn-acessar2");
const senhaRegister = document.querySelector(".password-reg");
const senhaRegisterConfirm = document.querySelector(".password-reg2");


function createPasswordValid(){
    let senhaValid = senhaRegister.value.length;
    let senhaValidConfirm = senhaRegisterConfirm.value.length;
    
    if(senhaValid >= 4 && senhaValid <= 20){
        if(senhaValidConfirm >=4 && senhaValidConfirm <= 20) {
            if(senhaRegister.value == senhaRegisterConfirm.value){
                btnRegister.classList.add('sucess')
            }else {
                btnRegister.classList.remove('sucess')
            }
        }

    }else {
        btnRegister.classList.remove('sucess')
    }

};






















