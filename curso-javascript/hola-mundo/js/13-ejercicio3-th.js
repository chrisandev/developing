'use strict'

/*Se pide: Hacer un programa que pida 2 numeros al usuario y despues, muestre todos los numeros que se
incluiran desde el primer numero, al segundo, ej: si introduce 4 y 9, deberá mostrar 5, 6, 7, 8 */

var numero1= parseInt(prompt('Introduce un numero'));

var numero2= parseInt(prompt('Introduce un numero'));


document.write('<h1>Mostrando los numeros entre el primero y el segundo</h1>');

for(var i = (numero1+1); i <numero2; i++){
	document.write('<li>Numero: '+i+'</li>');
}

