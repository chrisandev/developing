'use stric'

/*DOM: DOCUMENT OBJECT MODEL*/

var caja= document.getElementById(`micaja`); /*Seleccionamos el objeto HTML con ID 'micaja'*/
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


console.log(caja); /*Imprime el contenido de caja que es el de 'micaja', en este caso 
<div id='micaja'>Hola soy una caja!</div>, si tenemos el innerHTML nos imprimirá el texto que haya dentro 
y no toda la linea  de codigo de HTML*/


