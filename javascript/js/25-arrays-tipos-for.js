'use strict'

//Arrays, Arreglos, Matrices, son una coleccion de datos finita.

var nombre= "Victor Robles"; //Manera de declarar una variable con un elemento


//ARRAY BASICO
var nombres=["Victor Robles", "Christian Sánchez", "Juan Lopez", "Manolo Garcia", 52, true]; //Asi se declara un array basico, 
//este tiene 6 elementos pero sus posiciones en su indice empiezan desde la posicion 0, por lo que llegara hasta la posicion 5
// (0,1,2,3,4,5), total=6 elementos. No necesariamente han de ser elementos del mismo tipo


//MANERA DE DECLARAR UN OBJETO DE TIPO ARRAY
/*
var lenguajes = new Array("PHP", "JS", "Go", "Java");


var elemento = parseInt(prompt("Que elemento del array quieres?", 0)); //prompt saca string


if(elemento >= nombres.length){
alert("Introduce un numero correcto, menor que: "+nombres.length);
}else{
alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/


document.write("<h1>Lenguajes de programacion del 2018</h1>"); //Que manera mas guapa de combinar html con y este bucle con array
document.write("<ul>");
/*
for(var i=0; i<nombres.length;i++){
	document.write("<li>"+nombres[i]+"</li>");
}
document.write("</ul>");
*/

//BUCLE FOR EACH, ES UN FOR MEJORADO, solo es obligado pasar por parametro el Elemento, lo demás es si queremos
//el resto de datos.

var lenguajes = new Array("PHP", "JS", "Go", "Java");

/*
lenguajes.forEach(Elemento, indice, array)=>{  //Usamos una función de callback
console.log(array);
document.write("<li>"+indice+" - "+elemento+"</li>");
};

document.write("</ul>");
/*

/*BUCLE FOR IN, ES OTRA  VARIANTE QUE QUEDA MAS ELEGANTE QUE HACER UN FOR CONVENCIONAL
Creamos la variable indice dentro del for*/

for(let indice in lenguajes){
	document.write("<li>"+lenguajes[indice]+"</li>");
}

document.write("</ul>");

