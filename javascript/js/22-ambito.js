'use strict'

//Las variables globales pueden ser usadas en cualquier ubicacion del programa.
//Las variables locales o ubicadas dentro de funciones solo pueden ser usadas dentro de esas funciones donde han sido creadas

function holaMundo(texto){

	var hola_mundo ="Texto dentro de una funcion";

	console.log(texto);
	console.log(numero.toString()); //Asi transformamos un numer a un string, podemos verlo con type of numero
	console.log(hola_mundo);
}

var texto="Hola mundo, soy una variable global";
var numero=12;

holaMundo(texto);
/*console.log(hola_mundo); NO ME DEJA USARLA YA QUE ES UNA VARIABLE LOCAL DEFINIDA EN UNA FUNCION Y NO EN EL AMBITO GLOBAL*/ 	