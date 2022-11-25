'use strict'

/*METODO FETCH
llamadas o peticiones AYAX, tambien conocidas como
asincronas, consiste en realizar peticiones a un servicio REST o API para
consumir un servicio y trabajar con datos tipo JSON, ya sea obteniendolos,
posteandolos, etc  */

var usuarios=[];

fetch('https://jsonplaceholder.typicode.com/users')
.then(datos => datos.json())
.then(datosTransformados =>{

	console.log(datosTransformados);

	/*usuarios = datosTransformados; En este caso como la informacion ya sale  
	filtrada podriamos no necesitar meter el parametro en una variable, se puede
	usar como objeto tal cual y el resultado es el mismo*/

	var divDatos= document.querySelector('#usuarios');

	datosTransformados.map((elemento, indice)=>{
		let h2= document.createElement('h2');
		h2.innerHTML = indice + ' - ' + elemento.name;
		divDatos.append(h2);
	});

		document.querySelector('.loading').style.display='none';

});
