<?php

// Verifica si se ha enviado un nombre de carpeta
if(isset($_POST['create_folder']) && !empty($_POST['create_folder'])) {
    // Obtiene el nombre de la carpeta desde el formulario
    $create_folder = $_POST['create_folder'];

    
    // Validar y filtrar el nombre de la rama (esto es solo un ejemplo, deberías aplicar validación adecuada)
    $create_folder = preg_replace('/[^a-zA-Z0-9_-]/', "", $create_folder);

    // Verifica si la carpeta no existe ya
    if(!file_exists($create_folder)) {

        // Intenta crear la carpeta
        if(mkdir($create_folder)) {
            // Comando para crear la rama
            $git_command = "git branch $create_folder";

            // Ejecutar el comando
            $resultado = exec($git_command, $output, $status);

            // Verificar si el comando se ejecutó correctamente
            if ($status === 0) {
                echo "La rama $create_folder ha sido creada correctamente.";
            } else {
                echo "Hubo un error al crear la rama $create_folder.";
            }
            
        } else {
            echo "Error al crear la carpeta";
        }

    } else {
        echo "La carpeta ya existe";
    }
} else {
    echo "No se proporcionó un nombre de carpeta";
}

$nombreRama = $_POST['nombre_rama']; // Obtener el nombre de la rama del formulario o de cualquier otra fuente

// Validar y filtrar el nombre de la rama (esto es solo un ejemplo, deberías aplicar validación adecuada)
$nombreRama = preg_replace('/[^a-zA-Z0-9_-]/', '', $nombreRama);

// Comando para crear la rama
$comando = "git branch $nombreRama";

// Ejecutar el comando
$resultado = exec($comando, $output, $status);

// Verificar si el comando se ejecutó correctamente
if ($status === 0) {
    echo "La rama $nombreRama ha sido creada correctamente.";
} else {
    echo "Hubo un error al crear la rama $nombreRama.";
}
