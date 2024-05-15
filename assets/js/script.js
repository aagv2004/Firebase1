import {registrarPersona} from "./promesas.js"

window.addEventListener('load', () =>{
    document.getElementById('btnRegistrar').addEventListener('click', registrar)

})

const registrar = ()=> {
    // ------- ELEMENTOS -------
    let eNombre = document.getElementById('nombre');
    let eApellido = document.getElementById('apellido');
    let eRut = document.getElementById('rut');
    let eCorreo = document.getElementById('correo');
    let eEdad = document.getElementById('edad');
    let eFechaNacimiento = document.getElementById('fechaNacimiento');

    // -------- VALORES --------
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vRut = eRut.value;
    let vCorreo = eCorreo.value;
    let vEdad = eEdad.value;
    let vFechaNacimiento = eFechaNacimiento.value;

    // ----- CREAR OBJETO --------
    let objeto = {
        nombre:vNombre,
        apellido:vApellido,
        rut:vRut,
        correo:vCorreo,
        edad:vEdad,
        fechaNacimiento:vFechaNacimiento
    };
    // Se podría ingresar un iconito de carga.
    registrarPersona(objeto).then(()=> {
        //Se podría dar término al iconito de carga cuando finalice y se realice correctamente.
        alert("Se registro con éxito;")
    }).catch((r)=>{
        //Mensajito de error si la acción falla.
        console.log(r);
    });

}
