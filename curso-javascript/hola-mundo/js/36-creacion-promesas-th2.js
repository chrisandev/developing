'use strict'

/*CREACION DE PROMESAS
Crearemos una nueva  promesa desde un JSON, y devolveremos su valor en una
funcion, luego la encadenaremos en el promise chain al igual que las restantes
que las hemos cogido de una API, lo haremos en medio de las 2 que ya tenemos
y ademas  lo haremos con un setTimeout para probarlo.*/

var divProfesor = document.querySelector('#profesor');

	llamarUsuarios()
	.then(datos => datos.json()) 
	.then(users => {  

		pintarUsuarios(users.data);

		return getProfesor()
	
	})
		.then(datos => {

			divProfesor.innerHTML = datos;

				return llamarUsuario()
		})
	.then(datos => datos.json())
	.then(user => {

		pintarUsuario(user.data);

	})
	/*Asi capturariamos un error con una arrow function, en este caso pues
	hacemos que nos devuelva este  texto por ejemplo, esto lo hará siempre  
	que ocurra un error en la cadena  de promesas, sea el que sea y en la 
	promesa que sea, hasta donde se el catch se pone  al final de la chain*/
	.catch(error =>{

		alert('Error en la promise chain');
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

	//CREAMOS LA FUNCION QUE ENCAPSULARA TODO
	function getProfesor(){

			//CREACION PROMESA

	var profesor={
		nombre: 'Christian',
		apellidos: 'Sánchez Martínez',
		edad: '33'
	}

	//PASAMOS EL JSON A STRING YA QUE TODO DATO DESDE UN SERVER O LS ESTA
	//EN STRING

	var profeString = JSON.stringify(profesor);

	//Declaramos la nueva promesa con los parametros  resolve y reject


			return new Promise((resolve, reject) =>{

			setTimeout(()=>{
		if(typeof profeString == 'string'){
			return resolve(profeString);
		}else{
			return reject('error en la creacion de la promesa');
		}
				}, 3000);
	});


	}//Fin getProfesor

	