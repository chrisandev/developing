'use strict'

/*JSON Java Script Object Notacion
Permite hacer objetos simples y arrays asociativos*/

var pelicula = { /*Un objeto en JavaScript, es decir, un objeto JSON se define como una variable,
	con las llaves y dentro de estas, definiremos sus propiedades (parecido al constructor de java)*/

	titulo: 'Batman vs Superman',
	año: 2017,
	pais: 'Estados Unidos'
};

//console.log(pelicula); /*Asi mostrariamos los datos del objeto*/

//pelicula.titulo = 'Superman Begins'; /*Asi modifico una de sus propiedades*/

console.log(pelicula.titulo); /*Asi accederiamos directamente a una de sus propiedades*/

/*Asi creamos un array de objetos, donde se puede meter directamente objetos aparte de atributos*/
var peliculas = [
{titulo: 'la verdad duele', year: 2016, pais: 'Francia'},
pelicula /*Aqui tenemos directamente un objeto*/
];

console.log(peliculas); 

/*Podemos recorrer nuestro array de peliculas y ir metiendolas dentro del html, en nuestro div peliculas*/
var caja_peliculas = document.querySelector('#peliculas');
for(var index in peliculas){ /*Index es el iterador, es como poner i en el for*/
var p = document.createElement('p');
p.append(peliculas[index].titulo + ' _ ' + peliculas[index].year); /*metemos las pelis cada vez que itere pero solo su propiedad titulo*/
caja_peliculas.append(p);
}


