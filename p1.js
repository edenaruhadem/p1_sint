/*
Función principal que se llama desde el formulario para hacer las verificaciones
*/
function checkForm()
{
    var checkEmpty = checkIsEmpty();
    var checkCorrect = checkIsCorrect();
    if (checkEmpty == false || checkCorrect == false)
    {        
        return false;
    }
    else 
    {
        return true;
    }
}
/*
Función general que verifica la existencia de datos en todos los campos requeridos
*/
function checkIsEmpty()
{
    var nombreEmpty = nombreIsEmpty();
    var apellidosEmpty = apellidosIsEmpty();
    var emailEmpty = emailIsEmpty();
    var nacimientoEmpty = nacimientoIsEmpty();
    var telefonoEmpty = telefonoIsEmpty();
    

    
    if ((nombreEmpty == false) || (apellidosEmpty == false) || (emailEmpty == false) || (nacimientoEmpty == false) || (telefonoEmpty == false))
    {
        var mensajeIsEmpty = "Los siguientes campos requeridos se encuentran vacíos \n";

        if (nombreEmpty == false)
        {
            mensajeIsEmpty += "El campo nombre está vacío \n";
        }
        if (apellidosEmpty == false)
        {
            mensajeIsEmpty += "El campo apellido está vacío \n";
        }
        if (emailEmpty == false)
        {
            mensajeIsEmpty += "El campo e-mail está vacío \n";
        }
        if (nacimientoEmpty == false)
        {
            mensajeIsEmpty += "El campo fecha de nacimiento está vacío \n";
        }
        if (telefonoEmpty == false)
        {
            mensajeIsEmpty += "El campo teléfono está vacío \n";
        }
        alert(mensajeIsEmpty);
        return false;
    }    
    else
    {
        return true;
    }
   
}
/*
Función general que verifica la correcta introducción de los datos pertenecientes a cada campo
*/
function checkIsCorrect()
{
    var correctNombre = checkNombre();
    var correctApellido = checkApellido();
    if ((correctNombre == false) || (correctApellido == false))
    {
        var mensajeIsCorrect = "Los siguientes campos son incorrectos \n";

        if (correctNombre == false)
        {
            mensajeIsCorrect += "El campo nombre contiene números. Introducir sólo letras \n";
        }
        if (correctApellido == false)
        {
            mensajeIsCorrect += "El campo apellido contiene números. Introducir sólo letras \n";
        }        
        alert(mensajeIsCorrect);
        return false;
    }
    else
    {
        return true;
    }

}


/*
Este grupo de funciones checkea la existencia de datos requeridos en los campos. Son funciones parciales
*/
function nombreIsEmpty()
{
    var x = document.forms["Formulario"]["Nombre"].value;
    if (x == "")
    {        
        return false;
    }
}
function apellidosIsEmpty()
{
    var x = document.forms["Formulario"]["Apellidos"].value;
    if (x == "")
    {        
        return false;
    }
}
function emailIsEmpty()
{
    var x = document.forms["Formulario"]["e-mail"].value;
    if (x == "")
    {        
        return false;
    }
}
function nacimientoIsEmpty()
{
    var x = document.forms["Formulario"]["FechaNacimiento"].value;
    if (x == "")
    {        
        return false;
    }
}
function telefonoIsEmpty()
{
    var x = document.forms["Formulario"]["Telefono"].value;
    if (x == "")
    {        
        return false;
    }
}
/*
Este grupo de funciones contiene patrones específicos de verificación de datos. Son funciones parciales.
*/
function checkNombre()
{
    var x = document.forms["Formulario"]["Nombre"].value;
    if (x.search(/^[a-zA-Z\s]*$/)==-1)
    {
        return false;
    }    
}

function checkApellido()
{
    var x = document.forms["Formulario"]["Apellidos"].value;
    if (x.search(/^[a-zA-Z\s]*$/)==-1)
    {
        return false;
    }    
}