import chalk from 'chalk';

const nota = 7;

if( nota >=7){
    console.log(chalk.green.bold('Parabéns! Você está aprovado!'));
}else{
    console.log(chalk.bgRed.bold("Você precisa fazer a prova de recuperação!"))
}
