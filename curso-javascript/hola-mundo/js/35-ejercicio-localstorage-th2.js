/*EJERCICIO COMPLETO LOCAL STORAGE CON EVENTOS

Se pide:
1- Crear una cabecera que indique listado de peliculas, .
Un formulario con un campo de texto para introducir valores y un boton.
Luego un div o un apartado donde creemos una UL para luego ir pintando en LI´s los
valores que introduzca el usuario en el form mediante el boton
2- Hacer un evento onsubmit para que cuando se metan elementos  en el form, se 
guarden  en el localStorage y tambien se pinten en el div, filtraremos que lo que 
introduzca sea texto
3- Haremos otro campo en el form para borrar elementos introducidos del 
localStorage y del listado que esta pintado 
*/

window.addEventListener('load', function(){


var formularioA= document.querySelector('#formularioAñadir');

formularioA.addEventListener('submit', ()=>{

var inputA= document.querySelector('#inputAñadir').value;

if(inputA.length >= 1){
	localStorage.setItem(inputA, inputA);
};

});//Fin evento submit A

var ul=document.querySelector('#lista-peliculas');

for(let i in localStorage){
	if(typeof localStorage[i] == 'string'){
		var li= document.createElement('li');
		li.append(localStorage[i]);
		ul.append(li);
	}
}// Fin pintada del localStorage en ul 

var formularioB= document.querySelector('#formularioBorrar');

formularioB.addEventListener('submit', function(){

var inputB= document.querySelector('#inputB').value;

localStorage.removeItem(inputB);


});//Fin evento submit borrar




}); //Fin del evento load