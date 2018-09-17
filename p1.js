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
        var mensaje = "Los siguientes campos requeridos se encuentran vacíos \n";
        if (nombreEmpty == false)
        {
            mensaje += "El campo nombre está vacío \n";
        }
        if (apellidosEmpty == false)
        {
            mensaje += "El campo apellido está vacío \n";
        }
        if (emailEmpty == false)
        {
            mensaje += "El campo e-mail está vacío \n";
        }
        if (nacimientoEmpty == false)
        {
            mensaje += "El campo fecha de nacimiento está vacío \n";
        }
        if (telefonoEmpty == false)
        {
            mensaje += "El campo teléfono está vacío \n";
        }
        alert(mensaje);
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

}

funtion checkApellido()
{
    
}