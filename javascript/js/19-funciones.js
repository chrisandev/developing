'use strict'

/*FUNCIONES

Una funcion es un conjunto de ordenes o instrucciones agrupadas o encapsuladas que se puede invocar para reutulizarse 
tantas veces como deseemos.*/

//Defino la funcion
function calculadora(){

//Conjunto de instrucciones a utilizar
console.log("Hola, soy la calculadora");
console.log("Si, soy yo");

return "Hola, soy la calculadora"; //Cuando se pone un return, no se suelen poner inpresiones, como los console.log pero es un ejemplo
}

//Invocar o llamar a la función	
var resultado= calculadora(); //El valor del return no esta almacenado en ninguna variable y si queremos reutilizarlo hemos de meterlo.

console.log(resultado); //Se imprimirá el resultado del return ya que esta guardado en la variable resultado.

