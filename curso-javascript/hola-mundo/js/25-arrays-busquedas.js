'use strict'

/*METODOS  DE BUSQUEDA DENTRO PARA ARRAYS*/

var lenguajes=new Array('JavaScript', 'Java', 'Python', 'Kotlin', 'Go');

/*Metodo Find, se le ha de pasar una función de callback y devolverá
un string con el elemento en caso de ser encontrado, de lo contrario
devolverá undefined*/

/*
Existen estas 3 formas de hacer el callback

var busquedaTexto= lenguajes.find(function(lenguaje){
	return lenguaje == 'Java';
})

var busquedaTexto = lenguajes.find((lenguaje) =>{
	return lenguaje == 'Java';
});
Con la flecha no es necesario usar parentesis en el parametro y además
también incorpora el return, es la manera más optima
*/
var busquedaTexto = lenguajes.find( lenguaje => lenguaje == 'Java');

console.log(busquedaTexto);

/*Método findIndex, igual que el metodo find, pero devuelve la posicion
en el indice del array*/

var busquedaIndex = lenguajes.findIndex ( lenguaje => lenguaje == 'Java');

console.log(busquedaIndex);

/*Método some, devuelve true o false si encuentra la condicion sobre el 
numero que indiquemos, requiere un callback  al igual que los restantes 
métodos*/

var numeros= [5,20,30,60,90];

var busquedaNumeros = numeros.some( numero => numero <= 5);
console.log(busquedaNumeros);