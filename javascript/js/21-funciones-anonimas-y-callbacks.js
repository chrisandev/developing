'use strict'

/*FUNCIONES ANONIMAS Y CALLBACKS
Funciones anonimas: son funciones que no estan declaradas como function
si no que actuan como una funcion y son asignadas como tal pero de manera
indirecta, podemos asignarla a una variable
Son funciones que no tienen nombre.*/

var pelicula = function(nombre){
	return 'La pelicula es: '+nombre;
} 

pelicula('arma letal'); 

/*Callbacks
Son  funciones anonimas que son pasadas como parametro a otra funcion
y que luego se ejecutan dentro de otras funciones*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar= numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

/*Al invocar a la funcion creamos la o las funciones  de callback que son 
llamadas dentro de la funcion principal, no tienen nombre como declaracion
de funcion pero si tienen asignada un nombre variable en los  parametros
para luego poder invocar estas nuevas funciones de callback, una vez 
programemos lo que queremos que hagan estas funciones las podemos enlazar
a la funcion  principal y hacer que se invoquen al ejecutarse.
La logica de los callbacks  se programa en la invocacion de la funcion 
principal  */

sumame(5, 7, function(dato){
	console.log('La suma es: '+dato);
},
function(dato){
	console.log('La suma por dos, es: '+(dato*2));
});

