'use strict'

/*Hacer ejercicio que nos indique si un numero es par o inpar, ha de contener:
1- Ventana que pida un numero al user
2- Si no es valido, que nos pida de nuevo el numero*/

var numero=parseInt(prompt('Introduce un numero',0));

while(isNaN(numero)){
	numero=parseInt(prompt('Introduce un numero',0));
}

if(numero %2 ==0){
	alert('Es un numero par');
}
else{
	alert('Es impar');	
}
