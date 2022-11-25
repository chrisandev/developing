$(document).ready(function(){ //Evento de carga de documento (HTLM) previo

$('.zebra').css('color', 'orange')
			.css('border', '10px solid green');

var sinBordes = $('.sin_borde');

sinBordes.click(function(){

	$(this).addClass('zebra');
})




});