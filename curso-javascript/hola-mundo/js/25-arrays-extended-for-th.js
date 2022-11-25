'use strict'

var nombre= 'Christian';


var nombres= ['Antonio', 'Marcos', 'Jose', 'Marcos', true, 43];
//Variable array normal
var lenguajes=new Array('JavaScript', 'Java', 'Python', 'Kotlin', 'Go');
//Objeto array


/*
var numero_elemento= Number(prompt('Introduce el numero de elemento'+
	'que quieres buscar'));

if(numero_elemento >= lenguajes.length){
	alert('Introduce un numero de elemento existente');
}else{
	alert('Tu elemento es '+lenguajes[numero_elemento]);
}
*/

document.write('<h1>Lenguajes de programación</h1><ul>');

/*
for( var i = 0; i < lenguajes.length; i++){
	document.write('<li>'+lenguajes[i]+'</li>');
}
*/
//Es mejor usar el metodo o la función for each, mas optimo

	lenguajes.forEach((element, index, array)=>{
		document.write('<li>'+index+'-'+element+'</li>');
	})

document.write('</ul>');

/*Metodo for in, un metodo más abreviado que el for in, pero solo
muestra los elementos*/

	for(let i in lenguajes){
		document.write('<li>'+lenguajes[i]+'</li>');
	}
	
