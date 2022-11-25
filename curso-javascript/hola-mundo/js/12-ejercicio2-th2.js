'use strict'

/*EJERCICIO 2
Se pide: Utilizando un bucle, mostrar la suma y la media de los numeros 
introducidos hasta introducir un numero negativo y ahi mostrar el resultado*/


var numero;
var contador=0;
var sumatorio=0;

do{

numero= parseInt(prompt('Introduce un numero'));

	if(isNaN(numero)){
		numero= 0;
	}else if(numero >= 0){
		contador++;
		sumatorio+=numero;
	}

}while(numero >= 0);

alert('El total de los numeros introducidos es de '+sumatorio);
alert('La media de estos es de '+(sumatorio/contador));