$(document).ready(function(){

/*Podemos seleccionar los atributos de las etiquetas usando [atributo=""]
Esto seleccionara todo el elemento el cual tenga ese atributo, veamos el ejemplo*/

/*El nombre del valor del atributo por ejemplo: Google, debe ir entre dobles comillas
, entre comillas simples no va, solo en el JS, da igual como esté en el html*/

$('[title ="Google"]').css('background', 'yellow');
$('[title="Facebook"]').css('background', 'green')
						.css('color', 'white');

});