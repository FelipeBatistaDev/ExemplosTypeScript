import Carro from "./carro"
import Moto from "./moto"
import Concessionaria from "./Concessionaria"

let carro = new Carro("fox", 2);
carro.acelerar()

let moto = new Moto();
moto.acelerar()

let concessionaria = new Concessionaria("", [])

console.log(carro)
console.log(moto)
console.log(concessionaria.fornecerHorarioFuncionamento())