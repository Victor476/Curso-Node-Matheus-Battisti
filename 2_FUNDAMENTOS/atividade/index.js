import inquirer from "inquirer";
import chalk from "chalk";


inquirer.prompt([{
    name: 'nome',
    message: "Qual o seu nome?",
    },{
    name: 'idade',
    message: "Qual a sua idade?"
    },
]).then((answers)=>{
    console.log(chalk.bgYellow.black(`Seu nome é ${answers.nome} e você tem ${answers.idade} anos`))
}).catch(err => console.error(err));
