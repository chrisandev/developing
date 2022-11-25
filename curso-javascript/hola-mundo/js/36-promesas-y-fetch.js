'use strict';

/*Aprenderemos a sacar realizar varias peticiones ayax o metodos fetch enlazados para
no generar el llamado callback hell que es una mala practica, asi se enlazan
metodos fetch y promesas (then), usando ademas funciones para ahorrar codigo*/


var div_usuarios = document.querySelector('#usuarios');

var div_janet = document.querySelector('#janet');

//var usuarios =[]; Esto ya no hace falta con la funcion 

//fetch('https://reqres.in/api/users?page=2')
getUsuarios() /*Funcion para hacer fetch sin escribir tanto, como todas las funciones*/

.then(data => data.json())
.then(users => {
//usuarios = users.data; Esto ya no hace falta con la funcion
listadoUsuarios(users.data);

return getJanet();
})
.then(data => data.json())
.then(user =>{

mostrarJanet(user.data);
})
;

function getUsuarios(){
	return fetch('https://reqres.in/api/users?page=2')
}

function listadoUsuarios(usuarios){
	usuarios.map((persona, i) => {

	let nombre = document.createElement('h3');

	nombre.innerHTML = i + ' ' + persona.first_name + ' ' + persona.last_name;

	div_usuarios.append(nombre);

	document.querySelector('.loading').style.display = 'none';

});
}

function getJanet(){
	return fetch('https://reqres.in/api/users/2')
}

function mostrarJanet(user){

	let nombre = document.createElement('h4');

	let avatar = document.createElement('img');

	nombre.innerHTML = user.first_name + ' ' + user.last_name;

	avatar.src = user.avatar;
	avatar.width = '100';

	div_janet.append(nombre);
	div_janet.append(avatar);

	document.querySelector('#janet .loading').style.display = 'none';
};
