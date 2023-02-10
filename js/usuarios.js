// Call the dataTables jQuery plugin
$(document).ready(function() {

  cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmail()
});

async function cargarUsuarios(){

    const request = await fetch('http://localhost:8080/api/usuarios', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        }
    });

    const usuarios = await request.json();

    let listadoHTML = '';

    for(let usuario of usuarios){
        let botonEliminar = `<a href="#" onclick="eliminarUsuario(${usuario.id})" class="btn btn-danger btn-circle btn-sm"> <i class="fas fa-trash"></i> </a>`
        let phone = usuario.phone == null ? '-' : usuario.phone
        let usuarioHtml = `<tr>
                               <td>${usuario.name} ${usuario.surname}</td>
                               <td>${usuario.email}</td>
                               <td>${phone}</td>
                               <td>
                                    ${botonEliminar}
                               </td>
                           </tr>`

        listadoHTML += usuarioHtml
    }

    console.log(usuarios);



    document.querySelector('#usuarios tbody').outerHTML = listadoHTML;

}

async function  eliminarUsuario(id){

    if(!confirm('¿Desea eliminar este usuario?')){
        return;
    }

    const request = await fetch('https://taller-torno-fumero-erp.ew.r.appspot.com/api/usuarios/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.token,
                'Access-Control-Allow-Origin': '*'
            }
     });

     location.reload();
}

function actualizarEmail(){
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}
