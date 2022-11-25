'use strict'

/*BOM - Browser Object Model:
Confiere a la ventana de navegacion/pantalla, dentro de sus metodos y 
funciones se incluyen todo lo que podriamos hacer dentro  del navegador*/

function getBom(){
	console.log(screen.width); //Indica el ancho de la pantalla
	console.log(screen.height); //Indica el alto de lo que se ve de pantalla
	console.log(window.location); //Indica datos de la localizacion de la url
}

getBom();

function redirectURL(url){ //Nos recirecciona a la url que le indiquemos
	window.location.href= url;

redirectURL('www.google.com');

function abrirVentana(url){ 
	window.open(url,'','width=400, height=300');
	/*Abre una nueva url en una ventana nueva, con los parametros que
	le indiquemos*/
}

