'use strict'

/*EJERCICIO COMPLETO LOCAL STORAGE CON EVENTOS

Se pide:
1- Crear una cabecera que indique listado de peliculas, .
Un formulario con un campo de texto para introducir valores y un boton.
Luego un div o un apartado donde creemos una UL para luego ir pintando en LI´s los
valores que introduzca el usuario en el form mediante el boton
2- Hacer un evento onsubmit para que cuando se metan elementos  en el form, se 
guarden  en el localStorage y tambien se pinten en el div, filtraremos que lo que 
introduzca sea texto
3- Haremos otro campo en el form para borrar elementos introducidos del 
localStorage y del listado que esta pintado 
*/

window.addEventListener('load', ()=>{


var formulario= document.querySelector('#formPeliculas');

formulario.addEventListener('submit', ()=>{

var titulo= document.querySelector('#addPelicula').value;

if(titulo.length >= 1){
localStorage.setItem(titulo, titulo);//Guardamos como clave y valor lo mismo
}

}); //Finaliza  el evento submit

var ul= document.querySelector('#peliculas-list');
for(var i in localStorage){
	if(typeof localStorage[i] == 'string'){
		var li= document.createElement('li');
		li.append(localStorage[i]);
		ul.append(li);
	}
}

var formularioB= document.querySelector('#formBorrarPeliculas');

formularioB.addEventListener('submit', ()=>{

var titulo= document.querySelector('#borrarPelicula').value;

if(titulo.length >= 1){
localStorage.removeItem(titulo);//Guardamos como clave y valor lo mismo
}

}); //Finaliza  el evento submit









});//Fin evento load













