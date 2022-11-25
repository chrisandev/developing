'use strict'

/*EJERCICIOS CON ARRAYS

Se pide un programa que: 
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la
pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si 
encuentra y su indice (Se valorará el uso de funciones)*/

//1. Pida 6 numeros por pantalla y los meta en un array

var numeros=[];

for(var i = 0; i < 6; i ++){
	numeros[i]= prompt('Introduce un numero');
}

/*
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la
pagina y en la consola
*/

document.write('<h2>Mostrando array con todos sus elementos</h2>');
numeros.forEach(function(elemento, indice, array){
	document.write('indice: '+indice+', elemento: '+elemento+
	'-( array entero: '+array+')</br>');
})
console.log('Mostrando array');
console.log(numeros);

/*3. Ordenarlo y mostrarlo*/

/*sort devuelve el rdo ordenado alfabeticamente y en el caso de los numeros,
solo tiene en cuenta el primero de ellos, con esta funcion si lo hace, si 
quiero el orden descendente, el return seria b-a*/
numeros.sort(function(a,b){return a-b});
console.log('Array ordenado de menor a mayor');
console.log(numeros);

document.write('<h2>Array ordenado de menor a mayor</h2>');
numeros.forEach(function(elemento, indice, array){
	document.write('indice: '+indice+', elemento: '+elemento+
	'-( array entero: '+array+')</br>');
})

//4. Invertir su orden y mostrarlo

numeros.reverse();

document.write('<h2>Mostrando array</h2><ul>');
	numeros.forEach(function(elemento, indice){
		document.write('<li>'+indice+'- '+elemento+'</li>');
	})
	document.write('</ul>');

console.log('Array invertido');
console.log(numeros);

//5. Mostrar cuantos elementos tiene el array

document.write('<h2>El array tiene: '+numeros.length+' elementos</h2>');
console.log('El array tiene: '+numeros.length+' elementos');

/*6. Busqueda de un valor introducido por el usuario, que nos diga si 
encuentra y su indice (Se valorará el uso de funciones)*/

var busquedaNumero = numeros.some(numero => numero <= 10);
var busquedaIndice = numeros.findIndex(numero => numero == 10);
document.write('<h2>¿Encontraste el numero? '+busquedaNumero+
	', su indice es: '+busquedaIndice+'</h2>');

console.log('¿Encontraste el numero? '+busquedaNumero+', su indice es '
	+busquedaIndice);








