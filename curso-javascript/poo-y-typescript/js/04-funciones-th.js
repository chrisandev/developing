/*FUNCIONES EN TYPESCRIPT

Podemos indicar que tipo de dato sera el parametro, ponerle un valor default que
luego si lo cambiamos en la invocacion sera substituido logicamente, y tambien
podemos indicar que tipo de dato sera el que ha de devolver, en caso de no ser asi
compilara por que es JS pero dará error
*/
/*
function getNumero(numero: number = 2):string{
    return 'el numero es '+numero;

}

console.log(getNumero(55));
*/
function getTexto(texto) {
    if (texto === void 0) { texto = 'nada'; }
    return texto;
}
console.log('el texto es: ' + getTexto('todo'));
