<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$placa = $_POST['placa'];
$vehiculo = $_POST['vehiculo'];
$ubicacion = $_POST['ubicacion'];
$destino =$_POST['destino'];

mail('crisonic123@hotmail.com', $nombre, $email, $telefono, $placa, $vehiculo, $ubicacion, $destino);
 ?>