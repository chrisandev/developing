'use strict'

/*DOM
Document Object Model */

/*Para seleccionar un elemento por ID*/
//var caja= document.getElementById('micaja');
var caja = document.querySelector('#micaja'); //Manera mas elegante	
console.log(caja);

//Para obtener el texto del elemento seleccionado
var textoCaja= caja.innerHTML;

//Para modificar el texto del elemento basta con agregarlo al innerHTML
textoCaja = caja.innerHTML = 'TEXTO EN LA CAJA DESDE JS!!';
console.log(textoCaja);

//Para agregar o modificar estilos css al elemento HTML

function cambiaColor(color){
	caja.style.backgroundColor = color;
}

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
cambiaColor('green');

//Podemos añadir una propiedad de clase al elemento HTML

caja.className = 'hola';

console.log(caja);








