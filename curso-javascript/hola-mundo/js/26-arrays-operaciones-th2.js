'use strict'

/*OPERACIONES CON ARRAYS, Metodos*/

var peliculas= new Array('mision imposible', 'arma letal', 'tarzan');

/*Metodo push, añade un elemento al array*/


do{

var elemento= prompt('Introduce un elemento para tu array');
peliculas.push(elemento);

}while(elemento != "SALIR");

console.log(peliculas);

/*Metodo pop, borra el ultimo elemento de tu array*/

peliculas.pop();
console.log(peliculas);

/*Metodo splice, borra un elemento concreto de tu array*/

var palabraABorrar= prompt('Introduce el nombre de un elemento a borrar');

var indice= peliculas.lastIndexOf(palabraABorrar); //Esto me da su posicion de index

if(indice > -1){
	peliculas.splice(indice, 1);
	console.log(peliculas);
}
console.log(peliculas);

/*Metodo join, transforma un array a un string*/

var arrayToString = peliculas.join();
console.log(arrayToString);

/*Metodo split, transforma un string a un array*/

var cadena= 'texto1, texto2, texto3';
var cadenaToArray= cadena.split(', ');
console.log(cadenaToArray);

/*Metodo sort, ordena alfabeticamente los elementos  de un array*/

peliculas.sort();
console.log(peliculas);

/*Metodo reverse, invierte  el orden de los elementos de un array*/

peliculas.reverse();
console.log(peliculas);




