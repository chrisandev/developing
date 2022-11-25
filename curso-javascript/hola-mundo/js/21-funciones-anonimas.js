'use strict'

//Funciones anonimas y callbacks
/*Las funciones anonimas son aquellas que no tienen nombre y los callback son funciones anonimas introducidas en 
la invocacion de una funcion*/

function sumame(numero1,numero2,sumaYmuestra,sumaPordos){ //las funciones siempre tienen return?? parece que si.

var suma=numero1+numero2;

sumaYmuestra(suma);

sumaPordos(suma*2);

return suma;

}

/*sumame(5,7,function(dato){ //Interpreta que es sumaYmuestra por el orden secuencial.

	console.log("La suma es: ", dato);
},
function(dato){
	console.log("La suma por dos es: ", dato);
}); */

// FUNCIONES FLECHA EN CALLBACKS, es lo que se usa ahora para realizar un codigo más limpio con ( =>)

sumame(5,7, dato =>{ 

	console.log("La suma es: ", dato);
},
dato =>{
	console.log("La suma por dos es: ", dato);
});