'use strict'

/*AMBITO FUNCIONES
Las variables declaradas  dentro de una funcion o bloque de instrucciones
no se podrán usar en el ambito  global del programa ni aunque sea declarada
con la palabra reservada var, pero al reves si*/

function holaMundo(datos){

	var hola_mundo= 'variable dentro de funcion';
	console.log(datos);
	console.log(typeof numero.toString());
	/*Las variables tambien se comportan como objetos en JS, por lo que 
	añadiendoles un punto podemos acceder a una serie de metodos o propiedades
	que disponen las variables como la funcion toString(); que permite la 
	transformación de un tipo de variable a el tipo string*/
	console.log(hola_mundo);


}

var numero= 12;
var texto= 'Hola mundo';
holaMundo(texto);


