//recibir datos de submit
document.getElementById('Formulario').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();
    var nombre = getInputVal('nombre');
    var email = getInputVal('email');
    var telefono = getInputVal('telefono');
    var placa = getInputVal('placa');
    var vehiculo = getInputVal('vehiculo');
    var ubicacion = getInputVal('ubicacion');
    var destino = getInputVal('destino');
}

//funcio get
function getInputVal(id){
    return document.getElementById(id).value;
}