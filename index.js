import { save, get} from './readWritePromis.js'
import { promptGastos } from './promtGastos.js'
import inquirer from 'inquirer'


const run = async()=>{

    const gastosJson = await get('./gastos.json')

    const opciones = await inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Selecciona una opcion',
            choices:[
                {value: 1 , name: 'Agregar un nuevo gasto'},
                {value: 2 , name: 'Todos mis Gastos'},
            ]
        }
    ])

    switch(opciones.choices){
        case 1:
            const gasto = await promptGastos();
            const newGastoData = [...gastosJson,gasto]
            save("./gastos.json", newGastoData)
            return
        case 2:
            console.log(gastosJson)
            return
    }
    
}

run()