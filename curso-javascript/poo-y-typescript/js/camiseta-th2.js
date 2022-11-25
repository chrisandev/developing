/*CREACION DE CLASES, atributos y metodos en TS*/
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
/*Creacion del decorador sin argunemtos*/
function estampar2(target) {
    target.prototype.estampacion2 = function () {
        console.log('Imprimo esto gracias al decorador');
    };
}
/*Decorador con argumento*/
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('El logo es: ' + logo);
        };
    };
}
//Creacion de la clase
/*Instanciamiento del decorador sin argumento
@estampar2*/
var Camiseta = /** @class */ (function () {
    //Metodo Constructor
    function Camiseta(marca, talla, color, modelo, precio) {
        this.marca = marca;
        this.talla = talla;
        this.color = color;
        this.modelo = modelo;
        this.precio = precio;
    }
    //Métodos Setters y Getters
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Adidas')
    ], Camiseta);
    return Camiseta;
}());
//Instanciamiento o creacion de un objeto de la clase
var camisetaMolona = new Camiseta('Niko', 'Deportiva', 'XL', 'Amarillo', 55);
camisetaMolona.setColor('Verde electrico');
console.log(camisetaMolona.getColor());
camisetaMolona.estampacion();
console.log(camisetaMolona);
var camisetaPlayera = new Camiseta('Springfield', 'Polo', 'Amarillo', 'XL', 40);
console.log(camisetaPlayera);
/*HERENCIA, con ello obtendremos todos los metodos y atributos de la clase
padre.
Creacion de la clase hija, para heredar usaremos la palabra reservada extends
seguido del nombre de la clase padre*/
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ///Metodos
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_adidas = new Sudadera('Adidas', 'L', 'Azul', 'Manga larga', 40);
sudadera_adidas.setColor('Gris jaspeado');
sudadera_adidas.setCapucha(true);
console.log(sudadera_adidas);
