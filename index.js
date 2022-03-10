/**
 * Obtener los valores del formulario de registro
 */
 function obtenerValoresFormulario () {
    let correo = document.getElementById("txtCorreo").value
    let nombre = document.getElementById("txtNombre").value
    let celular = document.getElementById("txtCelular").value
    let clave = document.getElementById("txtClave").value
    let direccion = document.getElementById("txtDireccion").value

    if (correo ==""){
        //alert("pendejo llene el que falta")
        document.getElementById("idAlerta").style.display = "";
        document.getElementById("idAlerta").innerText="el correo le falta pendejo "
        return
    }

    // Forma de crear un Objeto
    //Inicializar un Obejto con propiedades
    let usuario = { celular, "clave":clave }

    //Agregar propiedadesa un JSON
    usuario.correo = correo
    usuario.direccion = direccion

    //Agregar propiedades con bracket notation ["key"]
    usuario["nombre"] = nombre

document.getElementById("txtCorreo").value = ""
document.getElementById("txtNombre").value = ""
document.getElementById("txtCelular").value = ""
document.getElementById("txtClave").value = ""
document.getElementById("txtDireccion").value = ""




    
    console.log(usuario);

}


function cargarPagina() {
    document.getElementById("idAlerta").style.display = "none";
}

cargarPagina()