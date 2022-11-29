const nome = 'Marcos Vinicius';
const sobrenome = 'Santana';
const idade = 22;
const peso = 60;
const altura = 1.69;
let imc = peso / (Math.pow(altura, 2));
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}` );

prompt('informe');