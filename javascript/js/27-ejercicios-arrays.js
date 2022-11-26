'use strict'

/*
EL PROGRAMA DEBE REALIZAR LAS SIGUIENTES ACCIONES

1- Pedir 6 numeros por pantalla y almacenarlos en un array
2- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3- Ordenarlo y mostrarlo
4- Invertir su orden y mostrarlo
5- Mostrar cuantos elementos tiene el array
6- Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (o posición).
(Se valorará el uso de funciones)
*/

function mostrarArray(elementos_array, textoCustom = ""){ //FUNCION PARA MOSTRAR EL ARRAY, LA REUTILIZAREMOS
	//en elementos_array le pasaremos el nombre del array, en este caso numeros, texto custom no es necesario pasarlo.

document.write('<h2>Contenido del array '+textoCustom+'</h2>');
document.write(`<ul>`);

elementos_array.forEach((elemento, indice, array) => { 
	document.write('<li>'+elemento+', en la posicion: '+indice+'</li>'); //El li ya genera un </br>
});
document.write('</ul>');
}


//EJ 1

var numeros = new Array (6); //Los objetos deben empezar por letra mayuscula. Le indicamos que es un array con 6 elementos
//var numeros = []; Tambien se puede declarar de modo normal asi.

for(var i=0; i <=5; i++){
numeros[i] = parseInt(prompt('Introduce un numero', 0));
/*numeros.push(parseInt(prompt('Introduce un numero', 0))); //Otra manera de añadir elementos al array es con la
funcion push */

} 

//EJ 2

//Cuerpo de la página

/*el parametro numero, mostrara los numeros, el indice mostrará la posicion, y el parametro array mostrará el array 
entero, posteriormente podemos instanciar el parametro que queramos con el callback, como necesario solo hace falta una 
variable que le de valor al numero, los nombres numero, indice y array son inventados, da igual como los llames. */

/*document.write('<h2>Contenido del array</h2>');

numeros.forEach((numero, indice, array) => { 
	document.write('<li>'+numero+', en la posicion: '+indice+'</li>'); 
});
*/

mostrarArray(numeros);

//Consola
console.log(numeros);

//EJ 3

//ORDENACION NUMERICA ASCENDENTE
numeros.sort(function(a, b){return a-b}); /*El metodo sort ordena alfabeticamente y numericamente pero en el ultimo caso,
no del todo. La funcion especifica para ordenar numeros no es simple como .sort, hay que hacer un callback 
por que no existe otro modo, esta seria la funcion para ordenar los numeros correctamente.*/

//ORDENACION NUMERICA DESCENDENTE
//numeros.sort(function(a, b){return b-a}); Solo cambia {return b-a}

//mostrarArray(numeros, 'ordenado');

//EJ 4 

/*
numeros.reverse();
mostrarArray(numeros, 'invertidos');
*/

//EJ 5

//Para mostrar cuantos elementos tiene un array bastará con aplicar la propiedad .length (no es una funcion();)

//document.write('<h1>El array tiene: '+numeros.length+' elementos</h1>');

//EJ 6

var busqueda = parseInt(prompt('Introduce un numero a buscar en el array', 0));

var posicion = numeros.findIndex( numero => numero == busqueda); /*Devuelve la posicion en el array, o -1 (que es 
no existe)*/
/*la funcion findIndex no se puede ejecutar sin el uso de una variable que almacence su valor, y ha de emplear una 
funcion de callback que sea la que retornará el valor a almacenar en dicha variable*/
/*Hay que pasarle un numero al findIndex
para que lo procese y a su vez, este tras procesar la funcion devolverá el resultado a la variable 
que hayamos creado*/


//Lo malo es que no reconoce las posiciones 0, no entiendo por que!

if(posicion && posicion != -1){ //Si posicion es true (se omite) y posicion es diferente a -1 (-1 signidica no existe)
	document.write("<hr/><h1>ENCONTRADO</h1>");
	document.write('<h1>Posicion de la busqueda en el array: '+posicion+'</h1><hr/>');
}else{
	document.write('<hr/><h1>NUMERO NO ENCONTRADO</h1><hr/>');
}











