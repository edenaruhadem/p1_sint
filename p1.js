/*
Función general que verifica la correcta introducción de los datos pertenecientes a cada campo
*/
function checkIsCorrect()
{
    var calendario= new Date();
    var hora = new String (calendario.getHours());
    var minutos = new String (calendario.getMinutes());
    var segundos = new String (calendario.getSeconds());      
    document.getElementById("Hora").value = hora + ":" + minutos + ":" + segundos;
    document.getElementById("Nav").value = comprobarNavegador();
    var correctNombre = checkNombre();
    var correctApellido = checkApellido();
    var correctNacimiento = checkNacimiento();
    var correctCodigoPostal = checkCodigoPostal();
    var correctTelefono = checkTelefono();
    var correctEmail = checkEmail();
    if((correctNombre == false) || (correctApellido == false) || (correctNacimiento == false) || (correctCodigoPostal == false) || (correctTelefono == false) || (correctEmail == false))
    {
        var mensajeIsNotCorrect = "Los siguientes campos son incorrectos \n";
        if (correctNombre == false)
        {
            mensajeIsNotCorrect += "El campo nombre contiene números. Introducir sólo letras \n";
        }
        if (correctApellido == false)
        {
            mensajeIsNotCorrect += "El campo apellido contiene números. Introducir sólo letras \n";
        }
        if (correctNacimiento == false)
        {
            mensajeIsNotCorrect += "El campo fecha de nacimiento introducido es erróneo \n";
        }
        if (correctCodigoPostal == false)
        {
            mensajeIsNotCorrect += "El código postal introducido es erróneo \n";
        }
        if (correctTelefono == false)
        {
            mensajeIsNotCorrect += "El teléfono introducido es erróneo \n";
        }
        if (correctEmail == false)
        {
            mensajeIsNotCorrect += "El e-mail introducido es erróneo \n";
        }
        alert(mensajeIsNotCorrect);
        return false;
    }
    else
    {
        if (document.getElementById("isPost").checked == true)
        {
            document.getElementById("myForm").method = "POST";        
        }
        else
        {            
            document.getElementById("myForm").method = "GET";
        }

        if (document.getElementById("isUrlencoded").checked == true)
        {
            document.getElementById("myForm").enctype = "application/x-www-form-urlencoded";        
        }
        else
        {
            document.getElementById("myForm").enctype = "multipart/form-data";
        }

        if (document.getElementById("isP1").checked == true)
        {
            document.getElementById("myForm").action = "p1.php";        
        }
        else
        {
            document.getElementById("myForm").action = "phpinfo.php";
        }
        alert("Los campos han sido rellenados correctamente. Se procede con el envío de datos");
        return true;
    }

    /*var errores = errores();    
    if(errores == true)
    {
        alert("Hay errores");
        return false;
    }
    else if (errores == false)
    {  
        alert("Los campos han sido rellenados correctamente. Se procede con el envío de datos");
        if (document.getElementById("isPost").checked == true)
        {
            document.getElementById("myForm").method = "POST";        
        }
        else
        {            
            document.getElementById("myForm").method = "GET";
        }

        if (document.getElementById("isUrlencoded").checked == true)
        {
            document.getElementById("myForm").enctype = "application/x-www-form-urlencoded";        
        }
        else
        {
            document.getElementById("myForm").enctype = "multipart/form-data";
        }

        if (document.getElementById("isP1").checked == true)
        {
            document.getElementById("myForm").action = "p1.php";        
        }
        else
        {
            document.getElementById("myForm").action = "phpinfo.php";
        }

    var calendario= new Date();
    var hora = new String (calendario.getHours());
    var minutos = new String (calendario.getMinutes());
    var segundos = new String (calendario.getSeconds());      
    document.getElementById("Hora").value = hora + ":" + minutos + ":" + segundos;
    document.getElementById("Nav").value = comprobarNavegador();   
    return true;   
    }*/
}
function errores()
{    
    var correctNombre = checkNombre();
    var correctApellido = checkApellido();
    var correctNacimiento = checkNacimiento();
    var correctCodigoPostal = checkCodigoPostal();
    var correctTelefono = checkTelefono();
    var correctEmail = checkEmail();
    if((correctNombre == false) || (correctApellido == false) || (correctNacimiento == false) || (correctCodigoPostal == false) || (correctTelefono == false) || (correctEmail == false))
    {               
        var mensajeIsNotCorrect = "Los siguientes campos son incorrectos \n";
        if (correctNombre == false)
        {
            mensajeIsNotCorrect += "El campo nombre contiene números. Introducir sólo letras \n";
        }
        if (correctApellido == false)
        {
            mensajeIsNotCorrect += "El campo apellido contiene números. Introducir sólo letras \n";
        }
        if (correctNacimiento == false)
        {
            mensajeIsNotCorrect += "El campo fecha de nacimiento introducido es erróneo \n";
        }
        if (correctCodigoPostal == false)
        {
            mensajeIsNotCorrect += "El código postal introducido es erróneo \n";
        }
        if (correctTelefono == false)
        {
            mensajeIsNotCorrect += "El teléfono introducido es erróneo \n";
        }
        if (correctEmail == false)
        {
            mensajeIsNotCorrect += "El e-mail introducido es erróneo \n";
        }                    
        alert(mensajeIsNotCorrect);        
        return true;               
    }
    else return false;
}
/*
Este grupo de funciones contiene patrones específicos de verificación de datos. Son funciones parciales.
*/
function checkNombre()
{
    var nombre = document.getElementById("campoNombre").value;
    var expNombre = /^[a-zA-Z\s]*$/;
    if (nombre.search(expNombre)==-1)
    { 
        return false;		
    }
    else return true;
}
function checkApellido()
{
    var apellidos = document.getElementById("campoApellidos").value;
    var expApellidos = /^[a-zA-Z\s]*$/;
    if (apellidos.search(expApellidos)==-1)
    { 
        return false;		
    }
    else return true;
}
function checkNacimiento()
{
    var nacimiento = document.getElementById("campoFechaNacimiento").value;    
    var dia = parseInt(nacimiento.substring(0,2));    		
    var mes = parseInt(nacimiento.substring(3,5));    		
	var anio = parseInt(nacimiento.substring(6, 10));        
    if((dia>31) || (mes>12) || (anio<1900) || (anio>2018))
    {
		return false;
	}	
    else return true;    
}
function checkCodigoPostal()
{
    var cp = document.getElementById("campoCodigoPostal").value;
    var expCP = /[0-9][0-9][0-9][0-9][0-9]/;
    if(cp != '') 
    {
        if (cp.search(expCP)==-1)
        {
            return false;
        }
    }
    else return true;    
}
function checkTelefono()
{
    var telef = document.getElementById("campoTelefono").value;
    var expTelef = /^[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/    
    if(telef != '') 
    {
        if (telef.search(expTelef)==-1)
        {
            return false;
        }
    }
    else return true;    
}
function checkEmail()
{
	var email = document.getElementById("campoEmail").value;	
	var cadenaEmail =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(email != '') 
    {		
        if(!cadenaEmail.test(email))
        {
			return false;
		}		
	}	
    else return true;    
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
