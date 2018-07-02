// Initialize Firebase
var config = {
    apiKey: "AIzaSyDRiuM2VIIF2ArMRQ5z0katMiIKadNr_Nc",
    authDomain: "chofer-sobrio-e8e6d.firebaseapp.com",
    databaseURL: "https://chofer-sobrio-e8e6d.firebaseio.com",
    projectId: "chofer-sobrio-e8e6d",
    storageBucket: "chofer-sobrio-e8e6d.appspot.com",
    messagingSenderId: "1024062278941"
};
firebase.initializeApp(config);

//referencia a mensaje
var messageref = firebase.database().ref('messages');
//recibir datos de submit
document.getElementById('Formulario').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    var nombre = getInputVal('nombre');
    var email = getInputVal('email');
    var telefono = getInputVal('telefono');
    var placa = getInputVal('placa');
    var vehiculo = getInputVal('vehiculo');
    var ubicacion = getInputVal('ubicacion');
    var destino = getInputVal('destino');
    saveMessage(nombre, email, telefono, placa, vehiculo, ubicacion, destino);
}

//ubicacion exacta
var x = document.getElementById("ubicacion-exacta");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = position.coords.latitude +
        "," + position.coords.longitude;

}

//funcio get
function getInputVal(id) {
    return document.getElementById(id).value;
}

//clear
function clear(){
    alert('Se ha enviado su mensaje')
    document.getElementById('Formulario').reset();
}

//guardar mensaje en firebase
function saveMessage(nombre, email, telefono, placa, vehiculo, ubicacion, destino) {
    var newMessageRef = messageref.push();
    newMessageRef.set({
        nombre: nombre,
        email: email,
        telefono: telefono,
        placa: placa,
        vehiculo: vehiculo,
        ubicacion: ubicacion,
        destino: destino
    });
}