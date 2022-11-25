'use strict'

/*FUNCIONES TEXTOS*/

//De transformación
var numero= 444;
var texto1= 'Hola como estas?';
var texto2= 'muy bien gracias';

console.log(typeof numero.toString());
console.log(texto1.toLowerCase());
console.log(texto2.toUpperCase());

//De contar elementos
var nombre= 'Christian Sánchez';
console.log(nombre.length);

var nombres= ['Antonio', 'Paquito'];
console.log(nombres.length);

//Contatenar o unir elementos
var textoTotal= texto1+' '+texto2;
console.log(textoTotal);

var textoTotal= texto1.concat(' '+texto2);
console.log(textoTotal);