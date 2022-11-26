'use strict'

/*Se pide: 
Hacer un formulario con un campo para escribir peliculas y un boton para almacenarlas en el local
storage, despues de eso mostraremos en una lista mediante la web las peliculas guardadas.
Tras ello, crearemos otro formulario donde podamos escribir una pelicula a borrar de la lista.*/

var formulario = document.querySelector('#formpeliculas');

formulario.addEventListener('submit', function(){

	var titulo = document.querySelector('#addpelicula').value; /*Importante el .value*/

	if(titulo.length >= 1){ /*Para no añadir submits en blanco*/
	localStorage.setItem(titulo, titulo);
	}

});

var ul = document.querySelector('#peliculas-list');

for (var i in localStorage){

	if(typeof localStorage[i] == 'string'){ /*Para que no se añadan funciones o otras cosas*/
	var li = document.createElement('li'); /*Tendrá el valor  del elemento que estoy
	 recorriendo en esa iteracion*/
	li.append(localStorage[i]);
	ul.append(li);
	}

}

var formulariob = document.querySelector('#formBorrarPeliculas');

formulariob.addEventListener('submit', function(){

	var titulo = document.querySelector('#borraPelicula').value;

	if(titulo.length >= 1){
	localStorage.removeItem(titulo);
	}

});