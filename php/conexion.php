<?php
function conectarBD() {
    $servidor = "localhost";  
    $usuario = "root";     
    $password = "esio1313";#AQUI PON TU CONTRASEÑA... ASEGURATE DE CREAR LA MISMA BASE DE DATOS CON EL MISMO NOMBRE   
    $base_de_datos = "Ferreteria"; #A ESTE NOMBRE ME REFIERO...

    $conexion = new mysqli($servidor, $usuario, $password, $base_de_datos);

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    return $conexion;
}
?>
