'use strict'

/*Condicionales y operadores logicos

OPERADORES LOGICOS
AND && (Y)
OR || (O)
NEGACION != 

Estos se pueden encadenar distintamente en un mismo condicional
*/

var edad=19;
var year=2018;

//NEGACION
if(edad != 18 ){
	console.log('No tienes 18 años');
}else{
	console.log('Tienes 18 años');
}

// AND (Y)
if(year >= 2000 && year <= 2020 && year != 2018){
	console.log('Estamos en la era actual');

}else{
	console.log('Estamos en la era post-moderna');
}

//OR (O)
if(year == 2008 || year == 2018){
	console.log('El año acaba en 8');
}
