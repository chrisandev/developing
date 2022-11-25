'use strict';

/*Metodo try - catch
El try simboliza, intenta hacer lo que metamos dentro, y el catch
se usa para capturar un error y que el programa haga lo que le digamos cuando ocurra
en este caso, el metodo decodeURI intentará acceder a una url que no existe y nos 
sacará un error, diciendo por un alert, ha ocurrido un error, Tambien podriamos
intentar crear un objeto de array con más indices de los que se permiten y nos daria
otro.
Algo que debemos saber es que si sacamos el error por algun lugar que no sea 
la consola, que es el modo default, ya no saldrá por la consola salvo que lo declaremos
nosotros manualmente, de lo contrario solo saldría el alert y nada por consola*/

try{
	var year= 2022;
	alert('year');
	//var arraylargo = new Array(5252525252352);
	console.log(decodeURIComponent("https://victorr532532oblesweb.es"));

}catch(error){
	console.log(error)
	alert('A ocurrido un error en el código');
}