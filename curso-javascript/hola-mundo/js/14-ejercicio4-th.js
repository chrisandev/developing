'use strict'

/*Pedir 2 numeros al usuario, recorrer todos del primero al segundo y mostrar los numeros pares*/

/*FORMA SECUNDARIA, USANDO FOR

var numero1= parseInt(prompt('Introduce un numero'));

var numero2= parseInt(prompt('Introduce otro numero'));

for(var i= numero1; i <=numero2; i++){

if(i%2 == 0){
	document.write('<li>'+i+'</li>');
};
};
*/

var numero1= parseInt(prompt('Introduce un numero'));

var numero2=parseInt(prompt('Introduce otro numero'));

while(numero1 <= numero2){

	if(numero1%2 == 0){
		document.write('<li>'+numero1+'</li>');
	}else{
		document.write('<li>Numero impar</li>');
	}
	numero1++;
}