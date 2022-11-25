$(document).ready(function(){ /*Document equivale al DOM, es decir al documento HTML*/

/*Leemos todos los enlaces que tenemos en el DOM (a), y despues los cogeremos los
atributos href y los meteremos dentro de las textos de cada enlace, es decir haremos 
que se muestre en pantalla lo mismo que hay en cada atributo href, los mismos enlaces*/

reloadLinks(); /*Refrescamos los links para que se muestren en pantalla*/


$('#add_button')
.removeAttr('disabled') //Borramos el atributo disabled del boton
.click(function(){ //Creamos evento al darle click al boton
$('#menu').html('<li><a href="'+$("#add_link").val()+'"></a></li>'); /*Con el menu
seleccionado aplicamos un metodo que puede ser (.html para substituir lo que haya por eso)
, (append para añadir al final de la lista), (prepend para añadir al inicio del listado), 
(.before para añadir el elemento fuera del listado, arriba del todo), (.after para lo
mismo pero despues del listado). Tras ello seleccionamos el link y añadimos su valor 
entre un li concatenandolo*/
reloadLinks();/*Volvemos a refrescar los links tras meter o quitar uno*/
});

});

function reloadLinks(){
$('a').each(function(index){ /*Primero recorremos los 'a' con el metodo .each*/
	var that = $(this);
var enlace = that.attr('href'); //seleccionamos lo que hay en los atributos href

that.attr('target', '_blank'); /*Añadimos este atributo a los enlaces, hace que se abran
en una pestaña nueva*/

that.text(enlace); //Metemos en el texto de cada 'a', los enlaces de href
});
}