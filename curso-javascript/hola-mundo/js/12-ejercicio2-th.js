/*Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir
 uno negativo y ahi mostrar el resultado*/

 'use strict'

/*
var numeros;

var contador =0;

var sumatorioNumeros=0;

do{

numeros= parseInt(prompt('Introduce un numero', 0));

sumatorioNumeros+=numeros;

contador++;

}while(numeros >= 0);

contador--;

document.write('El sumatorio de tus numeros es '+sumatorioNumeros+'</hr>');

document.write('Has introducido '+contador+' numeros'+'</hr>');

document.write('La media de tus numeros es '+(sumatorioNumeros/contador+'</hr>'));
*/

//OPCION B, MAS COMPLETA AUNQUE CON COSAS NO EXPUESTAS EN EL ENUNCIADO
/*Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir
 uno negativo y ahi mostrar el resultado*/

var sumatorio=0;

var contador=0;

do{
    var numeros=parseInt(prompt('Introduce un numero', 0));

    if(isNaN(numeros)){
        numeros==0;
    }

    sumatorio+=numeros;

    contador++;

}while(numeros >= 0);

console.log('Has introducido '+contador+' elementos');
console.log('La suma total de estos es de '+sumatorio);
console.log('La media de ellos es de '+(sumatorio/contador));