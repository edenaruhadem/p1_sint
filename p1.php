<html>
<head>
    <meta charset="utf-8" />    
    <link rel="stylesheet" href="p1.css" />    
</head>
<body>
    <h1>Informe de resultados del registro:</h1>
    <fieldset id="field1">
        <legend>Datos personales:</legend>            
    <?php        
        echo "Nombre: " . $_REQUEST['Nombre'] . "<br/>";
        echo "Apellidos: " . $_REQUEST['Apellidos'] . "<br/>";
        echo "Sexo: " . $_REQUEST['Sexo'] . "<br/>";
        echo "Fecha de nacimiento: " . $_REQUEST['FechaNacimiento'] . "<br/>";        
        echo "Direccion: " . "Calle: " . $_REQUEST['calle'] . " Número: " . $_REQUEST['numero'] . " Piso: " . $_REQUEST['piso'] . " Letra: " . $_REQUEST['letra'] . "<br/>";        
        echo "Localidad: " . $_REQUEST['Localidad'] . "<br/>";
        echo "Povincia: " . $_REQUEST['Provincia'] . "<br/>";
        echo "País: " . $_REQUEST['Pais'] . "<br/>";
        echo "Código Postal: " . $_REQUEST['CodigoPostal'] . "<br/>";
        echo "Teléfono: " . $_REQUEST['Telefono'] . "<br/>";
        echo "e-mail: " . $_REQUEST['e-mail'] . "<br/>";
        echo "Password: " . $_REQUEST['Password'] . "<br/>";                
    ?>
    </fieldset>
    <fieldset class="field">
        <legend>Intereses musicales</legend> 
    <?php        
        echo "Géneros musicales seleccionados: " . "<br/>";
        foreach($_REQUEST['generos'] as $selected)
        {
            echo $selected . "</br>";
        }
        echo $_REQUEST['ofertas'] . " desea recibir ofertas musicales." . "<br/>";
    ?>
    </fieldset>
    <fieldset id="field3">
        <legend>Formas de envío del formulario y politica</legend>
    <?php
        echo $_REQUEST['datos'] . " consiente el tratamiento de sus datos." . "<br/>";
        echo "Método de envío: " . $_REQUEST['metodo'] . "<br/>";
        echo "Codificación de los datos: " . $_REQUEST['codificacion'] . "<br/>";
        echo "URL de envío: " . $_REQUEST['url'] . "<br/>";
        echo "Comentarios:" . "<br/>"; 
        echo $_REQUEST['sugerencias'] . "<br/>";
        echo "Hora: " . $_REQUEST['hora'] . "<br/>";
        echo "Navegador : " . $_REQUEST['navegador'] . "<br/>";
        $dir_subida = "uploads/";
        $fichero_subido = $dir_subida . basename($_FILES["imagen"]["name"]);
        if (move_uploaded_file($_FILES["imagen"]["tmp_name"], $fichero_subido))
        {
            echo "Fichero subido con éxito" . "<br/>";
            echo "<center><img src = $fichero_subido></img></center>";            
        } 
        else 
        {
            echo "El fichero no se ha subido correctamente" . "<br/>";
        }                
    ?>    
    </fieldset>    
</body>
</html>

    
        