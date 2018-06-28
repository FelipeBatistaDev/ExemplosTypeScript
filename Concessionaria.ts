import  Carro  from './carro'
import ConcessionariaInterfaces from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterfaces {

    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDecarros: Array<Carro>){

        this.endereco = endereco
        this.listaDeCarros = listaDecarros
    }

    public fornecerEndereco(): string{

        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro>{

        return this.listaDeCarros
    }

    public fornecerHorarioFuncionamento(): string{
        return "De segunda a sexta das 8:00 às 18:00 e sábado das 08:00 às 12:00"
    }
}