'use strict'

/*EJERCICIO 1
Se piden 2 numeros al usuario, el programa debera mostrar por pantalla
o consola si ambos son iguales, cual es el mayor y cual es el menor
Hay que tener en cuenta que la funcion prompt devuelve un string
PLUS
En caso de que introduzcamos un numero menor o igual a 0, o algo que no sea un
numero, que nos el programa vuelva a pedir al usuario que introduzca los 
numeros*/

var numero1 = parseInt(prompt('Introduce un numero'));
var numero2 = parseInt(prompt('Introduce un numero'));

while( isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0){

	var numero1 = parseInt(prompt('Introduce un numero'));
	var numero2 = parseInt(prompt('Introduce un numero'));
}

if( numero1 == numero2 ){
	alert('Ambos numeros son iguales')
}else if(numero1 > numero2){
	alert('El numero 1 es mayor que el numero 2')
}else if(numero2 > numero1){
	alert('El numero 2 es mayor que el numero 1')
}else{
	alert('Introduce un numero')
}



