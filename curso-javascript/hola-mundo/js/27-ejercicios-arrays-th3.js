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

for(var i= 0; i <6; i++){
	//numeros[i]= parseInt(prompt('Introduce un numero'));
	numeros.push(parseInt(prompt('Introduce un numero')));
}

console.log(numeros);

/*2. Mostrar el array entero (todos sus elementos) en el cuerpo de la
pagina y en la consola*/

function mostrarArray(array, texto=""){
	document.write('<h1>Mostrando array '+texto+'</h1><ul>');

	array.forEach(function(elemento, indice, array){
		document.write('<li>'+indice+'- '+elemento+'</li>')
	})
	document.write('</ul>');

	console.log(numeros);
}

mostrarArray(numeros); //Usamos la funcion para mostrarlo

//3. Ordenarlo (ascendentemente) y mostrarlo

numeros.sort(function(a,b){
	return a-b
});

mostrarArray(numeros, 'ordenado ascendentemente');

//4. Invertir su orden y mostrarlo

numeros.reverse();

mostrarArray(numeros, 'ordenado descendentemente');

//5. Mostrar cuantos elementos tiene el array

document.write('<h1>El array tiene '+numeros.length+' elementos</h1>');

/*6. Busqueda de un valor introducido por el usuario, que nos diga si 
encuentra el valor y su indice*/

var elem_busqueda= parseInt(prompt('Introduce un elemento del array para buscarlo'));

var busqueda=numeros.find(numero => numero == elem_busqueda);
document.write('<h1>Tu busqueda de elemento tiene como rdo: '+busqueda+'</h1>');

var busquedaIndex= numeros.findIndex(indice => indice == elem_busqueda);
(function(indice){
	return indice == 
})
document.write('<h1>Tu busqueda de indice tiene como rdo: '+busquedaIndex+'</h1>');






