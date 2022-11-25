'use strict'

/*PARAMETROS
Son una serie de instruciones o datos que se les pasa al invocar una funcion para que su resultado sea dinamico segun le pasemos datos
Estos datos que le deberemos de pasar se declaran cuando creamos la funcion en tipo", y se han de introducir los datos de ese tipo 
cuando invoquemos a la funcion.*/

function calculadora(numero1, numero2, mostrar=false){ //PARAMETROS serian el numero1 y el numero2, en la creacion se indica el nombre de las 
//variables que se usaran

//Conjunto de instrucciones a utilizar

if(mostrar==false){
console.log("Suma: "+(numero1+numero2));
console.log("Resta: "+(numero1-numero2));
console.log("Multiplicacion: "+(numero1*numero2));
console.log("Division: "+(numero1/numero2));
console.log("\n");	
}
if(mostrar==true){
document.write("Suma: "+(numero1+numero2)+"</br>");
document.write("Resta: "+(numero1-numero2)+"</br>");
document.write("Multiplicacion: "+(numero1*numero2)+"</br>");
document.write("Division: "+(numero1/numero2)+"</br>");
document.write("\n");	
}

}
/*for(var i=1;i <=10; i++){
	console.log(i);
	calculadora(i,1);
}*/
