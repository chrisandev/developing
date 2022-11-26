'use strict'

//Transformacion de textos

var numero=444;
var texto1= "Bienvenido al curso de Java Script de Victor Robles"
var texto2= "Es muy buen curso";

var dato = numero.toString(); //Transformamos o convertirmos la variable numero a texto y lo guardamos en la variable dato

	dato=texto1.toUpperCase(); //Transformamos a letras mayusculas el texto1.

	dato=texto2.toLowerCase(); //Transformamos todo el texto a minusculas

console.log(typeof dato);

//Calcular longitud
var nombre= "Christian Sánchez";
var nombre2= ["hola", "hola"]; //Esto cuenta como 2 elementos

console.log(nombre.length);
console.log(nombre2.length);

//Concatenar, Unir textos con la funcion concat

//var textoTotal= texto1+" "+texto2;

var textoTotal= texto1.concat(" "+texto2); //EL resultado es el mismo que en el comentado de arriba

console.log(textoTotal);


