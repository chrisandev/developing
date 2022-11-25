'strict'
//TIPOS DE DATOS

//Operadores
var numero1=7;
var numero2=12;
var operacion=numero1*numero2;

alert("El resultado de la operacion es "+operacion);

//Tipos de dato
var numero_entero=44;
var cadena_texto="Hola que tal";
var verdadero_o_falso = true;

var numero_falso= "33.4";

console.log(verdadero_o_falso);

console.log(String(numero_entero+4)); //Aqui transformamos la variable numero entero a String para que se le pueda concatener el +4 y 
//y no se lo sume, si JS identifica que intentas contatenar 2 numeros con el +, directamente los suma, pero su dices que un numero es 
//un tipo de dato String, lo concatenará.

console.log(type of numero_entero); //El type of nos devolverá el tipo de dato que le adjuntemos de seguido, 
//esto servirá para saber identificar que tenemos.
console.log(type of cadena_texto);
console.log(verdadero_o_falso);
console.log(numero_falso);
