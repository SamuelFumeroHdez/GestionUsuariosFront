$(document).ready(function() {

    verificarUsuarioLogueado();
  });

const verificarUsuarioLogueado = () => {
    if(localStorage.token){
        console.log("Registrado")
        actualizarEmail();
        
    }else{
        window.location.href = 'login.html';
    }
}

function actualizarEmail(){
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}