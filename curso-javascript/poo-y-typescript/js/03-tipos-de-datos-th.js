/*DECLARACION DE VARIABLES EN TYPESCRIPT
TIPOS DE DATOS*/
//String
var cadena = 'christianSanchez';
//Number
var numero = 12;
//Boleano
var verdadero_falso = false;
//Any (para forzar cualquier tipo de dato en una variable)
var cualquiera = 'hola';
cualquiera = 77;
//Arrays, tienen 2 formas de declaracion
var lenguajes = ['PHP', 'JS', 'CSS'];
var years = ['DOCE', 12, 15];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
/*Las variables pueden almacenar tantos tipos de datos como le indiquemos mediante
tuberias*/
var cadena_x = false;
console.log(cadena_x);
var textoNumero = 15;
var coleccionBool = [2, 'php', true];
console.log(textoNumero, coleccionBool);
/*En caso de inicializar la variable con un tipo de dato  no correspondiente
el programa dará error*/
/*LET VS VAR
Let actua a nivel de bloque sin modificar nada global y var actua a nivel global*/
/*
var numero1= 10;
var numero2= 12;

console.log('Recien declarados '+ numero1, ' '+ numero2)

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log('Dentro del IF con let '+ numero1, ' y con var  '+ numero2);
}

console.log('Fuera del IF '+ numero1, ' '+ numero2);
*/
var numero1 = 40;
var numero2 = 15;
console.log(numero1, numero2);
if (numero1 == 40) {
    var numero1_1 = 1002;
    var numero2 = 29;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
