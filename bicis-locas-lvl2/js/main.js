function validateForm(){
	/* Escribe tú código aquí */
	// var variosSpan = document.createElement("span");
	// variosSpan.setAttribute("class","error");
	// document.getElementsByClassName("error");

	// while(variosSpan.length > 0){

	// 	variosSpan[0].parentElement.removeChild(variosSpan[0]);
	// }



	var inputName = document.getElementById("name").value;
	var inputLastname = document.getElementById("lastname").value;
	var inputEmail = document.getElementById("input-email").value;
	var inputPassword = document.getElementById("input-password").value;
    
    
	
	if (inputName == null || inputName.length == 0){

        var span = document.createElement("span");
        var texto = document.createTextNode("Ingrese su nombre");
        span.appendChild(texto);
		document.getElementById("name").parentNode.appendChild(span);
	}
	
	if (inputLastname == null || inputLastname.length == 0){

		var span = document.createElement("span");
		var texto = document.createTextNode("Ingrese su Apellido");
		span.appendChild(texto);
		document.getElementById("lastname").parentNode.appendChild(span);

		
	}
	if (inputEmail == null || inputEmail.length == 0){

		var span = document.createElement("span");
		var texto = document.createTextNode("Ingrese su Email");
		span.appendChild(texto);
	    document.getElementById("input-email").parentNode.appendChild(span);

	}
	if (inputPassword == null || inputPassword.length == 0){

		var span = document.createElement("span");
		var texto = document.createTextNode("Ingrese su contraseña");
		span.appendChild(texto);
		document.getElementById("input-password").parentNode.appendChild(span);

	}

     if (!/^[a-zA-z]*$/g.test(document.getElementById("name").value)){
     	alert("Caracteres invalidos, nombre y apellido la primera letra debe ser mayúscula");//letras//
     	return alert;
     }

		var limiteCaracteres = document.getElementById("input-password").value //caracteres minimos de 6//
		if (limiteCaracteres.length < 6){
		alert("minimo 6 caracteres como contraseña");
		return alert;
	}else if (limiteCaracteres == "123456" || limiteCaracteres == "password" || limiteCaracteres == "098765" ) {
		alert("Su password no puede ser igual a password ó números consecutivos");
		return alert;
	}

		var elOpciones = document.getElementById("opciones").selectedIndex;
        if( elOpciones == null || elOpciones == 0) {
        alert("elija una opción");
        return false;
      }
	var boxes = document.getElementsByClassName("input-box");
	
}
