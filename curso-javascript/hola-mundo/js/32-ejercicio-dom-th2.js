'use strict'

/*EJERCICIO DOM
- Se pide:
1. Hacer un formulario con los campos, nombre, apellidos y edad
2. Hacer un boton submit y crear el evento submit
3. Dentro del evento submit hacer que al hacer clic en el se pinten los datos
introducidos en el formulario por pantalla de 3 formas  distintas.
4. Realizaremos una validacion del formulario para verificar que todos los datos estan correctos
de lo contrario, no podremos avanzar, mostrará el error por pantalla*/

/*Recordemos que el evento submit se realiza sobre el formulario y no sobre
el boton submit*/


window.addEventListener('load', ()=>{

var formulario= document.querySelector('#formulario');

var dashed= document.querySelector('.dashed');
dashed.style.display = 'none';

formulario.addEventListener('submit', ()=>{

	var nombre= document.getElementById('nombre').value;
	var apellidos= document.getElementById('apellidos').value;
	var edad= document.getElementById('edad').value;

	//VALIDACION DEL FORMULARIO

	if(nombre.trim() == null || nombre.trim().length <= 0){
		alert('EL nombre no es correcto');
		document.querySelector('.nombre').innerHTML = 'El nombre no es correcto';
		return false;
	}else{
		document.querySelector('.nombre').style.display = 'none';
	}
		if(apellidos.trim() == null || apellidos.trim().length <= 0){
		alert('Los apellidos no son correctos');
		document.querySelector('.apellidos').innerHTML = 'Los apellidos no son correctos';
		return false;
	}else{
		document.querySelector('.apellidos').style.display = 'none';
	}
		if(edad.trim() == null || edad.trim().length <= 0 || edad.trim() <= 0 || isNaN(edad.trim())){
		alert('La edad no es correcta');
		document.querySelector('.edad').innerHTML = 'La edad no es correcta';
		return false;
	}else{
		document.querySelector('.edad').style.display = 'none';
	}


	dashed.style.display= 'block';

	/*1 MODO SACAR LOS  DATOS EN UN PARRAFO SIN STYLE ALGUNO*/

	/*
	var parrafo= document.createElement('p');
	parrafo.append(nombre);
	parrafo.append(apellidos);
	parrafo.append(edad);
	dashed.append(parrafo);
	*/

	/*2 MODO RECORRER LOS ELEMENTOS Y PINTARLOS CON STYLO FORMATEADO*/

	var datosUsuario= [nombre, apellidos, edad];

	/*
	for( let indice in datosUsuario){
		var parrafo= document.createElement('p');
		parrafo.append(datosUsuario[indice]);
		dashed.append(parrafo);	
	}
	*/

	/*3 MODO USAR SPANS DE  HTML Y PINTAR LA INFORMACION  AL  LADO DE CADA UNA*/

	var pNombre= document.querySelector('#p_nombre');
	var pApellidos= document.querySelector('#p_apellidos');
	var pEdad= document.querySelector('#p_edad');

	pNombre.append(nombre);
	pApellidos.append(apellidos);
	pEdad.append(edad);

})

});