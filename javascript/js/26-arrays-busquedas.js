'use strict'

/*TIPOS DE BUSQUEDA EN ARRAYS*/

var lenguajes = new Array("PHP", "JS", "Go", "Java"); //Declaramos un nuevo "objeto" de array

/*
Crearemos una funcion de callback, son funciones que crean una variable simplemente para poder realizar la funcion real
que es .find, esta funcion de callback con variable lenguaje, nos devolvera dentro  de la funcion un valor que usaremos
para la funcion principal
Devuelve el valor que pidamos buscar, en este caso PHP en caso de existir, si no, indicará undefined
*/

var busqueda = lenguajes.find(function(lenguaje){ 
	return lenguaje == "PHP";
});

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); FUNCION SIMPLIFICADA

/*
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); //.findIndex devuelve la posicion del elemento 
en el array

console.log(busqueda);
*/

/*FUNCION .SOME, DEVUELVE TRUE O FALSE SI SE CUMPLE O NO LA CONDICION, EN ESTE CASO LE PREGUNTAMOS SI HAY VALORES 
IGUALES A 10, PODEMOS USAR CUALQUIER OPERADOR DE COMPARACION, ESTA FUNCION NO PUEDE PROCESAR SOLA, NECESITA ALMACENAR
EN UNA VARIABLE*/

var precios = [10, 20, 50, 80, 12];

var busqueda = precios.some(precio => precio == 10); 

console.log(busqueda);



