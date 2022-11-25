'use strict'

/*FUNCIONES DENTRO DE OTRAS
Para no hacer trozos de codigo tán largos en una sola función, podemos
hacer diversas funciones que almacenen fragmentos de cogido más pequeños
y que otra función llame a las distintas funciones con el trocito de codigo
para no hacer funciones tan grandes e ilegibles*/

function porConsola(numero1, numero2){
	console.log('Num1 + num2 es igual a: '+(numero1+numero2)+'\n'+
	'Num1 - num2 es igual a: '+(numero1-numero2)+'\n'+
	'Num1 * num2 es igual a: '+(numero1*numero2)+'\n'+
	'Num1 / num2 es igual a: '+(numero1/numero2)+'\n')
}

function porPantalla(numero1, numero2){
	document.write('Num1 + num2 es igual a: '+(numero1+numero2)+'</br>'+
	'Num1 - num2 es igual a: '+(numero1-numero2)+'</br>'+
	'Num1 * num2 es igual a: '+(numero1*numero2)+'</br>'+
	'Num1 / num2 es igual a: '+(numero1/numero2)+'</br>')
}

function calculadora(numero1, numero2, mostrar = true){

	if(mostrar == true){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
}

calculadora( 2, 4, true);