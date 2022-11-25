'use strict'

/*EJERCICIO 5

Se pide: pedir un numero por pantalla al usuario y mostrar todos sus numeros 
divisores. Un numero es divisor de otro cuando al dividirlo por ese numero
el resto es 0*/

var numero= Number(prompt('Introduce un numero'));

for(var i = 0; i <= numero; i++){

	if(numero%i == 0){
		console.log(i);
	}

}