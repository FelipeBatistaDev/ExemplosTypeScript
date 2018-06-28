import DaoInterface from './DaoInterface'

export default class Dao<T> implements DaoInterface<T>{

    nomeTabela: string = "mr_teste"

    inserir(object: T): boolean{
        console.log("logica de insert");

        return true;
    }
    atualizar(object: T): boolean{
       "logica de atualizar"

        return true
    }
    remover(id: number): T{
        console.log("Logica delete")

        return Object()
    }
    selecionar(id: number): T{
        console.log("logica de select")
        
        return Object()

    }
    selecionarTodos(): [any]{
        console.log("logica de Get All")

        return [new Array<T>()]
    }


}