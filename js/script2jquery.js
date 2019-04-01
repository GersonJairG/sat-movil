
$(document).ready(function() {

	
$('.service__container').on('click', 'li', function(){

	if($(this).text()=="Consulta Normal"){

		
		$('.header--img').attr('src', 'img/consultanormalsat.png');

	}

	if($(this).text()=="Reporte de materias"){

		$('.header--img').attr('src', 'img/satreportematerias.png');

	}

	if($(this).text()=="Reporte de notas"){

		$('.header--img').attr('src', 'img/satreportenotas.png');

	}

	if($(this).text()=="Certificado de estudio"){

		$('.header--img').attr('src', 'img/satcertificado.png');

	}

	if($(this).text()=="Traslado"){

		$('.header--img').attr('src', 'img/sattraslado.png');

	}


});


});