'use strict'

/*EVENTOS
Acciones que se desencadenan cuando hacemos algo

primero usaremos el evento load para que se ejecute cuando se haya cargado todo
el  contenido html

Evento load: actua sobre el objeto window del BOM, y dentro del evento cargaremos
todo el codigo JS*/

window.addEventListener('load', function(){

/*Eventos de raton (mouse)*/

//click: cuando haces click en el elemento

var buton = document.getElementById('boton');

function cambiaColor(){

	let bg= buton.style.background;

	if(bg == 'yellow'){
		buton.style.background = 'orange';
	}else{
		buton.style.background = 'yellow';
	}

	buton.style.padding= '15px';
	buton.style.border = '5px solid black';
}

buton.addEventListener('click', function(){
	cambiaColor();
})

//mouseover: Cuando pasas el cursor encima del elemento

buton.addEventListener('mouseover', () =>{
	buton.style.background = '#ccc';
})

//mouseout: cuando sales fuera del elemento con el raton

buton.addEventListener('mouseout', ()=>{
	buton.style.background = 'red';
})

//MAS EVENTOS

//Primero recogeremos el valor de un nuevo elemento, input

var input= document.getElementById('campo_nombre');
//input= document.querySelector('#campo_nombre');

//Evento focus: cuando clicamos dentro de un campo input

input.addEventListener('focus', function(){
	console.log('[focus] has clicado dentro del campo');
})

//blur: cuando clicas fuera del elemento

input.addEventListener('blur', function(){
	console.log('[blur] has clicado fuera del elemento');
})

//keydown: cuando pulsas una tecla

input.addEventListener('keydown', (event)=>{
console.log('[keydown] pulsaste: ',String.fromCharCode(event.keyCode));
})

//keypress: cuando mantienes pulsada una tecla

input.addEventListener('keypress', (event)=>{
console.log('[keypress] pulsaste: ',String.fromCharCode(event.keyCode));
})

//keyup: cuando sueltas una tecla

input.addEventListener('keyup', (event)=>{
console.log('[keyup] pulsaste: ',String.fromCharCode(event.keyCode));
})



}) //Final del evento load



