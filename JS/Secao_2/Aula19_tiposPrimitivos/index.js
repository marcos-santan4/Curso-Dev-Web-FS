/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
*/
//          0123
/* 
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0]); 
*/

/* 
let a = 'A';
let b = a;
console.log(a ,b);

a = 'B';
console.log(a ,b);
 */
  
// Referencia (mutável) - array, object, function

/*
let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a ,b);

a.push(4);
console.log(a, b);

b.pop(); // pop remove
console.log(a, b);

a.push('Luiz');
console.log(a,  c);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

//const b = a; //apontando a referencia da memoria de a
const b = {...a}; // copiando o valor que tem em a


a.nome = 'João'; // se por em comentario, o console abaixo vira o ' Luiz 
console.log(b); 
console.log(a);