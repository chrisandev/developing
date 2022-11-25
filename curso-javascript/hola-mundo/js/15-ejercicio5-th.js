'use strict'

/*Mostrar todos los numeros divisores desde el 1 al numero que nos pase el usuario, un numero es divisor siempre
y cuando al ser dividido, su resto de 0*/


var numero= parseInt(prompt('Introduce un numero'));


for( var i = 0; i <= numero; i++){

	if(i==0){
		document.write('<h1>Mostrando divisores y no divisores</h1><ul>');
	}

	if(numero%i == 0){
		document.write('<li>Numero divisor: '+i+'</li>');
	}
	else if( numero%i != 0){
		document.write('<li>Numero no divisor: '+i+'</li>');
	}
	if(i==numero){
		document.write('</ul>');
	}

}



