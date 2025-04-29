<?php
include 'conexion.php';  // Incluimos la conexión a la base de datos

// Llamamos a la función para obtener la conexión
$conn = conectarBD();

// Comprobamos si la solicitud es POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['consulta'])) {
        $consulta = $_POST['consulta'];

        // Ejecutamos la consulta
        $result = $conn->query($consulta);

        if ($result) {
            // Si es un SELECT, traemos los datos
            if ($result instanceof mysqli_result) {
                $data = $result->fetch_all(MYSQLI_ASSOC);
                echo json_encode(['success' => true, 'data' => $data]);
            } else {
                // Si es una consulta de tipo INSERT/UPDATE/DELETE
                echo json_encode(['success' => true, 'message' => 'Consulta ejecutada correctamente']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Error en la consulta: ' . $conn->error]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No se ha recibido una consulta']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método de solicitud no permitido']);
}
?>
