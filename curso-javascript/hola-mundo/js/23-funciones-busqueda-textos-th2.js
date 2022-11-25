'use strict'

/*Funciones de busqueda en textos, las más comunes*/

var texto='Hola, soy Christian Sánchez Christian';

//indexOf
var busqueda= texto.indexOf('Christian');
console.log(busqueda);

//lastIndexOf
var busqueda= texto.lastIndexOf('Christian');
console.log(busqueda);

//match
var busqueda= texto.match('Christian'); //busqueda unica
console.log(busqueda);

var busqueda= texto.match(/Christian/g); //busqueda global
console.log(busqueda);

//substr 
var busqueda= texto.substr(10, 9); 
console.log(busqueda);

//charAt
var busqueda= texto.charAt(10);
console.log(busqueda);

//startsWith y endsWith
var busqueda= texto.startsWith('Hola, soy');
console.log(busqueda);

var busqueda= texto.endsWith('tian');
console.log(busqueda);

//Includes
var busqueda= texto.includes('Sánchez');
console.log(busqueda);
