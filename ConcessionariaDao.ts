import DaoInterface from './DaoInterface'
import Concessionaria from "./Concessionaria"

export default class ConcessionariaDao implements DaoInterface{

    nomeTabela: string = "mr_teste"

    inserir(object: Concessionaria): boolean{
        console.log("logica de insert");

        return true;
    }
    atualizar(object: Concessionaria): boolean{
       "logica de atualizar"

        return true
    }
    remover(id: number): Concessionaria{
        console.log("Logica delete")

        return new Concessionaria("", [])
    }
    selecionar(id: number): Concessionaria{
        console.log("logica de select")

        return new Concessionaria("", [])

    }
    selecionarTodos(): [any]{
        console.log("logica de Get All")

        return [new Array<Concessionaria>()]
    }


}