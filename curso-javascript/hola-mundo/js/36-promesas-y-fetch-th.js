'use strict'

/*USO DE PROMESAS O METODOS FETCHS (LLAMADAS AYAX/ASINCRONAS)
DE MANERA ENCADENADA  CON EL USO DE FUNCIONES PARA NO GENERAR CALLBACK HELL*/


getUsuarios() //Sin ; despues de invocar a la funcion () mucho ojo
.then(datos => datos.json())
.then(datosTransformados => {
listadoUsuarios(datosTransformados); //Llamamos a la funcion para pintar usuarios
/*Aqui hacemos que la promesa devuelva la funcion de la nueva promesa 
para encadenarla*/

return getJanet()
})
.then(data => data.json())
.then(user =>{

mostrarJanet(user.data);

});


function getUsuarios(){ //Creamos funcion con la url de la api de usuarios
	return fetch('https://jsonplaceholder.typicode.com/users');
}

function getJanet(){
	return fetch('https://reqres.in/api/users/2');
}


//Creamos una funcion para pintar los datos de los usuarioss
function listadoUsuarios(usuarios){

var div_datos= document.querySelector('#usuarios');

	usuarios.map((elemento, indice)=>{
		let h2= document.createElement('h2');
		h2.innerHTML = indice + ' - ' + elemento.name;
		div_datos.append(h2);
	});

		document.querySelector('.loading').style.display='none';
};

/*Creamos la funcion con el codigo para mostrar los datos del usuario,
en este caso el de janet*/
function mostrarJanet(user){

var div_janet= document.querySelector('#janet');

	/*usuario.map((elemento, indice)=>{ NO ES NECESARIO MAP POR QUE NO ES UNA 
		COLECCION, SI NO UN UNICO ELEMENTO*/

		let h4= document.createElement('h4');
		let avatar= document.createElement('img') 
		//Las imagenes se embeben dentro de las etiquetas img

		h4.innerHTML = user.first_name + ' ' + user.last_name;
		avatar.src= user.avatar; 
		avatar.width= '100';

		div_janet.append(h4);
		div_janet.append(avatar);

		document.querySelector('#janet .loading').style.display='none';
};
