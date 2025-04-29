<?php
function conectarBD() {
    $servidor = "localhost";  
    $usuario = "root";     
    $password = "esio1313";   
    $base_de_datos = "Ferreteria"; 

    $conexion = new mysqli($servidor, $usuario, $password, $base_de_datos);

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    return $conexion;
}
?>
