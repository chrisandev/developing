'use strict'

/*PARAMETROS REST Y SPREAD ...*/

//REST Recoge todos los argumentos sobrantes y los unifica en un array

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log('la fruta1 es '+fruta1);
	console.log('la fruta2 es '+fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Melon","Sandia","Kiwi","Platano");

//SPREAD usa los elementos de un array y asigna a cada uno, uno nuevo separado

var frutas = ["Melon","Sandia"];

listadoFrutas(...frutas, "Kiwi","Platano");


