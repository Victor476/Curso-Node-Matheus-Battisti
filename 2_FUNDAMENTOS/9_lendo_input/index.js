const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual a sua linguagem de programação preferida?: ", (language)=>{
    if (language === "HTML") {
        console.log('Isso nem é linguagem de programação!')
        readline.close();
    }
    else{
    console.log(`A minha linguagem preferida é: ${language}`)
    readline.close();
    }
})




