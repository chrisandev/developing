'use strict'

/*EJERCICIO 18- CALCULADORA
Se pide: que el usuario introduzca 2 numeros, si metemos uno mal que nos el 
programa nos lo vuelva a pedir.
En el cuerpo de la pagina, en una alerta y por la consola mostraremos el 
resultado de multiplicar, sumar, restar y dividir esas dos cifras*/


var numero1= parseInt(prompt('Introduce un numero'));
var numero2= parseInt(prompt('Introduce  otro numero'));

while(isNaN(numero1) || numero1 < 0 || isNaN(numero2) || numero2 < 0){
	numero1= parseInt(prompt('Introduce un numero'));
	numero2= parseInt(prompt('Introduce  otro numero'));
}

var resultadoHTML = numero1+' + '+numero2+' es igual a: '+(numero1+numero2)+'</br>'+
					numero1+' - '+numero2+' es igual a: '+(numero1-numero2)+'</br>'+
					numero1+' * '+numero2+' es igual a: '+(numero1*numero2)+'</br>'+
					numero1+' / '+numero2+' es igual a: '+(numero1/numero2)+'</br>';

var resultadoCMD = numero1+' + '+numero2+' es igual a: '+(numero1+numero2)+'\n'+
				   numero1+' - '+numero2+' es igual a: '+(numero1-numero2)+'\n'+
				   numero1+' * '+numero2+' es igual a: '+(numero1*numero2)+'\n'+
				   numero1+' / '+numero2+' es igual a: '+(numero1/numero2)+'\n';

console.log(resultadoCMD);
alert(resultadoCMD);
document.write(resultadoHTML);





			

