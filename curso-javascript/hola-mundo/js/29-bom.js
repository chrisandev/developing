'use strict'

/*BOM - Browser Object Model, sirve para sacar datos de la pantalla del navegador*,
Tambien nos sirve para hacer funciones que haria el navegador, todo lo que haria el navegador podriamos hacerlo
con el BOM en JavaScript/

function getBom(){

console.log(window.innerHeight); /*
Para saber la altura de la pantalla si por ejemplo la consola tapa algo, mostrara el total menos la consola*/

console.log(screen.height); /*En este caso mostrara el total configurado de pantalla*/

console.log(window.innerWidth); //" La anchura"

console.log(screen.width);

console.log(window.location); /*Saca un monton de datos de la localizacion o URL en la que estamos*/

console.log(window.location.href);//Saca la URL
}

function redirect(url){
window.location.href = url; /*Si en la consola instanciamos esta funcion y le pasamos una url, nos lleva a ella
ej: redirect("www.google.com"*/ 
}

function abrirVentana(url){
	window.open(url); //Lo mismo que en redirect, pero nos lleva a la url en una pestaña nueva.
	//window.open(url,"","width=400, height=300"); Nos abre una nueva ventana con las medidas que le hemos pasado.
}



getBoom();

