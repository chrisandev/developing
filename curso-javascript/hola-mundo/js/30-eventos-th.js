'use strict'

/*EVENTOS - EVENTS
Son acciones que suceden o que desencadenan cuando hacemos X accion

El primero que conoceremos es el Load, hace que una vez todos los elementos html 
hayam sido cargados se ejecute, asi podemos cargar nuestro script de el head y no
al final del codigo html para que se ejecutara cuando estuviera cargado, es parecido
al document.ready de jQuery

Evento Load, actua sobre el BOM, con el objeto window*/

window.addEventListener('load', function(){

/*Eventos de ratón*/

var boton= document.querySelector('#boton');
//document.getElementById('boton');



function cambiaColor(){

	console.log('Me has pulsado');

	var bg = boton.style.background;

	if(bg == 'green'){
		boton.style.background = 'yellow';
	}else{
		boton.style.background = 'green';
	}

	boton.style.padding= '10px';
	boton.style.border= '1px, solid, #ccc';

	return true;
}

/*
ADDEVENTLISTENER 
Metodo para agregar los distintos metodos, cada evento se pasa por 
parametro, y tras ello metemos un callback para que el evento haga lo que
queramos
*/

//Evento click: sucede cuando le damos click al elemento
boton.addEventListener('click', function(){
	cambiaColor();
});

//Evento Mouse over: cuando pasas por encima del elemento, hara algo
boton.addEventListener('mouseover', () =>{
	boton.style.background = '#ccc';
})

//Mouse out: cuando sales del elemento con el raton
boton.addEventListener('mouseout', () =>{
	boton.style.background = 'blue';
})

//Focus, clicando dentro

//Primero capturamos el campo del form para hacer events en el
var input= document.getElementById('campo_nombre');

input.addEventListener('focus', function(){
	console.log('[focus] Estas dentro del input o clicando dentro');
})

//Blur, clicando fuera 

input.addEventListener('blur', function(){
	console.log('[blur] Estas clicando fuera del input o elemento');
})

//Keydown, pulsando tecla

input.addEventListener('keydown', (event)=>{ 
	/*Capturamos datos del evento con el parametro (esto es una funcionalidad
	de los eventos), y despues de eso, con el metodo keyCode pasaremos
	lo que pulsemos a string con la funcion String.fromCharCode()*/
	console.log('[keydown], estas pulsando ', String.fromCharCode(event.keyCode));
})

//Keypress, mantendiendo pulsada la tecla

input.addEventListener('keypress', function(event){
	console.log('[keypress] estas pulsando: ', String.fromCharCode(event.keyCode));
})

//Keyup, soltando la tecla

input.addEventListener('keyup', function(event){
	console.log('[keyup] estas pulsando: ', String.fromCharCode(event.keyCode));
})

}) //Fin del evento load

