'use strict'
//Pruebas con let y var

//PRUEBAS CON VAR (VARIABLES QUE AFECTAN A NIVEL GLOBAL)
var numero=40;
console.log(numero); //valor 40

if(true){
	var numero=50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

//PRUEBAS CON LET (VARIABLES QUE ACTUAN SOLO A NIVEL DE BLOQUE)
var texto="Curso JS con Victor Robles";
console.log(texto); // ""

if(true){
	let texto="Curso laravel 5";
	console.log(texto); //valor laravel 5
}

console.log(texto);