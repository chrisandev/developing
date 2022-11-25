'use strict'

/*BOM: Browser Object Model
Se encarga de manipular todo lo relacionado con el navegador web y lo
que se ve en pantalla, con sus metodos y funciones podemos hacer todo lo
que hariamos en el navegador*/

//Metodos convencionales BOM

function metodosBom(){
	//Mostrar altura
	console.log(screen.height);
	//Mostrar anchura
	console.log(screen.width);
	//Mostrar datos de la location de la url 
	console.log(window.location);
}

metodosBom();

function redirect(url){ //Redirigir a otra url
	window.location.href = url;
}

function openUrl(url){ //Abrir nueva ventana en pop up con los parametros
	window.open(url,'', 'width=300, height= 400');
}



