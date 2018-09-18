/*
Función principal que se llama desde el formulario para hacer las verificaciones
*/
function checkForm()
{
    var mensaje = "Los campos han sido rellenados correctamente. Se procede con el envío de datos";
    var checkEmpty = checkIsEmpty();
    var checkCorrect = checkIsCorrect();
    var calendario= new Date();
    var hora = new String (calendario.getHours());
    var minutos = new String (calendario.getMinutes());
   	var segundos = new String (calendario.getSeconds());
    if (checkEmpty == false || checkCorrect == false)
    {        
        return false;
    }
    else if (checkEmpty == true && checkCorrect == true)
    {        
    	document.forms["Formulario"]["hora"].value = hora + ":" + minutos + ":" + segundos;
        document.forms["Formulario"]["navegador"].value = comprobarNavegador();   
        alert(mensaje);
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
    var telefonoEmpty = telefonoIsEmpty();
    var passwordEmpty = passwordIsEmpty(); 

    
    if ((nombreEmpty == false) || (apellidosEmpty == false) || (emailEmpty == false) || (telefonoEmpty == false) || (passwordEmpty == false))
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
        if (telefonoEmpty == false)
        {
            mensajeIsEmpty += "El campo teléfono está vacío \n";
        }
        if (passwordEmpty == false)
        {
            mensajeIsEmpty += "El campo password está vacío \n";
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
function telefonoIsEmpty()
{
    var x = document.forms["Formulario"]["Telefono"].value;
    if (x == "")
    {        
        return false;
    }
}
function passwordIsEmpty()
{
    var x = document.forms["Formulario"]["Password"].value;
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
function deploy(x)
{
    document.getElementById("message").style.display = "block";
}
function undeploy(x)
{
    document.getElementById("message").style.display = "none";
}
function checkPassword()
{   

  var campo = document.getElementById("campocontraseña");
  var letter = document.getElementById("minuscula");
  var capital = document.getElementById("mayuscula");
  var number = document.getElementById("numero");
  var length = document.getElementById("longitud");  
  var letrasMinusculas = /[a-z]/g;
  var letrasMayusculas = /[A-Z]/g;
  var numeros = /[0-9]/g;

  if(campo.value.match(letrasMinusculas)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
    
  if(campo.value.match(letrasMayusculas)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
    
  if(campo.value.match(numeros)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }  
  
  if(campo.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }  
}

function setTrueCheckboxes()
{    
    document.getElementById("check1").checked = true;
    document.getElementById("check2").checked = true; 
    document.getElementById("check3").checked = true; 
    document.getElementById("check4").checked = true; 
    document.getElementById("check5").checked = true; 
    document.getElementById("check6").checked = true; 
    document.getElementById("check7").checked = true;
    document.getElementById("check8").checked = false; 
    document.getElementById("check9").checked = false;        
}
function setFalseCheckboxes()
{    
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false; 
    document.getElementById("check3").checked = false; 
    document.getElementById("check4").checked = false; 
    document.getElementById("check5").checked = false; 
    document.getElementById("check6").checked = false; 
    document.getElementById("check7").checked = false; 
    document.getElementById("check8").checked = false;
        
}
function comprobarNavegador() {

	/* Variables para cada navegador, la funcion indexof() si no encuentra la cadena devuelve -1, 
        las variables se quedarán sin valor si la funcion indexof() no ha encontrado la cadena. */
        var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
        var is_chrome= navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;
        var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox/') > -1;
        var is_ie = navigator.userAgent.toLowerCase().indexOf('msie ') > -1;


 
    /* Se detecta si es Safari, y no Chrome esto es porque el 
        la cadena de texto userAgent de Safari es un poco especial y muy parecida a chrome debido a que los dos navegadores
        usan webkit. */
  
        if (is_safari && !is_chrome ) {
 
    /* Se busca la cadena 'Version' para obtener su posicion en la cadena de texto, para ello
        utilizaremos la funcion, tolowercase() e indexof() */
        	var posicion = navigator.userAgent.toLowerCase().indexOf('Version/');
  
        /* Una vez que se tiene la posición de la cadena de texto que indica la version capturamos la
        subcadena con substring(), como son 4 caracteres los se obtendrá de 9 al 12 que es donde 
        acaba la palabra 'version' */
        	var ver_safari = navigator.userAgent.toLowerCase().substring(posicion+9, posicion+12);
  
        // Se convierte la cadena de texto a float y se muestra la version y el navegador
        	ver_safari = parseFloat(ver_safari);
  
         	return ('Safari, Version: ' + ver_safari);
        }
  
    //Se detecta si es Chrome
        if (is_chrome ) {
            var posicion = navigator.userAgent.toLowerCase().indexOf('chrome/');
            var ver_chrome = navigator.userAgent.toLowerCase().substring(posicion+7, posicion+11);
         
        //Comprobar version
            ver_chrome = parseFloat(ver_chrome);
            return ('Google Chrome, Version: ' + ver_chrome);
        }
 
        //Se detecta si es Firefox
        if (is_firefox ) {
            var posicion = navigator.userAgent.toLowerCase().lastIndexOf('firefox/');
            var ver_firefox = navigator.userAgent.toLowerCase().substring(posicion+8, posicion+12);
           
        //Comprobar version
            ver_firefox = parseFloat(ver_firefox); 
            return ('Firefox, Version: ' + ver_firefox);
        }
  
        //Se detecta si es Internet Explorer
        if (is_ie ) {
            var posicion = navigator.userAgent.toLowerCase().lastIndexOf('msie ');
            var ver_ie = navigator.userAgent.toLowerCase().substring(posicion+5, posicion+8);
             
        //Comprobar version
            ver_chrome = parseFloat(ver_ie);
            return ('Internet Explorer, Version: ' + ver_ie);
        }

}
