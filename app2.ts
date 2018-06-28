import  Carro from './Carro'
import  Pessoa from './Pessoa'
import  Concessionaria from './Concessionaria'

// criar carros
let carroA = new Carro("Celta",2)
let carroB = new Carro("Corsa",4)
let carroC = new Carro("Prisma",4)


// array de carros
let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria("Av. Paulista", listaDeCarros);



// exibir lista de carros
// console.log(concessionaria.mostrarListaDeCarros())

// criar cliente para comprar o carro
let cliente = new Pessoa("Robson","Celta");

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        
        // comprar o carro
        cliente.comprarCarro(carro);
    }

})
console.log(cliente.dizerCarroQueTem())