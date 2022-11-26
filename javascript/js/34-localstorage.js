'use strict'

/*LOCAL STORAGE
Permite guardar informacion en nuestro navegador web a modo de sesion, siempre y cuando este sea
compatible con el local storage*/

//COMPROBAR SI EL NAVEGADOR ES  COMPATIBLE CON LOCAL STORAGE

if(typeof(Storage) !== 'undefined'){
	console.log('Local storage disponible en tu navegador');
}else{
	console.log('Local storage no disponible');
}

//GUARDAR DATOS EN EL LOCAL STORAGE, AÑADIR UN VALOR
/*Podemos revisar el local storage en herramientas de desarrollador, pestaña Aplicacion,
Almacenamiento local*/
/*El primer valor, será la clave o indice, y el segundo será el valor */
localStorage.setItem('titulo', 'Curso de Symfony de Victor Robles');

//RECUPERAR ELEMENTO
localStorage.getItem('titulo');
console.log(localStorage.getItem('titulo')); //Lo sacamos por consola
document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo'); /*Asi lo metemos
en nuestro div con id peliculas y por lo tanto saldrá en la pagina  web*/


//GUARDAR OBJETOS (JSON) EN EL LOCAL STORAGE
var usuario= {
	nombre: 'Christian Sanchez',
	email: 'smchris1989@gmail.com',
	edad: 32
};
/*No podriamos hacer localStorage.setItem('usuario',usuario) por que para guardar un JSON en el local
Storage hay que parsearlo a String, no admite objetos en su formato original; 
. Para poder parsearlo tenemos el metodo JSON.stringify*/
localStorage.setItem('persona', JSON.stringify(usuario)); /*El nombre de la clave o indice siempre nos
lo vamos a inventar*/


//RECUPERAR UN OBJETO
localStorage.getItem('persona');
console.log(localStorage.getItem('persona')); 
/*No podemos  recuperar e imprimir el objeto JSON por que ahora almacenado es un string,
entonces debemos reconvertirlo o pasearlo de nuevo con otro metodo para transformarlo en un objeto
usable por JavaScript*/

var jason_usable = JSON.parse(localStorage.getItem('persona'));
console.log(jason_usable);

document.querySelector('#datos').append(jason_usable.nombre+' '+jason_usable.edad);

//BORRAR ELEMENTOS DEL LOCAL STORAGE
localStorage.removeItem('persona'); //Para borrar el objeto denominado

localStorage.clear(); //Para borrar todo el local storage
