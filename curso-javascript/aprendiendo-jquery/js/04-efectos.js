$(document).ready(function(){

 /*Efectos Hide y Show 
 Funciones o metodos Hide(esconder) y Show(mostrar)
 Estos metodos pueden tener parametros como slow, normal, fast que declaran la velocidad
 con la que se mostrará o se esconderá el objeto al que le apliquemos el metodo.

 Efectos FadeIn y FadeOut
 Lo mismo que show y hide pero con efecto fundido, un efecto más agradable

 FadeTo 
 hace el efecto face fundido indicando la opacidad a la que se quiere llegar, si queremos
 mostrar los parametros a pasar serian por ejemplo $('#caja').fadeTo('slow', 1);
 Si por otro lado quisieramos ocultar seria lo mismo pero con opacidad 0

 Metodo toggle
 Cuando se aplica una vez se muestra algo y si se vuelve a aplicar, se cierra, esto
 simplifica el show y el hide

 slideToogle
 Aplica el efecto toogle pero a modo de persiana, subiendo o bajando el objeto, tambien 
 se puede aplicar velocidad por parametro $('#caja').slideToggle('slow');

 slideUp y slideDown
 Hacen lo mismo que el toggle pero sin el toggle, Up es para ocultar y Down para mostrar*/

var caja=$('#caja'); //Para no llamar al DOM un millon de veces

 $('#mostrar').click(function(){
 	caja.fadeIn('slow', 1);
 	$(this).hide(); //Asi se ocultará el boton mostrar y solo quedará ocultar
 	$('#ocultar').show();

 });

 $('#ocultar').click(function(){
 	caja.fadeOut('slow', 0); 
 	$(this).hide();
 	$('#mostrar').show();

 	caja.slideUp('slow', function(){ /*Tambien tenemos la opcion de intercalar una
 		funcion de callback por parametro para que nos devuelva lo que establezcamos.
 		Una vez se ejecute el metodo slideUp con su velocidad slow, se ejecutará el callback*/
 		alert('Cartel ocultado');
 	})
 })

 $('#todoenuno').click(function(){
 	caja.slideToggle('slow');
 })

 /*METODO ANIMATE
 Permite incorporar animaciones en JQery mediante este metodo y el uso de JSON para 
 establecer las propiedades a animar*/

 $('#animar').click(function(){
	caja.animate({
					marginLeft: '500px',
					fontSize: '40px',
					height: '110px',
					}, 'slow')
		.animate({
					borderRadius: '900px',
					marginTop: '80px',
					}, 'slow')
		.animate({
					borderRadius: '0px',
					marginLeft: '0px',
					}, 'slow')
		.animate({
					borderRadius: '100px',
					marginTop: '0px',
					}, 'slow')
		.animate({
					marginLeft: '500px',
					fontSize: '40px',
					height: '110px',
					}, 'slow');

 });


});