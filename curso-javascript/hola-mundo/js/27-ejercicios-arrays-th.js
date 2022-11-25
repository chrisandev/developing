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

//Ej 1

var arraycito = [];

for(var i = 0; i <= 5; i ++ ){
	arraycito[i] = parseInt(prompt('Introduce un numero para tu array: ',0));
}

//Ej 2

//CREANDO FUNCION PARA MOSTRAR ARRAY

function mostrarArray(nombre_array, textoCustom=""){
	document.write('<ul><h1>Mostrando tu array: '+textoCustom+'</h1>');

	arraycito.forEach((numero, indice) => {
		document.write('<li>Numero: '+numero+' Posicion: '+indice+'</li>');
	});
	document.write('</ul>');
};

mostrarArray(arraycito,);

console.log('Mostrando el array: '+arraycito);

//Ej 3

arraycito.sort(function(a,b){return a-b});

mostrarArray(arraycito, 'ordenado');

//Ej 4

arraycito.reverse();

mostrarArray(arraycito, 'desordenado');

//Ej 5

document.write('<h2>El array tiene: '+arraycito.length+' elementos');

//Ej 6

var busqueda = parseInt(prompt('Introduce un numero a buscar ',0));

var posicion = arraycito.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
	document.write('<h2>ENCONTRADO, ESTA EN LA POSICION: '+posicion);
}else{

	document.write('<h2>NO ENTONTRADO');
};

