'use strict'

/*JSON- JavaScript Object Notation
Son un tipo de objetos de JS que implican una especie de array asociativo,
hay objetos normales y objetos JSON. Con esto podemos enviar y recibir datos de 
una forma mmuy rapida y elegante, mongoDB por ejemplo almacena los datos en JSON*/

/*Los objetos json se declaran mediante 2 llaves {} unidos, cada elemento en su
interior es separado por coma*/

window.addEventListener('load',()=>{

var pelicula= {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados Unidos'
}

console.log(pelicula); 
//Si sacamos la info del objeto veremos que es una especie de array que almacena 
//varios elementos

pelicula.titulo = 'Superman Begins';

/*HAGAMOS AHORA UN ARRAY introduciendo 2 objetos JSONs en el */
var peliculas= [
{titulo: 'La verdad duele', year: 2016, pais: 'Francia'}, //creamos un JSON
pelicula //Metemos nuestro anterior JSON
];

console.log(peliculas);

var box= document.querySelector('#box');

/*Si no indicamos la propiedad del JSON que queremos imprimir, nos sacara 
el nombre de objeto por pantalla ya que solo se pueden imprimir propiedades de 
estos*/
for( let index in peliculas){
	var parrafo= document.createElement('p');
	parrafo.append(peliculas[index].titulo+ ' - '+peliculas[index].year );
	box.append(parrafo);
}

})

