//nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

console.log(nome)

const idades = args[1].split('=')[1]

console.log(idades)

console.log(`O nome dele é ${nome} e ele tem ${idades} anos!`);

