'use strict'

window.addEventListener('load', function(){
console.log('DOM cargado');

var formulario = document.querySelector('#formulario');

var box_dashed = document.querySelector('.dashed');
box_dashed.style.display = "none";

formulario.addEventListener("submit", function(){ /*El evento se llama submit, da igual como se llame
	el ID, ´los eventos tienen sus propios nombres*/
	console.log('Evento submit capturado');

	var nombre = document.querySelector('#nombre').value; /*Con la propiedad .value almacenaremos
	la informacion de su interior, en este caso lo que rellenemos en el formulario mediante la web*/
	var apellidos = document.querySelector('#apellidos').value;
	var edad = document.querySelector('#edad').value;

	box_dashed.style.display = "block"; /*Cuando hagamos submit lo mostraremos*/

	//FORMA 2 DE REALIZARLO, JUNTO CON LO CREADO EN EL HTML

	var p_nombre = document.querySelector('#p_nombre span'); //Asi seleccionamos el span
	var p_apellidos = document.querySelector('#p_apellidos span');
	var p_edad = document.querySelector('#p_edad span');

	p_nombre.innerHTML = nombre;
	p_apellidos.innerHTML = apellidos;
	p_edad.innerHTML = edad;


	/* FORMA UNO DE REALIZARLO
	var datos_usuario = [nombre, apellidos, edad];

	for(var indice in datos_usuario){
		var parrafo = createElement('p');
		parrafo.append(datos_usuario[indice]);
		box_dashed.apppend(parrafo);
	}
	*/

	parrafo.append(nombre);
	parrafo.append(apellidos);
	parrafo.append(edad);

});
});



