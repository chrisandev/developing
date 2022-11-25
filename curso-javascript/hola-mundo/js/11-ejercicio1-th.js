/*Se pide un programa que pida 2 nuneros y nos diga, cual es el mayor, el menor, y si son iguales*/
//PLUS: Si los numeros no son un numero o son menores o iguales a cero, que nos los vuelva a pedir.

'use strict'

var numero1;

var numero2;

//Se puede hacer con un do/while o con un while
do{

numero1=parseInt(prompt('Introduce un numero'));

numero2=parseInt(prompt('Introduce otro numero'));
	
}while(isNaN(numero1) || isNaN(numero2) || numero1 <=0 || numero2 <=0);


if(numero1 > numero2){
	document.write('El numero 1 es mayor que el 2');

}else if(numero1 < numero2){
	document.write('El numero 2 es mayor que el 1');

}else if(numero1 == numero2){
	document.write('Ambos numeros son iguales');
}

