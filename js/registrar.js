// Call the dataTables jQuery plugin
$(document).ready(function() {
});

async function registrarUsuario(){

    let datos = {};
    datos.name = document.getElementById('txtNombre').value;
    datos.surname = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtRepetirPassword').value;

    if(!repetirPassword == datos.password){
        console.log("No son iguales");
        alert('La contraseña que escribiste es diferente');
        return;
    }

    const request = await fetch('https://taller-torno-fumero-erp.ew.r.appspot.com/api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    alert("La cuenta fue creada con éxito")
    window.location.href = 'login.html';

}
