var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*DECORADOR
 Patron de diseño que nos permite mediante unos datos que le definimos, a una
 clase hacer una copia de esa clase y modificarla o que haga unas funcionalidades
 u otras en funcion de los parametros que le pasemos.
 Creamos una funcion que exigirá que le pasemos un string.
 Esto devolverá una función anonima
 Definimos que la funcion se llamará estampacion y que esta funcion no devolverá
 nada o será void.
 Y por ultimo definimos que hacer esta función que es hacer un console log,
 diciendo el logo que le pasamos al principio*/
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo de: ' + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    //Métodos (funciones o acciones que va a hacer el objeto)
    /*Constructor
    Metodo que sirve para asignar valor a las propiedades
    del objeto, es el primer metodo en ser instanciado y es que se instancia
    a la vez que se instancia el objeto, se ha de parametrizar y esos valores
    serán los que se le pasen al objeto segun definamos en su construccion*/
    function Camiseta(color, modelo, marca, tamaño, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.tamaño = tamaño;
        this.precio = precio;
    }
    //Set Para darle un valor a una propiedad
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    //Get para obtener el retorno de algo.
    Camiseta.prototype.getColor = function (color) {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang') /*No se cierra con punto y coma, se aplica directamente
        a la clase siguiente*/
        //Clase o molde del objeto
        /*export*/ 
    ], Camiseta);
    return Camiseta;
}());
/*
var camiseta = new Camiseta('rojo', 'manga larga', 'nike', 'L', '10');
Instanciamos la clase metiendola en una variable y rellenamos los parametros que
nos pide el metodo constructor

camiseta.cambiarColor('Rojo'); //Luego le cambiamos el color a Rojo
//camisetagetColor();

var playera = new Camiseta();
playera.setColor('Azul');
*/
/*
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nike';
camiseta.talla = 'L';
camiseta.precio = '10';

var playera = new Camiseta();
playera.color= 'Azul';
playera.modelo = 'Manga Corta';
playera.marca = 'Adidas';
playera.talla = 'L';
playera.precio= '15';
*/
/*HERENCIA
Es una forma de crear clases hijas que hereden de una clase o entidad padre,
de este modo heredaran sus propiedades y metodos creados en la entidad padre
de manera automatica, ahorrandonos codigo.*/
//Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta('azul', 'dasd', 'dasdsa', 'das', 24);
camiseta.estampacion(); /*llamamos al decorador ('metodo estampacion')*/
var playera = new Camiseta('Amarilla', 'dassa', 'ggfgf', 'gsgg', 18);
/*Podemos crear diferentes objetos instanciando el mismo molde o clase principal*/
var sudadera_nike = new Sudadera('Naranja', 'dassa', 'ggfgf', 'gsgg', 12);
sudadera_nike.setColor('Amarilla');
sudadera_nike.setCapucha(true);
sudadera_nike.getCapucha;
console.log(sudadera_nike);
console.log(camiseta, playera);
