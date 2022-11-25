'use strict'

/*Funciones con parametros.
Son funciones a las que le pasamos tantos parametros como queramos en su
declaración para hacerlas dinamicas y no estaticas.

el nombre de la variable pasada por parametro será el mismo nombre que 
se deberá reutilizar dentro de la función, pero al invocarla ese nombre
se reemplazará por el dato que queremos establecer, el numero, palabra 
que sea, etc*/

function calculadora(numero1, numero2){
	document.write(numero1+' + '+numero2+' es igual a: '+(numero1+numero2)+'</br>'+
		numero1+' - '+numero2+' es igual a: '+(numero1-numero2)+'</br>'+
		numero1+' * '+numero2+' es igual a: '+(numero1*numero2)+'</br>'+
		numero1+' / '+numero2+' es igual a: '+(numero1/numero2)+'</br>')
}

//calculadora(1, 2);

for(var i= 1; i<=10; i++){
	document.write(i+'</br>');
	calculadora(i, 2);
}

