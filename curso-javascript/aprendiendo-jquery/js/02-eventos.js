$(document).ready(function(){

/*EVENTOS
MouseOver y MouseOut*/

var caja = $('#caja');

/*caja.mouseover(function(){ Se aplica cuando pasamos por encima  del elemento
	$(this).css('background', 'red');
});

caja.mouseout(function(){
	$(this).css('background', 'green'); Se aplica cuando salimos del elemento
}); */

/*Evento Hover
Es un evento que puede combinar el mouseover y el mouseout en uno solo,
para ello deberemos hacer las funciones de ambos tengan nombre en vez de ser anonimas,
y las usaremos ambas en el evento hover.*/

function cambiaRojo(){ 
	$(this).css('background', 'red');
}

function cambiaVerde(){
	$(this).css('background', 'green');
}

//Hover 
caja.hover(cambiaRojo, cambiaVerde);

/*Click y doble click*/

caja.click(function(){ //Cuando hagamos 1 click en el elemento
	$(this).css('background' ,'blue')
			.css('color', 'white');
});

caja.dblclick(function(){
	$(this).css('background', 'pink') //Cuando hagamos 2 clicks en el elemento
			.css('color', 'yellow');
});

/*Focus y Blur*/

var nombre= $('#nombre');
var datos= $('#datos');

nombre.focus(function(){ //Cuando haces click sobre el elemento 
	$(this).css('border', '10px solid green');
});

nombre.blur(function(){ //Cuando haces click fuera del elemento
	$(this).css('border' , '5px solid orange')
	datos.text($(this).val()).show(); /*Metodo mas agil para mostrar, tambien 
	esta el hide(), con este metodo ademas de mostrar el otro campo, pintaremos lo que
	hayamos escrito en el campo #nombre*/		

/*MouseDown y MouseUp*/
	datos.mousedown(function(){ //Se activa al hacer click donde sea 
		$(this).css('border-color', 'gray');
	});

	datos.mouseup(function(){ //Se activa al levantar el click
		$(this).css('border-color', 'black');
	});

	/*MouseMove, captura el evento de movimiento del raton*/
	$(document).mousemove(function(){ ///Lo hacemos sobre todo el documento
		//$('body').css('cursor', 'none'); Asi ocultamos el cursor, la flecha
		$('#sigueme').css('left',event.clientX)
					 .css('top',event.clientY);
	});



});


 



});