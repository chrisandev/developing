'use strict'

/*TRY - CATCH
Es una estructura para capturar error que puedan suceder en una estructura de 
codigo determinado, cuando interpretemos que una parte del codigo posiblemenete 
tendrá errores lo meteremos en esta estructura y manipularemos el error para 
hacer con el lo que queramos, por ejemplo, que no se muestre  por consola,
cambiarle el nombre, sacarlo por alert.. etc*/

//Estructura

try{//Dentro del try se mete el codigo que pueda dar error
	var year= 2022;
	alert(year);
/*decodeURIComponent sirve para decodificar en texto una URL en vez de en
formato enlace*/
	decodeURIComponent('www.googlssss%3·#i.com'); //No existe esta URL
	var vector= new Array(999999999999999999999); //No puede tener tantos indices

}catch(error){ //Siempre se pone error en el parametro a capturar
	console.log(error); /*Asi  lo sacaria por consola pero en formato de texto,
	y no de error en rojo tipico, es más soft*/
	alert('Ha ocurrido un error en el codigo');
}