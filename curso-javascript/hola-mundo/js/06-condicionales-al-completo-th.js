'use strict'

/*OPERADORES LOGICOS 
AND && (Y)
OR || (O)
NEGACION !=
*/

var year = 2028;

//AND
if(year >= 2000 && year <= 2018){
	console.log('Estamos en la era actual');
}else{
	console.log('Estamos en otra era');
}

//OR
if(year == 2008 || year == 2018){
	console.log('El año acaba en 8');
}else{
	console.log('El año no acaba en 8');
}

//COMBINADAS
if(year == 2008 || year >= 2018 && year == 2028){ 
	/*Tambien se podria indicar asi if(year == 2008 || (year >= 2018 && year == 2028))*/
	console.log('El año acaba en misco	');
}else{
	console.log('Año no registrado');
}