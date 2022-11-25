'use stric'

/*DOM: DOCUMENT OBJECT MODEL*/


var caja= document.getElementById(`micaja`); /*Seleccionamos el objeto HTML con ID 'micaja'*/

//Conseguir elementos con un ID concreto

var caja = document.querySelector('#micaja'); /*Forma optima de seleccionar un elemento*/
/*Podriamos seleccionar mas un elemento tambien, var caja = document.querySelector('#micaja2');*/
//var caja= document.getElementById(`micaja`).innerHTML;

/*MODIFICANDO PROPIEDADES O ELEMENTOS DEL HTML, TRAS SELECCIONAR EL ELEMENTO*/

caja.innerHTML ='¡TEXTO EN LA CAJA DESDE JS!'
caja.style.background= 'red';
caja.style.padding='20px';
caja.style.color='white';
caja.className='hola'; 

function cambiaColor(color){
	caja.style.background= color;
}

//Conseguir elementos por su etiqueta 
var todosLosDivs = document.getElementsByTagName('div'); //Para mostrar un array con todos los divs

//var contenidoEnTexto = todosLosDivs[2].textContent; //Para sacar el texto del segundo elemento div del array

//var contenidoEnTexto = todosLosDivs[2].textContent.innerHTML; Lo mismo pero permite asignar un nuevo valor

//contenidoEnTexto.innerHTML = 'Otro texto para el segundo elemento'; //Cambiamos su texto

var seccion = document.querySelector('#miseccion');

var hr = document.createElement('hr');
seccion.append(hr);

/*todosLosDivs.forEach((valor, indice) => { No sirve para recorrer HTML Collections, hay que usar un FOR IN*/
	var valor;

	for(valor in todosLosDivs){
		if(typeof todosLosDivs[valor].textContent == 'string'){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.append(texto);
	seccion.append(parrafo); 
		}
}

seccion.append(hr);


//apppend significa añade despues, y prepend significa añade antes

//Conseguir elementos por su clase CSS


console.log(caja); /*Imprime el contenido de caja que es el de 'micaja', en este caso 
<div id='micaja'>Hola soy una caja!</div>, si tenemos el innerHTML nos imprimirá el texto que haya dentro 
y no toda la linea  de codigo de HTML*/