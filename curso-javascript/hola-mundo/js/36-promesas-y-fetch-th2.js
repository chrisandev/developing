'use strict'

/*
var usuarios= [];

fetch('https://reqres.in/api/users')
	.then(datos => datos.json()) 
	.then(users => {  

usuarios = users.data; 
		console.log(usuarios);

	var div_usuarios= document.querySelector('#usuarios');

		usuarios.map((user, i) =>{ 
			let h2= document.createElement('h2');
			h2.innerHTML = i + '. ' + user.first_name + ',  '+
			user.last_name;
			div_usuarios.append(h2);

			document.querySelector('.loading').style.display= 'none';
		});
	});
*/

var usuarios= [];

	llamarUsuarios()
	.then(datos => datos.json()) 
	.then(users => {  

		pintarUsuarios(users.data);

		return llamarUsuario()
	})
	.then(datos => datos.json())
	.then(user => {

		pintarUsuario(user.data);


	});

	//Encapsulamos  la peticion ajax de los usuarios
	function llamarUsuarios(){
		return fetch('https://reqres.in/api/users');
	}

	//Encapsulamos la pintada de usuarios
	function pintarUsuarios(users){

		var div_usuarios= document.querySelector('#usuarios');

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

		var div_usuario= document.querySelector('#janet');

			let h2= document.createElement('h2');
			h2.innerHTML = user.first_name + ', '+user.last_name;
			div_usuario.append(h2);
			let img= document.createElement('img');
			img.src = user.avatar;
			div_usuario.append(img);


			document.querySelector('#janet .loading').style.display= 'none';
	
	}







