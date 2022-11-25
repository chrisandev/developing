'use strict'

/*PARAMETROS OPCIONALES
Aquellos que inicializamos al declarar la función por lo que el programa
ya no exigirá que los inicialicemos al invocar a la función puesto que ya 
lo estan*/

function calculadora(numero1, numero2, mostrar = true){

	if(mostrar == true){ //Muestralo por pantalla web
document.write('Num1 + num2 es igual a: '+(numero1+numero2)+'</br>'+
	'Num1 - num2 es igual a: '+(numero1-numero2)+'</br>'+
	'Num1 * num2 es igual a: '+(numero1*numero2)+'</br>'+
	'Num1 / num2 es igual a: '+(numero1/numero2)+'</br>')

	}else{ //Muestralo por consola
	console.log('Num1 + num2 es igual a: '+(numero1+numero2)+'\n'+
	'Num1 - num2 es igual a: '+(numero1-numero2)+'\n'+
	'Num1 * num2 es igual a: '+(numero1*numero2)+'\n'+
	'Num1 / num2 es igual a: '+(numero1/numero2)+'\n')	
	}
}

calculadora(2, 4, true);