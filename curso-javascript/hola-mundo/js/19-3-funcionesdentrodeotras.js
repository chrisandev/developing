'use strict'


function porConsola(numero1, numero2){
console.log("Suma: "+(numero1+numero2));
console.log("Resta: "+(numero1-numero2));
console.log("Multiplicacion: "+(numero1*numero2));
console.log("Division: "+(numero1/numero2));
console.log("******************************************");	
}

function porPantalla(numero1, numero2){
document.write("Suma: "+(numero1+numero2)+"</br>");
document.write("Resta: "+(numero1-numero2)+"</br>");
document.write("Multiplicacion: "+(numero1*numero2)+"</br>");
document.write("Division: "+(numero1/numero2)+"</br>");
document.write("***************************************");
}


function calculadora(numero1, numero2, mostrar = false){
	if(mostrar == false){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
	return true; //Esto no se si es por que ha de devolver algo obligado o que.. no entiendo este true, quizá por que su valor por 
	//defecto ya es false..
}

calculadora(2,7);