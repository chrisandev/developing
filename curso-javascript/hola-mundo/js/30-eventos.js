'use strict'

/*EVENTOS, funciones que se ejecutan cuando pasa algo (el evento en si)*/


/*Evento LOAD, sirve para que previo a correr el programa, se espere a que se cargue la ventana
del navegador web al completo, esto solucionará que tengamos que cargar nuestro script de HTML al 
final en vez de al principio en el head que es lo recomendable, para ello, engoblamos todo el 
programa dentro del evento LOAD.*/

window.addEventListener('load', function(){ //tambien se puede hacer ('load' () =>{}); funcion flecha

//Eventos del ratón

function cambiarColor(){
var bg = boton.style.background;/*Creamos esta variable para optimizar el programa*/

console.log('Me estas pulsando');

	if(bg == "green"){
		boton.style.background = "red"; //No se por que no se puede poner bg = 'green'
		//pero si lo haces no funciona

	}else{
		boton.style.background = "green";
	}

		boton.style.padding = '10px'; //Aplicamos estos estilos de manera secuencial
		boton.style.border = '1px solid #ccc'

	return true; /*Ha de devolver si no no va*/
}

var boton = document.querySelector('#boton');

boton.addEventListener('click', function(){ //Hay que hacer una funcion de callback
	cambiarColor(); //Asi es como se llama a un evento dentro  de JS, no usando HTML para llamarlo
	//Aplicamos la funcion creada arriba, click es el nombre concreto para este evento en el c.back
	console.log(this); /*This hace referencia al objeto en el que estamos en una funcion, en este
	caso la variable boton, hace lo mismo pero seria mas optimo usar el this*/
	this.style.border = '10px solid black';
});

//Evento Mouse Over, Ocurrirá cuando pasemos por encima de algo con el mouse

boton.addEventListener('mouseover', function(){ /*Click y mouseover dentro de la funcion de callback
	son los nombres de esas funciones concretas, no son inventados, tienen que usarse esos*/
	boton.style.background = '#ccc'; 
});

//""Mouse out, Lo mismo que el over pero cuando salgamos del objeto en vez de cuando pasemos por encima.

boton.addEventListener('mouseout', function(){
	boton.style.background = 'yellow';
})

//Los siguientes eventos los haremos un input text llamado campo_nombre

var input = document.querySelector('#campo_nombre');

//Evento Focus

input.addEventListener('focus', function(){
	console.log('[focus], Has clicado dentro del item');
})

//Blur

input.addEventListener('blur', function(){
	console.log('[blur], Has clicado fuera del item');
})

//Keydown

input.addEventListener('keydown', function(event){ //Parametro event para capturar datos del evento
	console.log('[keydown], Has pulsado la tecla ', String.fromCharCode(event.keyCode));
	//String.fromCharCode(event.keyCode)); se usa para convertir lo que pulsemos en String
	});

//Keypress

input.addEventListener('keypress', function(event){
	console.log('[keypress], Has mantenido pulsada la tecla ', String.fromCharCode(event.keyCode));
});

//Keyup

input.addEventListener('keyup',function(event){
	console.log('[keyup], Has dejado de pulsar la tecla', String.fromCharCode(event.keyCode));
})

}); //Fin de la funcion LOAD






