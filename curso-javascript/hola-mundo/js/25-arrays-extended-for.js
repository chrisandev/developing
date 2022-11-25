'use strict'

var nombre= 'Christian';

var nombres= ['Antonio', 'Marcos', 'Jose', 'Marcos', true, 43];
//Variable array normal
var lenguajes=new Array('JavaScript', 'Java', 'Python', 'Kotlin');
//Objeto array


/*
var elemento= parseInt(prompt('Que elemento del array quieres?', 0 ));

if(elemento >= nombres.length){
	alert('Introduce un numero de elemento correcto')
}else{
	alert('El elemento seleccionado es '+ nombres[elemento]);
}
*/

document.write('<h1>Lenguajes de programación</h1>');
document.write("<ul>");

/*
for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
*/

/*al for each se le debe pasar una funcion de callaback o de flecha,
segun prefiramos, entre los parametros,  el  primero será el elemento,
el segundo siempre será su numero en el indice, y el terceró sacará el 
array completo, estos parametros los podremos llamar como queramos para
luego usarlos como prefiramos pero siempre serán asi en ese orden*/


lenguajes.forEach((elemento, indice, array)=>{
	//lenguajes.forEach( function(elemento, indice, array){
	document.write('<li>'+indice+'-'+elemento+'-'+array+'</li>');
})

/*Tambien existe el metodo for in, todavía  más simple
declararemos una variable que ira mostrando los elementos del array
que indiquemos, pero solo mostrará los elementos*/

for(var i in lenguajes){ 
	document.write('<li>'+lenguajes[i]+'</li>');
}

