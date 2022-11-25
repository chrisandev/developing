'use strict'

/*Pedir 2 numeros al usuario, recorrer todos del primero al segundo y mostrar los numeros pares*/

var numero1=parseInt(prompt('Introduce el numero 1',0));

var numero2=parseInt(prompt('Introduce el numero 2',0));

while(numero1 < numero2){
	
numero1++; //El while no itera de manera automatica como el for, pero impone una condición

if(numero1%2 != 0){
	console.log('EL numero '+numero1+' es impar');
}
};

/*FORMA SECUNDARIA, USANDO FOR

var numero1= parseInt(prompt('Introduce un numero'));

var numero2= parseInt(prompt('Introduce otro numero'));

for(var i= numero1; i <=numero2; i++){

if(i%2 == 0){
	document.write('<li>'+i+'</li>');
};
};

*/