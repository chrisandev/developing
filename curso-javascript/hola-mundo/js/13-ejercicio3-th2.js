'use strict'

/*EJERCICIO 3
Se pide: Que el usuario introduzca 2 numeros, y que el programa muestre todos
los numeros comprendidos entre el primero y el segundo*/

var numero1= parseInt(prompt('Introduce un numero'));
var numero2= parseInt(prompt('Introduce un numero'));

document.write('<h2>Entre el primer y el segundo numero, estan los siguientes</h2>');

for(var i = numero1; i <= numero2; i++){
	document.write('<h3>'+i+'</h3>');
}

