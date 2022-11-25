/*CLASES EN TYPESCRIPT

Estas tambien se pueden realizar con JS vanilla pero lo haremos asi para tener
mayor compatibilidad con navegadores antiguos y para practicar con typeScript.
Una clase es un molde de algo en particular donde se ubicaran propiedades o
caracteristicas de la clase y tambien metodos para realizar diversas acciones
que podrán ser usadas por los objetos sacados de esa clase.
Los objetos son entidades sacadas del molde o clase, los objetos sacados del mismo
molde compartiran propiedades y metodos similares.
Las propiedades podran tener 3 modificadores de acceso,
Public: que hara que las
propiedades sean usables y visibles desde cualquier clase y lugar
Protected: solo podran ser usados por clases que hereden de la misma
Private: solo podran ser usados por la misma clase y en el mismo ambito o bloque
*/
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
/*DECORADORES
Los decoradores son funciones que añaden funcionalidad y caracteristicas a
nuestras clases, esto puede ahorrar la necesidad de heredar, se usa con
frecuencia en angular. hacen puntero o target a los metodos de la clase,
luego definimos un nombre para ese metodo que se podrá usar en los objetos
 y luego establecemos lo que queremos que haga ese metodo, en este caso una
 impresion de texto por consola.
 Siempre se declaran antes de la creacion de la clase.
 Si no tiene requiere argumentos no es necesario poner () en su invocacion
 previa a la clase, quedaria asi. @estampar  sin ()
*/
function estampar(logo) {
    // sin parametros se definiria asi,  function estampar(target: Function){
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Camiseta estampada con el logo ' + logo);
        };
    };
}
//Creacion de la clase implementando la interfaz creada
var Camiseta = /** @class */ (function () {
    /*Métodos (funciones o acciones del objeto)
    si queremos poder acceder con un objeto de la clase deberemos ponerle
    modificador de acceso public*/
    /*Metodo Constructor
    Es el primer metodo que se debe crear, se llama automaticamente al instanciar
    un objeto de la clase y nunca devuelve nada.
    Tiene como objetivo dar valor o inicializar las propiedades declaradas en la
    clase. Para declarar este  metodo habra que usar la palabra reservada
    constructor*/
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    /*Metodos Setters y Getters, los primeros se usar para cambiar valores de los atributos
    y los segundos para obtener esos valores y poder reusarlos en otro lugar
    almacenandolos por ejemplo, en una variable*/
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci') //no se cierra con punto y coma
    ], Camiseta);
    return Camiseta;
}());
/*Creacion o instanciacion del objeto, lo puedes llamar como quieras al igual
que una variable, pero siempre seguido de new y el nombre de la Clase(),
eso indica que es un objeto que deriva de ese molde o clase y podrá acceder a sus
propiedades y metodos*/
var camiseta = new Camiseta('Amarillo', 'Manga larga', 'Puma', 'L', 25);
/*podemos inicializar las propiedades de manera manual siempre y cuando tengan
modificador de acceso public, si fuera private en la clase, solo podriamos
acceder a su interaccion mediante metodos*/
/*
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nike';
camiseta.talla = 'L';
camiseta.precio = '10';
*/
camiseta.setColor('Marron');
camiseta.estampacion(); //LLAMAMOS AL METODO CREADO CON EL DECORADOR
console.log(camiseta);
//console.log(camiseta.getColor()); 
/*Si usaramos camiseta.color en el console.log tambien nos mostraria lo mismo
que con getColor por que ya lo hemos seteado y se desbloquea*/
/*Si no inicializamos las variables no saldrá nada de las propiedades del objeto
hay que darles valor y luego al imprimir el objeto saldra todo lo que este
seteado*/
var playera = new Camiseta();
/*
playera.color = 'Azul';
playera.modelo = 'Manga Corta';
playera.marca= 'Adidas';
playera.talla = 'L';
playera.precio = '20';
*/
playera.setColor('Amarillo');
console.log(playera);
/*HERENCIA
Mediante la herencia podemos hacer que una clase herede de otra  clase todos
sus atributos y metodos, y logicamente, este otra nueva clase podrá tener acceso
a todo lo de la anterior y ademas añadir sus propios atributos y metodos*/
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return capucha;
    };
    return Sudadera;
}(Camiseta));
/*Podemos aplicarle el constructor que tenia la clase padre, de hecho si
imprimimos por consola el nuevo objeto entero, nos sacaria esas propiedades
undefined si no las definimos previamente, pero ya las lista*/
var sudadera_nike = new Sudadera('Rojo', 'Manga larga', 'Nike', 'L', 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor('Gris jaspeado'); //Metodo heredado
console.log(sudadera_nike);
