'use strict'

/*DOM: Document Object Model
Utilizar y usar elemento del documento HTML mediante JS para interactuar con el,
la verdadera esencia de JavaScript*/

//Seleccionar elemento del HTML en JS, hay 2 formas

var caja= document.getElementById('micaja');
var caja= document.querySelector('#micaja'); //Forma óptima

// Obtener texto del elemento

var textoCaja= caja.innerHTML;
console.log(caja);

// Cambiar el texto que contiene

textoCaja= caja.innerHTML = 'texto cambiado desde JS';

//Modificar los estilos CSS del elemento mediante JS

function cambiaBackground(color){
	caja.style.backgroundColor= color;
}

cambiaBackground('red');
caja.style.padding= `20px`;
caja.style.color= 'white';
caja.style.fontSize= '30px';

//Añadir una clase al elemento y darle nombre

	caja.className= 'nueva clase';
	console.log(caja);



