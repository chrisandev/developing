$(document).ready(function(){

//Metodo o funcion LOAD, para cargar datos de una api mediante una llamada ajax

/*
$('#datos').load('https://reqres.in/');
*/

//Metodo GET, sirve para recopilar datos de una api rest mediante una llamada ajax
//o petición asincrona

$.get('https://reqres.in/api/users', {page: 2}, function(response){

	response.data.forEach((element, index) =>{
		$('#datos').append('<p>'+element.first_name+' '+element.last_name);
	})
})

/*Metodo POST, sirve para subir unos datos a la api en jason o nose si en otro tipo
de datos tambien se podria, mediante una llamada ajax*/

$('#formulario').submit(function(e){

	e.preventDefault();

var usuario ={
	name: $('input[name="name"]').val(),
	web: $('input[name="web"]').val()
};
/*

console.log(usuario);

$.post($(this).attr('action'), usuario, function(response){

}).done(function(){
	console.log('User introducido');
})

*/

/*METODO $.AJAX
Es un método que permite la emision o recepción de datos segun lo configuremos, es
realmente la manera de hacer peticiones ajax mas optima según Victor y vamos a ver como
hacer todo el proceso del metodo post anterior mediante el uso de este método.
*/
$.ajax({
type: 'POST',
url: $(this).attr('action'),
data: usuario,
beforeSend: function(){
	console.log('Enviando usuario...');
},
success: function(response){
	console.log(response);
},
error: function(){
	console.log('A ocurrido un error');
},
timeout: 5000
});
	return false; //Tambien para que no redirija
});
});
