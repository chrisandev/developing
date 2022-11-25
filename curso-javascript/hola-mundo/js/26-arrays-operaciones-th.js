'use strict'


/*OPERACIONES DISTINTAS CON ARRAYS*/

var peliculas= ['La vida es bella', 'Evil dead', 'Drive'];

/*Metodo push: Añade un elemento al array*/
/*
peliculas.push('Batman');
console.log(peliculas);

var elemento;

do{

	elemento=prompt('Introduce un elemento para tu array, ACABAR sale');
	peliculas.push(elemento);

}while(elemento != 'ACABAR');

console.log(peliculas);
*/
/*Metodo pop: Borra el último elemento del array*/
/*
peliculas.pop();
console.log(peliculas); //Borramos ACABAR que sobra.
*/
/*Metodo splice: borra un elemento concreto de nuestro  array*/

//Primero averiguamos en que indice se encuentra dentro del array
var indice= peliculas.indexOf('La vida es bella');
console.log(indice);

/*Si el resultado de indice es -1 significa que no lo ha encontrado,
entonces, si es mayor a -1, le hacemos el metodo splice a peliculas,
y pide 2 parametros, primero la variable del indice o como se llame, y luego
cuantos elementos quieres borrar a partir de ese en adelante, si escoges
uno, entonces solo borrara ese mismo elemento.*/
if(indice > -1){
	peliculas.splice(indice, 1);
}

console.log(peliculas);

/*Metodo join: transforma un array a un string*/

/*Hay que guardarlo en una variable por que este metodo no procesa de
otra forma*/
var peliculasString= peliculas.join();
console.log(peliculasString

/*Metodo split, transforma  un string a un array*/

var cadena= 'texto1, texto2, texto3';
var cadenaToArray = cadena.split(', '); 
/*a split se le pasa por parametro, un indicador que simboliza que cada 
cosa que este separada por exactamente los caracteres que le pasemos sera
definido como un elemento del array, por lo que los separadores en el string
deben ser homogeneos*/

console.log(cadenaToArray);

/*Metodo sort, ordena alfabeticamente los elementos del array*/

peliculas.sort();
console.log(peliculas);

/*Metodo reverse, invierte el orden  de los elementos  del array*/

peliculas.reverse();
console.log(peliculas);


