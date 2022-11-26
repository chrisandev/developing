'use strict'

/*Pedir un numero y mostrar su tabla de multiplicar en propia pagina web*/

var numero=parseInt(prompt("De que numero quieres la tabla?"));

document.write("<h1>Tabla del "+numero+"</h1>")
for(var i=1;i<=10;i++){
	document.write(i+" x "+numero+" = "+(numero*i)+" </br>");
}

/*
Para mostrar todas las tablas de multiplicar Podriamos hacerlo anidando 2 for

*/

for(var j=1;j<=15;j++){
	document.write("<h2>Tabla del "+j+" </h2>");
	for(var i=1;i<=10;i++){
		document.write(i+" x "+j+" = "+(i*j)+" </br>");
	}
}