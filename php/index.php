<?php

// Verifica si se ha enviado un nombre de carpeta
if(isset($_POST['create_folder']) && !empty($_POST['create_folder'])) {
    // Obtiene el nombre de la carpeta desde el formulario
    $create_folder = $_POST['create_folder'];

    // Verifica si la carpeta no existe ya
    if(!file_exists($create_folder)) {
        // Intenta crear la carpeta
        if(mkdir($create_folder)) {
            echo "Carpeta creada exitosamente";
        } else {
            echo "Error al crear la carpeta";
        }
    } else {
        echo "La carpeta ya existe";
    }
} else {
    echo "No se proporcionó un nombre de carpeta";
}

?>
