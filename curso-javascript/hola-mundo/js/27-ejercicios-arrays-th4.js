'use strict'

/*EJERCICIOS ARRAYS

Se pide un programa que: 
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la
pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si 
encuentra y su indice 
(Se valorará el uso de funciones)
*/

//1. Pida 6 numeros por pantalla y los meta en un array

var numeros= [];

for( var i = 0; i < 6; i++){
	numeros[i]=parseInt(prompt('Introduce un numero en tu array'));
}

/*2. Mostrar el array entero (todos sus elementos) en el cuerpo de la
pagina y en la consola*/

function mostrarArray(array, texto=""){
	document.write('<h1>Mostrando el array '+texto+'</h1><ul>');
	array.forEach((elemento, indice, array) => {
			document.write('<li>'+indice+'-'+elemento+'</li>');
	});
	
	document.write('</ul>');
};

mostrarArray(numeros, "con todos sus elementos");

console.log(numeros);

/*3. Ordenarlo y mostrarlo*/

numeros.sort(function(a, b){
	return a-b
});

mostrarArray(numeros, 'ordenado ascendentemente');

//4. Invertir su orden y mostrarlo

numeros.reverse();

mostrarArray(numeros, 'descendentemente');

//5. Mostrar cuantos elementos tiene el array

document.write(`<h1>El array tiene: `+numeros.length+' elementos<h1>');

/*6. Busqueda de un valor introducido por el usuario, que nos diga si 
encuentra y su indice */

var elemento_busqueda= parseInt(prompt('Introduce un elemento a buscar'));

var busqueda= numeros.find(numero => numero == elemento_busqueda);

var busquedaIndex= numeros.findIndex(indice => indice == elemento_busqueda);

if(busqueda == elemento_busqueda){
	document.write('<h1>El elemento buscado existe, es '+busqueda+
		' y su indice es '+busquedaIndex+'<h1>');
}else{
	document.write('<h1>El elemento buscado no existe<h1>');
}



