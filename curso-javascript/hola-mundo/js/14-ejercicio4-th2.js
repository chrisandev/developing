'use strict'

/*EJERCICIO 4
Se pide: Mostrar todos los numeros impares entre 2 numeros introducidos por el 
usuario*/

var numero1= parseInt(prompt('Introduce el primer numero'));

var numero2= Number(prompt('Introduce el segundo numero'));

while(numero1 < numero2){
	numero1++;

	if(numero1 % 2 != 0){
		alert('el numero '+numero1+', es impar');
	}
}