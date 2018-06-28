"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDecarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDecarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioFuncionamento = function () {
        return "De segunda a sexta das 8:00 às 18:00 e sábado das 08:00 às 12:00";
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
