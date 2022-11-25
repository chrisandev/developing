'use strict'

/*Pedir un numero y mostrar su tabla de multiplicar en propia pagina web*/


var numero=parseInt(prompt('Introduce el numero de tabla multiplicar que quieras'));

document.write('<h1>Mostrando tabla de multiplicar del: '+numero+'</h1>');

for (var i=1; i<=10; i++){

	document.write('<li>'+numero+' por '+i+', es = a: '+numero*i +'</li>');
}