/*Interfaces
Pequeño contrato que exije la incorporacion de algunos metodos o atributos
en la clase, se suele usar con metodos principalmente*/
//Creacion de la clase o el molde para hacer objetos derivantes
var Coche = /** @class */ (function () {
    //Metodos (Al menos se suele incluir el contructor, getters y setters)
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0; /*No se deben inicializar los atributos en su
        declaracion dentro de la clase, se debe hacer en el metodo constructor*/
        if (modelo == null) {
            this.modelo = 'BMW generico';
        }
        else {
            this.modelo = modelo;
        }
        this.color = 'Blanco generico';
        this.velocidad = 0;
    }
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    return Coche;
}());
var coche1 = new Coche();
coche1.setColor('Azulito');
coche1.setVelocidad(200);
console.log('El color del coche 1 es: ' + coche1.getColor());
console.log(coche1);
coche1.acelerar();
coche1.acelerar();
console.log('La velocidad del coche 1 es :' + coche1.getVelocidad());
coche1.frenar();
console.log('La velocidad del coche 1 tras frenar es :' + coche1.getVelocidad());
console.log(coche1);
/*
var coche2 = new Coche();
coche2.setColor('verde');

console.log('El color del coche 2 es: '+coche2.getColor());

var coche3 = new Coche();
coche3.setColor('rojo');

console.log('El color del coche 3 es: '+coche3.getColor());
*/
