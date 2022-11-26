//TIPOS DE VARIABLES
//STRING
var cadena = 'Victorroblesweb.es'; //Asi usamos el tipo de dato almacenado
//en una variable
//let cadena: string ='Victorroblesweb.es';
cadena = 12;
// NUMBER
var numero = 12;
//BOOLEAN
var verdadero_falso = true;
//ANY, O CUALQUIER COSA
var cualquiera = 'hola';
cualquiera = 77;
//ARRAY
var lenguajes = ['PHP', 'JS', 'CSS'];
var cifras = [1, 2, 3];
var detodo = ['Christian', 2, 'coche', 12];
/*LET VS VAR
Let es un tipo de variable que solo puede usarse a nivel de bloque y Var se usa
de manera global, por lo demás es lo mismo*/
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1 = 44;
    var numero2_1 = 55;
    console.log(numero1, numero2_1);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, cifras, detodo);
