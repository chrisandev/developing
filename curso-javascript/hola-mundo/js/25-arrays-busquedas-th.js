'use strict'

/*METODOS DE BUSQUEDA EN ARRAYS*/

var lenguajes = new Array('PHP', 'Go', 'JS', 'Java', 'Python');

/*Metodo find*/

var busquedaTexto = lenguajes.find( lenguaje => lenguaje == 'Python');
console.log(busquedaTexto);

/*Metodo findIndex*/

var busquedaIndice = lenguajes.findIndex( indice => indice == 'PHP');
console.log(busquedaIndice);

/*Metodo some*/

var numeros= [5, 20, 30, 60, 100];

var busquedaNumero = numeros.some( numero => numero <= 5);


