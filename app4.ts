import Concessionaria from "./Concessionaria"
import Dao from './Dao'

let concessionaria = new Concessionaria('', [])

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
dao3.inserir(concessionaria);