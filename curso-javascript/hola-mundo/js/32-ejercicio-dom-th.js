'use strict'

/*Enunciado del ejercicio en el HTML*/

window.addEventListener('load', ()=>{

var formulario= document.querySelector('#formulario');
var dashed= document.querySelector('.dashed');
dashed.style.display = 'none';

//Evento submit, se hace sobre el formulario

formulario.addEventListener('submit', function(){

	var nombre= document.getElementById('nombre').value;
	var apellidos= document.getElementById('apellidos').value;
	var edad= document.querySelector('#edad').value;

		if(nombre.trim() == null || nombre.trim().length <=0){
		alert('El nombre no es válido');
		document.querySelector('#errorNombre').innerHTML = 'El nombre no es correcto';
		return false; //El return false, es para que impida seguir
	}else{
		document.querySelector('#errorNombre').style.display = 'none';
	}
		if(apellidos.trim() == null || apellidos.trim().length <=0){
		alert('Los apellidos no son válidos');
		document.querySelector('#errorApellidos').innerHTML = 'Los apellidos  no son validos';
		return false;
	}else{
		document.querySelector('#errorApellidos').style.display = 'none';
	}
		if(edad.trim() == null || edad.trim().lenght <= 0 || edad.trim() <=0 || isNaN(edad)){
		alert('La edad no es válida');
		document.querySelector('#errorEdad').innerHTML = 'La  edad no es valida';
		return false;
	}else{
		document.querySelector('#errorEdad').style.display = 'none';
	}

	dashed.style.display ="block";



	/*PRIMERA FORMA DE MOSTRARLO, NO SALE BIEN CON BUEN ESTILO
	var parrafo= document.createElement('p');
	parrafo.append(nombre);
	parrafo.append(apellidos);
	parrafo.append(edad);
	dashed.append(parrafo);
	*/

	/*SEGUNDA FORMA, LA MAS OPTIMA SI NO TIENES COSAS MUY HECHAS EN EL HTML
	var datosUsuario= [nombre, apellidos, edad];

	for(let indice in datosUsuario){
		var parrafo= document.createElement('p');
		parrafo.append(datosUsuario[indice]); 
		dashed.append(parrafo);
	}
	*/

	/*TERCERA FORMA, CON SPANS YA EN EL HTML, con el query selector asi se 
	recogen los spans que deviran de el id de otro elemento.*/
	var pNombre= document.querySelector('#p_nombre span');
	var pApellidos= document.querySelector('#p_apellidos span');
	var pEdad= document.querySelector('#p_edad span');

	pNombre.innerHTML = nombre;
	pApellidos.innerHTML = apellidos;
	pEdad.innerHTML = edad;

console.log('evento submit capturado');
});

});