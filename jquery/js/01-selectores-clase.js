$(document).ready(function(){

//SELECTORES DE CLASE, se utiliza con el punto .

var mi_clase =$('.zebra').css('padding', '5px'); //Le añadimos css forzado en linea

console.log(mi_clase); /*Nos indicará que tenemos un array o coleccion de elementos 
con ese tipo, si queremos seleccionar uno concreto podriamos por ejemplo:
console.log([0]) o lo mismo con el metodo eq: console.log(mi_clase.eq(1))
Ambas formas seleccionan un elemento de un erroy, pero con eq tendremos ademas, 
metodos de jQery adjuntos y esto nos permitiria hacer mas cosas*/

$('.sin_borde').click(function(){ /*A los elementos de clase sin_borde les añadiremos
	funcionalidad con el evento click*/

console.log('click dado!');
$(this).addClass('zebra'); /*Con this hacemos referencia al mismo elemento del evento*/
});

});