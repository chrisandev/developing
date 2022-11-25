/*Introduccion a los exports e imports
para ello lo primero es realizar un export sobre la clase que queramos añadiendo
la palabra reservada export, y luego sobre el fichero de la nueva clase lo primero
que hacemos será añadir la importacion de esa clase  del siguiente modo
import {Camiseta} from './camiseta-th';  en el caso de Camiseta , la ruta ./
indica que es dentro  de esta misma carpeta.*/
/*De momento lo comento por que no vamos a usar mas este fichero main
import {camiseta} from './camiseta-th';
*/
var Main = /** @class */ (function () {
    function Main() {
        console.log('Aplicacion JS cargada!! ');
    }
    return Main;
}());
var main = new Main();
