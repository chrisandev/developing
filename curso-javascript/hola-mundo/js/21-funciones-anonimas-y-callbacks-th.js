'use strict'

/*FUNCIONES ANONIMAS Y DE CALLBACK
Funciones  anonimas: No tienen nombre y se pueden asignar a una variable
normal, luego se pueden invocar con el nombre de la variable pasandole los 
parametros  de la funcionn, son funciones abstraidas.
Le estamos  dando a una variable el valor de una funcion*/

var fruta = function(dato){
	console.log('La fruta es: '+dato);
}

fruta('pera');

/*CALLBACKS
Los callbacks son funciones  anonimas que se ejecutan dentro de otra
funcion, su logica se programa en la invocacion de la funcion main*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){

	var suma= numero1+numero2;
	sumaYmuestra(suma);
	sumaPorDos(suma);

	return suma;
}

sumame(5, 6, function(dato){
	console.log('La suma da: '+dato);
},
function(dato){
	console.log('La suma por dos da: '+(dato*2));
});

/*FUNCIONES FLECHA, es una manera actualizada  de invocar callbacks,
simplemente  substituimos function(dato){} por (dato) =>{} o, si queremos
no es necesario ponerle parentesis al parametro, En resume, substituimos 
la palabra function por una flecha =>, quitamos los parentesis al parametro
y, invertimos su orden de declaracion. Esto es una forma mas limpia de 
escribir codigo, corresponde a los nuevos estandares de JS. */






