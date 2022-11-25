$(document).ready(function(){

	/*METODOS FIND Y PARENT*/

	//FIND

//$('p, a').addClass('margen-superior'); Asi selecionamos varios elementos

/*Si no sabemos donde se encuentra un elemento dentro del DOM, podremos usar el metodo
FIND, iniciemos nuestra posicion en un elemento que sepamos que puede ser una base
para la busqueda por ejemplo el div caja donde sabremos que se encuentra el elemento 
que pretendemos encontrar, si lo metemos en una variable y la usamos en un console log
el programa nos indicará que objeticos tienen la clase resaltado que es la que hemos
buscado, y tambien nos indicará desde que objeto partimos en la busqueda con prebObject
donde pondrá div#caja*/

var busqueda = $('#caja').find('.resaltado');
console.log(busqueda);

/*var busqueda = $('#caja .resaltado'); Asi tambien lo encontrariamos directamente,
pero el metodo find se usa para grandes DOMS donde no sepamos exactamente donde se 
encuentra algo*/


// PARENT
/*El metodo parent se usa para salir de un directorio a un nivel superior, si por 
ejemplo estuvieramos en el apartado resaltado, dentro del div caja de este modo:
$('#caja .resaltado'); y quisieramos buscar una propiedad que se encuentra fuera de
ese div caja, deberiamos usar el metodo parent para salir del directorio hacia un nivel
superior de jerarquia y quedaria de este modo
*/
/*$('#caja .resaltado').find('[title="Google"]'); Esto no encontraria nada */

busqueda = $('#caja .resaltado').eq(0).parent().parent().find('[title="Google"]'); //Esto no encontraria nada
console.log(busqueda); 

/*Lo del eq(0) no es necesario, usando parents ya subimos al nivel de carpeta que 
queramos, eq se usa para indicar como la capa de elemento que queremos*/

busqueda = $('#elemento2').parent().parent().find('.resaltado'); //Esto no encontraria nada
console.log(busqueda); 

//Asi salimos de la UL hasta el Div, y ya encontrariamos las clases resaltado





});