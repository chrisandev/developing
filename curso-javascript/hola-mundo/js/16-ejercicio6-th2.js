'use strict'

/*EJERCICIO 6
Se pide: Introducir un numero por pantalla, en caso de no ser valido volverlo
a pedir, una vez sea  valido indicar si es par o impar*/

var numero= Number(prompt('Introduce un numero'));

while( isNaN(numero)){
	numero= Number(prompt('Introduce un numero'));

}

if(numero % 2 == 0 ){
	document.write('El numero es par')
}else{
	document.write('El numero es inpar')
}