$(document).ready(function(){
	console.log('hola');

	/*METODOS JQUERY UI

	Metodo Draggable, para mover elementos libremente por la página*/

	$('.elemento').draggable();

	//Metodo Resizable, para redimensionar elementos

	$('.elemento').resizable();

	//Método Selectable, para seleccionar elementos

	//$('.lista-seleccionable').selectable();

	//Método Sortable, para ordenar los elementos
	//(Si usamos sortable no se puede usar selectable!!)

	/* $('.lista-seleccionable').sortable();//sin parametrizar ya funciona, pero 
	podriamos añadir funciones al metodo para que haga algo mas que permitir ordenar */

	$('.lista-seleccionable').sortable({
		update: function(event, ui){
			console.log('Ha cambiado la lista');
		}
	});

	/*Método DROP*/

	$('#elemento-movido').draggable();
	$('#area').droppable({
		drop: function(){ //Hay que activar su drop function
			console.log('Has soltado algo dentro del area');
		}
	});

	/*EFECTOS

	Hay muchos, se pueden revisar en la documentacion, shake, fade, slide, explode
	drop, fold, puff, scale*/

	$('#mostrar').click(function(){
		$('.caja-efectos').toggle('explode', 'slow');
		/*hay mas funciones como .effect o fadeToggle, etc*/ 
		/*aparte del tipo de efecto y la velocidad, hay una tercera opciones que se
		puede aplicar que seria en forma de JSON {} donde podriamos cambiarle
		parametros como la anchura.. altura, etc pero no se suele usar, esta opcion
		iria despues del tipo de efecto y antes de la velocidad*/
	});

	/*Método TOOLTIP
	Sirven para sacar el title de un elemento cuando pasamos el cursor por encima
	Hay muchos plugins que permiten sacar tooltips de diferentes estilos, texto por
	arriba.. por debajo, etc*/
	$(document).tooltip();

	/*Método DIALOG
	Sieve para sacar una ventana emergente que informe de algo*/
	//$('#popup').dialog(); Asi serviria pero vamos a lanzarlo con un evento

	$('#lanzar-popup').click(function(){
		$('#popup').dialog()
	});

	/*Método DATEPICKER
	Crea un calendario, hay muchos otros usando distintos plugins*/
	$('#calendario').datepicker();

	/*TABS*/

	$('#pestanas').tabs();

});
