'use strict';

/*AMBITO DE LAS VARIABLES
Si declaramos una variable de manera global en nuestro programa con la 
palabra reservada var, podremos usarla dentro del bloque local de una funcion
pero si intentamos declarar una variable en una funcion con la palabra 
reservada var, y luego intentamos usarla en el ambito global de un programa
no podremos acceder a ella por ha sido declarada dentro de una funcion, da
igual que sea con la palabra  var en vez de con let, no nos va a dejar.*/

function holaMundo(texto){

	var hola_mundo= 'texto dentro de una funcion';

	console.log(texto);
	console.log(numero);
	console.log(hola_mundo);

	return hola_mundo;
}

var numero= 12;
var texto= 'Soy una variable global declarada fuera de una funcion';
holaMundo(texto);





