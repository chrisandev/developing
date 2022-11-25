$(document).ready(function(){

/*Metodo LOAD
Nos permite hacer una peticion ajax por GET e incrustar el resultado en algun elemento como
un div que tengamos en nuestro html o en nuestra pagina  web.*/

//$('#datos').load('https://reqres.in/'); 
/*Asi metemos todo el contenido de esa url en nuestro elemento con id datos*/

/*Metodo GET
Permite hacer una peticion por get a una api para obtener unos datos de la url que ofrece
la api*/

/*Importante entender estas funciones de callback, es decir.
El metodo get nos dará unos resultados, le pasamos un parametro en un jason indicandole
que recogemos la pagina 3, y todo eso se almacena en una funcion que la llamamos response
, que podria llamarse como quisieramos, para luego usar ese response como queramos*/
$.get('https://reqres.in/api/users', {page: 2}, function(response){
	//console.log(response);

/*Esta es otra callback, data es donde se encuentran los datos en la api (asi lo llama la
propia api, entonces recorremos todo el data y lo almacenamos en una funcion de callback
con los parametros element e index, para luego usar esos parametros como queramos*/
	response.data.forEach((element, index) =>{
		$('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>');
	});
});

/*Metodo POST
Permite hacer enviar algo que queramos, por ejemplo un jason de usuario y crear
su registro en el backend de la api, mediante una llamada ajax*/

$('#formulario').submit(function(e){ //Creamos un evento submit
	e.preventDefault(); //Para que al enviar los datos, la url no redirija

	//Creamos un json con los datos que introduzcamos en el form
	var usuario= {
		name: $('input[name="name"]').val(),
		web: $('input[name="web"]').val()
	};
	/*
	console.log(usuario);

	$.post($(this).attr('action'), usuario, function(response){
	console.log(response);
	}).done(function(){
		alert('Usuario añadido correctamente');
	});
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