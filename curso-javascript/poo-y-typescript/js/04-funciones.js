/*En esta funcion indicamos que el numero por defecto será 12, y que el return nos
debe devolver un string, si no es lo que declaramos nos saldrá un error*/
function getNumero(numero) {
    if (numero === void 0) { numero = 12; }
    return 'El numero es ' + numero;
}
/*Aunque el valor por defecto es 12, aqui le pasamos que es 55 */
console.log(getNumero(55));
