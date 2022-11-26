'use strict'

/*Mostrar todos los numeros divisores desde el 1 al numero que nos pase el usuario, un numero es divisor
siempre y cuando al ser dividido, su resto de 0*/

var numero1=parseInt(prompt('Introduce un numero',0));

for(var i=1;i<numero1;i++){

if(numero1%i == 0){
	console.log('El numero '+i+' es divisor de '+numero1+' y su resto da 0');
}
}

//Ejemplo, si introdujeramos el numero 99, los resultados serian: 1, 3, 9, 11 y 33. Si dividimos cualquiera de esos numeros al 99, 
//el resto daria 0 y serian catalogados como divisores.