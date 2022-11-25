'use strict'

/*METODO FETCH
Metodo que permite hacer peticiones AYAX, es una llamada a un servicio REST
o Backend que nos devolvera un resultado de datos en JSON*/

/*	Tras efectuar el metodo fetch o la llamada al servicio REST eso se denomina
promesa, y posteriormente a la promesa deben de haber 2 funciones then.
La primera de las funciones then convierte los datos que nos llegan a json y
 con estos datos convertidos ya hacemos lo que queramos
	data es un parametro que se puede llamar de la forma que queramos pues 
	esto es un callback, incluso los datos que nos llegan en la primera promesa
	(then) se pueden llamar como queramos, y luego en el segundo .then podemos 
	cambiar a esos datos ya transformados a JSON el nombre quedandose users por
	ejemplo en vez de data, a nuestro gusto, unicamente despues deberemos de 
	emplear el metodo .data sobre el parametro que hayamos introducido en el 
	segundo then si arriba ponemos data y debajo users, pues para sacar esos datos
	deberemos aplicar el metodo users.data
	*/

var usuarios= [];

//fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://reqres.in/api/users')
	.then(datos => datos.json()) /*Recogemos todo en una variable, ej datos*/
	.then(users => {  /*Todo lo recogido en JSON, lo guardamos en otra var
		, por ejemplo users, como quieras llamarla*/

usuarios = users.data; /*por ejemplo guardarlo en un array para reutilizarlo
, si usas el metodo .data sacas justo el array, solo con users sacarias mas
informacion que no quieres, DATA EXISTE AQUI SOLO POR QUE EN LA INFORMACION
SACADA DE LA API SE INDICA QUE EL DATA ES EL ARRAY, SI POR EJEMPLO DE OTRA API
LA INFORMACION NO TUVIERA VARIOS APARTADOS NO HARIA  FALTA FILTRAR EL .DATA
SACARIAMOS USERS Y AHI YA TENDRIAMOS LO QUE QUEREMOS, EN ESTE CASO EL ARRAY*/
		console.log(usuarios);

	var div_usuarios= document.querySelector('#usuarios');

		usuarios.map((user, i) =>{ //Map es parecido a un forEach
			let h2= document.createElement('h2');
			h2.innerHTML = i + '. ' + user.first_name + ',  '+
			user.last_name;
			div_usuarios.append(h2);
		/*Tambien se puede hacer con parrafos e innerHTML en vez de append
		
			let p= document.createElement('p');
			p.innerHTML = i + ' - ' + user.first_name + ' - '+ user.last_name;
			div_usuarios.append(p);

			*/

			document.querySelector('.loading').style.display= 'none';
		});
	});

/*El primer then seria lo mismo hacerlo del siguiente modo, pero se escribe 
mas codigo, es un callback con return como ya hemos visto previamente.

.then(function(data){
return data.json()
}
o
.then((data)=>{
return data.json()
}*/

