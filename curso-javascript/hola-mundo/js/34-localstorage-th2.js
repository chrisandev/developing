'use strict'

/*Se pide:
1. Meter un string en  el  local storage, sacarlo del localstorage y pintarlo
en un div a la misma vez, lueego sacarlo por consola
2. Meter un JSON como string en el localstorage, recogerlo, transformarlo de 
nuevo a JSON, pintarlo en otro div y sacarlo por consola
3. Borrar un elemento en concreto del local storage
4. Borrar todos los elementos del ls*/

window.addEventListener('load', ()=>{

/*1. Meter un string en  el  local storage, sacarlo del localstorage y pintarlo
en un div a la misma vez, lueego sacarlo por consola*/	

var fruta= 'pera';

localStorage.setItem('fruta', fruta);

document.querySelector('#box').innerHTML = localStorage.getItem('fruta');

/*2. Crear y meter un JSON como string en el localstorage, recogerlo, transformarlo de 
nuevo a JSON, pintarlo en otro div y sacarlo por consola*/

var pelicula= {
nombre: 'arma letal',
actor: 'Mel Gibson',
año: '1992'
};

localStorage.setItem('pelicula', JSON.stringify(pelicula));



var jsonpeli = JSON.parse(localStorage.getItem('pelicula'));

/*Si no lo metemos antes en una variable no podemos  sacar sus propiedades
de objeto
*/

document.querySelector('#box2').innerHTML = jsonpeli.nombre+' - '+jsonpeli.actor;


//3. Borrar un elemento en concreto del local storage

localStorage.removeItem('fruta');

//Borrar todo el localStorage

//localStorage.clear();




});


