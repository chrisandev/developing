'use strict'

/*CREACION DE PROMESAS
Veremos como crear una nueva promesa, la encapsularemos en una  funcion y la 
uniremos al promise chain para no originar callback hell en un mismo then o 
promesa*/

var usuarios= [];

		var div_usuarios= document.querySelector('#usuarios');
		var div_usuario= document.querySelector('#janet');
		var div_profesor= document.querySelector('#profesor');

	llamarUsuarios()
	.then(datos => datos.json()) 
	.then(users => {  

		pintarUsuarios(users.data);

		return getInfo()
	})
		.then(data=>{

		div_profesor.innerHTML = data;

		return llamarUsuario()

	})
	.then(datos => datos.json())
	.then(user => {

	pintarUsuario(user.data);
	})
		/*Asi capturariamos un error con una arrow function, en este caso pues
	hacemos que nos devuelva este  texto por ejemplo, esto lo hará siempre  
	que ocurra un error en la cadena  de promesas, sea el que sea y en la 
	promesa que sea*/
	.catch(error =>{
		alert('Error en las peticiones'); //HACEMOS QUE NOS DEVUELVA TEXTO
	});
	

	//Encapsulamos  la peticion ajax de los usuarios
	function llamarUsuarios(){
		return fetch('https://reqres.in/api/users');
	}

	//Encapsulamos la pintada de usuarios
	function pintarUsuarios(users){

		users.map((user, i) =>{ 
			let h2= document.createElement('h2');
			h2.innerHTML = i + '. ' + user.first_name + ',  '+
			user.last_name;
			div_usuarios.append(h2);

			document.querySelector('.loading').style.display= 'none';
		});
	}

	//Encapsulamos la nueva promesa a un usuario
	function llamarUsuario(){
		return fetch('https://reqres.in/api/users/2');
	}

	//Encapsulamos la pintada del usuario
	function pintarUsuario(user){

			let h2= document.createElement('h2');
			h2.innerHTML = user.first_name + ', '+user.last_name;
			div_usuario.append(h2);
			let img= document.createElement('img');
			img.src = user.avatar;
			div_usuario.append(img);

			document.querySelector('#janet .loading').style.display= 'none';
		
	}

	function getInfo(){

		/*CREACION DE PROMESAS DESDE 0, DENTRO  DE UNA  FUNCION PARA INVOCARLA
		- Primero hacemos un JSON*/
		var profesor= {
			nombre: 'Victor',
			apellidos: 'Robles',
			url: 'https://victorroblesweb.es'
		}

/*Creamos un nuevo objeto de promesa y lo devolvemos en la funcion para que
pueda ser reutilizada logicamente, todas  las promesas deben tener una funcion
de callback asociada con los parametros resolve y reject, con un if indicaremos
que pasa si se  resuelve que será que devolveremos el JSON pasado a string,
y lo que pasara con reject que será que mostrará un mensaje por consola con el 
texto de error que pasemos. Basicamente  si pasa el filtro lo que hace la promesa
es devolver ese JSON en string y permitir usarlo en otra cadena de promesas
*/
		return new Promise((resolve, reject)=>{

			setTimeout(function(){ //Podemos hacerlos con un timeOut

			var profesor_string= JSON.stringify(profesor);

			if(typeof profesor_string != 'string'){
				return reject('error 1');
			}else{
				return resolve(profesor_string);
			}

			}, 3000);

		}); 
};