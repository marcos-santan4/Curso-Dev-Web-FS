const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String
const num1 = 10; //Number
const num2 = 10.52;//Numer
let nomeAluno; //Undefined -> não aponta pra local nenhum na memoria
let sobreNomeAluno = null; //Nulo -> não aponta pra local nenhum na memória\
const aprovado = false; // Boolean = true, false (logico)

const a = [1,2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a,b);