"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log('Aplicación JS cargada!!');
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta('Rojo', 'fasdsa', 'dassa', 'affd', 21);
    };
    return Main;
}());
var main = new Main();
