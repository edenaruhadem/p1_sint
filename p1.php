<html>
<head>
    <meta charset="utf-8" />    
    <link rel="stylesheet" href="p1.css" />    
</head>
<body>
    <h1>Informe de resultados del registro:</h1>
    <hr></hr>            
    <?php
        //print "He llegado";
        $nombre = "";
        /*$nombre = $apellidos = $sexo = $nacimiento = $calle = $numero = $piso = $letra = $localidad = $provincia = $pais = $codpos = $tel = $email = $generos = $coments = "";*/
        if($_SERVER["REQUEST_METHOD"]=='GET')
        {
            
            $nombre = $_GET['Nombre'];
        }
        else
        {
            $nombre = $_POST['Nombre']; 
        }
        echo $nombre;
    ?>
</body>
</html>

    
        