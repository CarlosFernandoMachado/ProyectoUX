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