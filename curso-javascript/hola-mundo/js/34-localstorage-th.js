'use strict'

/*LOCAL STORAGE
Almacenamiento web local, es una almacenamiento o especie de sesion que persiste
mientras navegamos en esa web, cada web o file dispone de uno propio y el navegador
ha de ser compatible con el local storage para poder usarse pues esto pertenece a 
los nuevos estandares como el ES6 y HTML5*/

window.addEventListener('load', ()=>{

//Comprobar si el navegador es compatible con localstorage

if(typeof(Storage) != 'undefined'){
	console.log('localstorage disponible');
}else{
	console.log('local storage no compatible');
}

//Guardar datos en local storage (String normal)
/*El primer parametro es la clave del elemento, es como el nombre
de la variable/indice donde se almacena el valor, usando esta clave, tendremos 
acceso a su valor como si de una variable  se tratara*/

localStorage.setItem('titulo', 'Curso de victor robles');

//Recuperar elemento del localStorage y meterlo en nuestra web

//console.log(localStorage.getItem('titulo'));

document.querySelector('#box').innerHTML= localStorage.getItem('titulo');


/*Guardar objetos JSON  en el localStorage
no podemos guardar objetos ni enviarlos a una api como un objeto, la transmision
de estos se realiza pasandolos primeros a string, al recogerlos tambien se recogen
como string y luego hay que volverlos a transformar en el objeto que corresponda
Para la transformacion de JSON a string existe la funcion del objeto 
JSON.stringify()*/

var usuario= {
	nombre: 'Christian',
	email: 'christian@mail.com',
	web: 'mywebportfolio.com'
}

localStorage.setItem('usuario', JSON.stringify(usuario)); 

/*Recuperar JSON string del local storage

si lo intentamos recuperar normalmente, mediante
localStorage.getItem('usuario'); 
lo que obtendremos sera un string y no un objeto JSON, para transformarlo al JSON
que era es necesario usar una funcion del objeto predefinido JSON en js 
llamada parse
*/
var userjs= JSON.parse(localStorage.getItem('usuario')); 
console.log(userjs);

document.querySelector('#box2').innerHTML = userjs.nombre +' - '+ userjs.web;

/*borrar un elemento por su clave del localStorage*/
localStorage.removeItem('usuario');

//Borrar todo el local Storage
localStorage.clear();







});