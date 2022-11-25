'use strict';

/*
METODO FETCH
Es un metodo que realiza peticiones ajax o peticiones asincronas a un servicio externo o backend 
llamado api rest, estas peticiones devuelven datos en json y si tu quieres subirles algo tambien se
realizará mediante json. Las peticiones ajax son un metodo de peticion usado en la libreria JQuery,
que ahora gracias al avance en JS se pueden realizar usando fetch.
Una api rest  es un servicio o un backend que nos devuelve datos en json, en ella, podemos consumir
sus servicios mediante metodos http como get, put.. etc
*/

/*
EJEMPLO, esta peticion o consumo de servicio de esta api, nos devolverá este objeto json
mediante el uso del metodo o promesa fetch 

fetch('https://jsonplaceholder.typicode.com/todos/1') Primero el metodo promesa recibe una url con 
la api rest de donde se extraeran los datos 
  .then(response => response.json()) //En el metodo then se recogen los datos mediante una funcion de
  callback, al primer parametro response podriamos ponerle cualquier nombre, y luego lo transformamos 
  a json con => response.json para que esos datos sean usables en nuestro frontend o JS
  .then(json => console.log(json))
 */

 /*
 Ejemplo 1

var usuarios= [];

 fetch('https://jsonplaceholder.typicode.com/users')
 .then(data => data.json()) //Data es la respuesta que contiene el array de objetos json
 .then(data =>{
 	usuarios = data; //Guardamos el json de data en usuarios
 	console.log(usuarios);
 })

*/

var div_usuarios = document.querySelector('#usuarios');

var usuarios= [];

 fetch('https://reqres.in/api/users') /*Accedemos a unos datos remotos mediante una peticion*/
 .then(data => data.json()) /*Aqui nos quedaremos a la espera de que cuando (then) recibamos esos datos
 los convirtamos o formateemos a json usables para nuestro frontend. Data es la respuesta que 
 contiene el array de objetos json*/
 .then(users => {
 	usuarios = users.data; //Guardamos el json con la data en usuarios, esto se hace para solo
 	//guardar los datos, y no el resto de cosas que siempre hay, es una manera de filtrar
 	console.log(usuarios);	

 	usuarios.map((user, i) => { /*Funcion map, es como un for each, user representa los datos
 		lo podemos llamar como queramos y el i, la iteracion o indice*/
 		let nombre = document.createElement('h3'); //Creamos un h3 en cada iteracion, el let 
 		//como var pero pudiendose repetir entiendo.

 		nombre.innerHTML = i + ' ' + user.first_name + ' ' + user.last_name; 
 		/*first_name y last_name son los nombres de esos datos en el array, y en la api*/

 		div_usuarios.appendChild(nombre);
 	});
 });

 /*
 La funcion de flecha primera seria lo mismo que hacer:
 fetch('https://reqres.in/api/users')
 .then(function(data){
 	return data.json()

 	es decir, data representa function y => representa return, usar funciones  de callback de flecha
 	es una forma de ahorrar codigo.
 })
 */


