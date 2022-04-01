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




















