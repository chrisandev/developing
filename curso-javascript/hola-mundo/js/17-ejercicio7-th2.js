'use strict'

/*EJERCICIO 7
Se pide: la tabla de multiplicar de un numero introducido por el usuario.
Tras esto mostraremos todas las tablas del 1 al 10*/

var numero= parseInt(prompt('Introduce un numero'));

document.write('<h1>Tabla del numero: '+numero+'</h1>');

for(var i =1; i<=10; i++){
	document.write(numero+' por '+i+' igual a: '+(numero*i)+'</br>');
}

document.write('<h1>Y ahora todas  las tablas de multiplicar</h1>');

for( var i =1; i<=10; i++){
	document.write('<h2>Tabla del: '+i+'</h2>');

	for( var j=1; j<=10; j++){
		document.write(i+' por '+j+' igual a: '+(i*j)+'</br>')
	}
}
