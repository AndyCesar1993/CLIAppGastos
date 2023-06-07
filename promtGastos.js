
import inquirer from 'inquirer';


const questions = [
    {
        type: 'input',
        name: 'name',
        message: "¿Cual es el gasto?",
    },
    {
        type: 'input',
        name: 'gasto',
        message: "¿Cual es el precío?",
    },
];



export const promptGastos = async()=>{
    return await inquirer.prompt(questions)
}

