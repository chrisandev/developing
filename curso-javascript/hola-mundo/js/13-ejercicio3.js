'use strict'

/*Se pide: Hacer un programa que pida 2 numeros al usuario y despues, muestre todos los numeros que se
incluiran desde el primer numero, al segundo, ej: si introduce 4 y 9, deberá mostrar 5, 6, 7, 8 */

var numero1=parseInt(prompt('Introduce un nummero',0));

var numero2=parseInt(prompt('Introduce un segundo numero',0));

document.write('<h1>Del '+numero1+' al '+numero2+' estan estos numeros:</h1>') /*la funcion document.write permite mostrar el texto
en la pagina web en el lugar que especifiquemos sin necesidad de tener que recurrir a las herramientas de desarrollador como la consola*/

for(var i =numero1;i<=numero2;i++){
document.write(i+'<br/>'); //Asi metemos los saltos de linea
};