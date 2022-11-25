'use strict'

/*Conseguir elementos por su etiqueta, document.getElementsByTagName.

Vamos a conseguir todos los divs, los recorreremos y les meteremos un parrafo
a cada uno, un texto en cada uno de esos parrafos, a su vez meteremos los parrafos
en una seccion y tras todo, meteremos un hr despues de la sección*/

var todosLosDivs= document.getElementsByTagName('div');
console.log(todosLosDivs);

for( var texto in todosLosDivs){

	if(typeof todosLosDivs == 'string'){

	var parrafo= document.createElement('p');
	var text= document.createTextNode(texto);
	parrafo.append(text);

	}
}

var hr= document.createElement('hr');
var section = document.querySelector('#miseccion');
section.append(hr);