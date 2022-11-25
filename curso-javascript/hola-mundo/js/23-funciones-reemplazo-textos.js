'use strict'

//Funciones de reemplazo de textos

var texto1= "Bienvenido al curso de Java Script de Victor Robles"

var busqueda=texto1.replace("JavaScript", "Symphony"); //Cambia el primer parametro (JavaScript) por el segundo (Symphony)
//en el texto de la variable

var busqueda=texto1.slice(14, 22); //Recorta del caracter num  14, hasta el 22 y mostrara el texto comprendido entre ambos, (Si solo
//pasamos un numero en el parametro, mostrara todo el texto a partir de ese numero de char)

var busqueda=texto1.split(" "); //Mete el texto en un array como una unica unidad, si indicamos " ", entonces meterá cada palabra en
//elemento distinto del array

var busqueda=texto1.trim(); //Quita los espacios por delante y por detras del string, valido para que no se guarden espacios en formularios

console.log(busqueda);