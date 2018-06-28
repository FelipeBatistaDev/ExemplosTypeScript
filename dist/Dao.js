"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = "mr_teste";
    }
    Dao.prototype.inserir = function (object) {
        console.log("logica de insert");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        "logica de atualizar";
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log("Logica delete");
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log("logica de select");
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("logica de Get All");
        return [new Array()];
    };
    return Dao;
}());
exports.default = Dao;
