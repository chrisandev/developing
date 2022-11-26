'use strict'

/*DOM: DOCUMENT OBJECT MODEL*/




//Conseguir elementos con un ID concreto, solo puede haber uno ya que el ID es unico

var caja = document.querySelector('#micaja'); /*Forma optima de seleccionar un elemento*/
/*Podriamos seleccionar mas un elemento tambien, var caja = document.querySelector('#micaja2');*/
//var caja= document.getElementById(`micaja`); /*Seleccionamos el objeto HTML con ID 'micaja'*/
//var caja= document.getElementById(`micaja`).innerHTML;

/*MODIFICANDO PROPIEDADES O ELEMENTOS DEL HTML, TRAS SELECCIONAR EL ELEMENTO*/

function cambiaColor(color){ //Function para la caja
	caja.style.background = color;
}

caja.innerHTML ='¡TEXTO EN LA CAJA DESDE JS!'
caja.style.background= 'red';
caja.style.padding='20px';
caja.style.color='white';
caja.className='hola'; 

cambiaColor('blue');
console.log(caja);

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div'); //Seleccionamos todos los elementos por su tag 'div'

var seccion = document.querySelector('#miseccion'); //Selecionamos un elemento por ID
var hr = document.createElement('hr');

/*Haremos un bucle for in para recorrer todos los divs previamente seleccionados en la variable todosLosDivs,
Crearemos una etiqueta <p> en cada uno de los elementos del array de divs (que es lo que contiene todosLosDivs,
Crearemos texto en la variable texto, que luego con append añadiremos a los parrafos,
Luego añadiremos cada parrafo a la seccion con ID miseccion,
El tema del condicional IF es por que se creaban elementos en el array de divs que no eran parte del DOM, con
esta condicion hacemos que solo los divs con valor string o texto, entren en el bucle) */

/*todosLosDivs.forEach((valor, indice) => {  FOREACH NO PERMITE RECORRER HTML COLLECTIONS, HAY QUE USAR FOR IN*/
	//var valor; //Hay que definir esta variable antes del bucle, es el iterador o contador creo, de hecho, 
	//se puede  declarar dentro del mismo bucle como en un for normal.
	for(var valor in todosLosDivs){
		if(typeof todosLosDivs[valor].textContent == 'string'){
	var parrafo = document.createElement('p');
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.append(texto);
	document.querySelector('#miseccion').prepend(parrafo);	
		}
	}

	seccion.append(hr); //Añadimos al final un hr

	//append signidica añade despues y prepend añade antes.

//Conseguir elementos por su clase CSS
var divsRojos = document.getElementsByClassName('rojo'); //Seleccionamos por nombre de clase rojo
//divsRojos[0].style.background = "red"; //Con este metodo solo podemos establecer cosas a un elemento del array
//de manera consecutiva
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = 'yellow'; //[0] es por que es el elemento 0 de su propio array de amarillos
//Si debajo hay 2 divs de nombre rojo, el primero tambien será el elemento 0 de su propio array de rojos
for(var indice in divsRojos){
	if(divsRojos[indice].className == "rojo"){
		divsRojos[indice].style.background = "red"; /*Asi solo no va por que en el array, hay mas elementos
ocultos además de divs, por lo que habrá que crear un filtro con un if*/
	}
}

// Query selector PRUEBA

var id = document.querySelector('#encabezado');
console.log(id);

var claseRojo = document.querySelector('.rojo');
console.log(claseRojo); /*Solamente saca un elemento por el array, Query selector no sirva para varios elementos*/

var etiqueta = document.querySelector('div');
console.log(etiqueta); 

/*Para seleccionar un ID el queryselector es lo adecuado, pero para  varios elementos que compartan tipo solo 
sacará el primero, no sirve, PARA ELLO HARIA FALTA LA FUNCION QUERY SELECTOR ALL*/
