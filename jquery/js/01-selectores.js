/*Ya no hace falta emplear 'use strict' ya que eso por lo visto es para javascript
puro
el simbolo $ hace referencia a jQuery, es lo mismo poner $ que la palabra reservada
jQuery, tras ello seleccionaremos a modo de selector entre parentesis al objeto

Con el objeto document seleccionado usaremos el metodo ready, este hace referencia
a la creacion de un evento, el evento tiene una funcion de callback como ya vimos
en JS puro, y dentro de esta funcion ejecutaremos lo que queramos.

Creo que el metodo ready hace referencia al evento LOAD de JS, es decir, cuando
el document entero este ready pues ejecutamos lo que este dentro del callback*/

$(document).ready(function(){ //Lo mismo que hacer jQuery(document)
	console.log('Estamos listos!');

	//Selector de ID
	/*var rojo = No hace falta guardar nada en una variable si no vamos a reusar*/
	jQuery('#rojo').css('background', 'red')
			  .css('color', 'white');

	$('#amarillo').css('background', 'yellow')
				  .css('color', 'green');

	$('#verde').css('background', 'green')
			   .css('color', 'white');

	/*Con el metodo CSS podemos modificar cualquier propiedad de CSS, la primera
	hace referencia al apartado y la segunda al valor, Si queremos añadir mas cambios
	de estilo al mismo elemento, no hará falta que volvamos a seleccionar el elemento
	podemos ver como volver a usar el metodo .css para seguir añadiendo*/
});



