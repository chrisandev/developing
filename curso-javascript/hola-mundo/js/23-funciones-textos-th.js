'use strict'

/*FUNCIONES DENTRO DE TEXTOS

Transformación de textos*/

var numero=444;
var texto1= 'Bienvenido al curso de JavaScript de Victor Robles';
var texto2= 'es muy buen curso';

var dato1= numero.toString(); //Transforma tipo a string
var dato2= texto1.toLowerCase(); //Transforma textos integros en minuscula 
var dato3= texto2.toUpperCase(); //Transforma  textos integros en mayuscula

console.log(dato1);
console.log(dato2);
console.log(dato3);

// Calcular longitud de elementos, no de numeros o letras si no elementos
var nombre= 'Christian Sánchez';//El space tambien es un elemento
console.log(nombre.length);

var nombres= ['Christian', 'Maria'];
console.log(nombres.length);//Contará los elementos, en este caso 2

//Concatenar, Unir textos,etc
var textoTotal= texto1+', '+texto2;
console.log(textoTotal);

var textoTotal = texto1.concat(' '+texto2);
console.log(textoTotal); //Es lo mismo con la función concat
