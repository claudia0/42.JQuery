var regexName = /^[A-Z][a-z]*$/;

(document).ready(function()){
	console.log("esta listo");

	$("#name").keypress(function()){
		console.log("presiono uns tecla");

		var texto = $("name").val();
		// var text = $(evt.target).val();

		// if (texto == ""){} es igual a .trim
		if (texto.trim() == ""){//siempre validar con trim recomensado usar//
			console.log("el campo esta vacio");
		else if(regexName.test(texto)){
			console.log("valor invalido");
			var span = $(<span class = "error"> Texto invalido</)
			$(".name-container").append(span);
		}

	});

	$("#lastname").keypress(function()){
		console.log("presiono uns tecla");
		
	});

	$("#email").keypress(function()){
		console.log("presiono uns tecla");
		
	});
}