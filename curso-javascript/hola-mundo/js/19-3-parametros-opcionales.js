'use strict'

/*PARAMETROS OPCIONALES
Podremos pasarle parametros opcionales en la declaracion de una función,
estos tienen como diferencia que ya los inicializamos en su declaracion
por lo que el programa no va a exigir que los pasemos cuando invocamos 
la función*/

function calculadora(numero1, numero2, mostrar=true){

if(mostrar==true){ /*en true, lo mostrará por pantalla y en false, 
	por consola*/

document.write('numero 1 + numero 2 es igual a: '+(numero1+numero2)+'</br>'+
'numero 1 - numero 2 es igual a: '+(numero1-numero2)+'</br>'+
'numero 1 * numero 2 es igual a: '+(numero1*numero2)+'</br>'+
'numero 1 / numero 2 es igual a: '+(numero1/numero2)+'</br>');

}else{

console.log('numero 1 + numero 2 es igual a: '+(numero1+numero2)+'\n'+
'numero 1 - numero 2 es igual a: '+(numero1-numero2)+'\n'+
'numero 1 * numero 2 es igual a: '+(numero1*numero2)+'\n'+
'numero 1 / numero 2 es igual a: '+(numero1/numero2)+'\n');
}

}

calculadora(2, 4, false);
