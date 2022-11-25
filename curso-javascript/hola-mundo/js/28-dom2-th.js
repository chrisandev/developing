'use strict'

/*DOM: Document Object Model
Utilizar y usar elemento del documento HTML mediante JS para interactuar con el,
la verdadera esencia de JavaScript*/

/*Conseguir elementos por su etiqueta: document.getElementsByTagName
Nos devuelve un array o HTML collection de elementos con esa etiqueta o tag*/

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

/*metodo textContent nos devuelve el contenido del texto del elemento que
seleccionemos, inner HTML tambien lo devuelve pero tambien sirve para modificar ese
texto*/
var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);

contenidoEnTexto = todosLosDivs[2].innerHTML= 'Nuevo valor de este div';
console.log(contenidoEnTexto);

/*Para recorrer los elementos de un array de elemtnso HTML o un HTML collection:
Deberemos usar un bucle for in, el for each por ejemplo no sirvr por que es para
objetos previamente hechos y declarados por nosotros no para HTML collections*/

var seccion= document.querySelector('#miseccion');
var hr= document.createElement('hr');



for(var valorTexto in todosLosDivs){

	if(typeof todosLosDivs.textContent == 'string'){
		/*Esto lo hacemos por que al crear elementos se crean cosas que no son
		elementos de HTML y sacaremos por pantalla cosas que no queremos, es una
		manera de filtrar que solo saquemos texto*/

	var parrafo= document.createElement('p'); //Crea elemento/etiqueta
	var valor= document.createTextNode(valorTexto); //Crea texto
	parrafo.append(texto);
	seccion.append(parrafo) ;	

	};
}

//append es despues de y prepend es despues de.
seccion.append(hr);	


/*Conseguir elementos por su clase, se hace de igual modo que con las 
etiquetas, en este caso usaremos document.getElementsByClassName(),
devuelve igualmente un array de elementos HTML, o HTML collection*/

var clases= document.getElementsByClassName('rojo');
console.log(clases);

/*Si queremos cambiar un estilo a un elemento en concreto de un array
 o HTML collection, deberemos seleccion el elemento, si hay 2, pues el
 0 será el primero de ellos*/
clases[0].style.background = 'blue';

/*En caso de querer cambiar o añadir un estilo CSS a todos los elementos
deberemos recorrerlos con un bucle for in e ir asignando el estilo en cada
iteracion*/

for(var indice in clases){

	if(clases[indice].className == 'rojo'){
		clases[indice].style.background = 'red';
	}
}

/*Query Selector unicamente sirve para seleccionar el primer elemento del
tipo que especifiquemos o si unicamente hay uno, en ese caso seria mejor,
pero en la practica lo más flexible y mejor es el document.get...
*/




