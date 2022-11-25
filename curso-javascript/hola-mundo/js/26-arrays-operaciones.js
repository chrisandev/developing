'use strict'


var peliculas=['la verdad duele','gran torino','la vida es bella'];

/*
var elemento= "";

do{
elemento= prompt("Introduce tu pelicula");
peliculas.push(elemento);

}while(elemento!= "ACABAR");
*/

/*
peliculas.pop(); //Asi eliminamos el ultimo elemento del array, en este caso seria ACABAR que no nos interesa, si añadimos otro 
//peliculas.pop(); pues borrariamos tambien el penultimo

peliculas[0] = undefined; //Asi ponemos un elemento en undefined, no es lo mismo que borrar, es cambiar su estado.
*/
//peliculas.push("Batman"); //PUSH, para añadir un elemento al array que instanciemos.

/*
var indice=peliculas.indexOf('gran torino'); //Con indexOf averiguamos cual es la posicion en el indice del elemento, en este caso 1
console.log(indice);
*/

var indice=peliculas.indexOf('gran torino'); //Con indexOf averiguamos cual es la posicion en el indice del elemento, en este caso 1

if(indice > -1){ //Si es mayor que -1 significa si existe. ya que -1 es lo que se muestra cuando algo no existe
	peliculas.splice(indice, 1) //Con splice eliminamos el elemento numero que sea del array que instanciemos, en este caso 1
}

var peliculas_string= peliculas.join(); //Asi pasamos un array a una linea de string, con cada elemento indivisible separado por comas.
//Es necesario crear una variable por que la funcion join no procesa sin mas el array como el splice, x ej, necesita almacenarse

console.log(peliculas);

var cadenatexto= "texto1, texto2, texto3";
var cadena_array= cadenatexto.split(", "); //Metodo split transforma, en este caso, todo lo que este entre "" con coma y espacio seguido.

console.log(cadenatexto);
