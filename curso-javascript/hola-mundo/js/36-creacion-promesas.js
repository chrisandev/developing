'use strict';

//Aprenderemos a crear promesas para diferentes metodos https


var div_usuarios = document.querySelector('#usuarios');

var div_profesor = document.querySelector('#profesor');

var div_janet = document.querySelector('#janet');

getUsuarios() 

.then(data => data.json())
.then(users => {
//usuarios = users.data; Esto ya no hace falta con la funcion
listadoUsuarios(users.data);

return getInfo();
})

/*data es como llamamos a la funcion que define los datos que hay dentro, creo que
se puede llamar como queramos, y luego con esos datos pues hacemos lo que sea, por
ejemplo, un console log de ellos*/
.then(data =>{ 
	div_profesor.innerHTML = data;

	return getJanet();
})

.then(data => data.json())
.then(user =>{

mostrarJanet(user.data);
})


//CREACION DE FUNCIONES

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


/*PROCESO DE CREACION DE PROMESAS DESDE 0
Empezaremos creando un objeto JSON (es un tipo de objeto), Emplean las cadenas then
para no hacer callback hell*/

function getInfo(){

var profesor = {
	nombre: 'Victor',
	apellidos: 'Robles',
	url: 'httls://victorroblesweb.es'
};

/*Para crear una promesa deberemos crearla con new y hacer un callback con resolve
 y reject*/
return new Promise((resolve, reject) => {

/*Pasamos el JSON a string para poderlo manipular en el frontend dentro de la 
misma function, aqui solo definimos la varible y luego la inicializamos en el 
setTimeout*/
var profesor_string = '';

setTimeout(function(){ /*Creamos un setTimeout para que lo que metamos dentro,
se ejecute en un tiempo determinado*/ 

var profesor_string = JSON.stringify(profesor); //Lo inicializamos aqui

/*El callback deberá devolver la funcion resolve y reject pasadas por el callback
Reject es en caso de ser rechazada o denegada la promesa y resolve en  caso de ser
resuelta exitosamente */
if(typeof profesor_string != 'string' || profesor_string == '') return reject('error_1');
/*No hace fata crear un else
, no abrirle llaves, podemos hacer if, pues return reject sin mas.*/

/*Y si ese if no se cumple, pues se ejecutará por orden este resolve, y ya tenemos 
el return de ambas funciones del callback Y YA TENEMOS OTRA PROMESA PARA ENCADENAR*/
return resolve(profesor_string);

}, 3000);

});
}