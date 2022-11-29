function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

/* const variavel = saudacao('Luiz');
console.log(variavel);
saudacao('Maria');
saudacao('Felipe');
saudacao('Pedro'); */

// function soma(x, y) {
//     const resultado = x + y;
//     return resultado;
// }

function soma2(x=1, y=1) { // é possivel atribuir um valor padrao para caso o usuário não informe nenhum valor.
    const resultado = x + y;
    return resultado;
}

// console.log(soma(2,2));
// console.log(soma(3,4));
// console.log(soma(8,2));
// console.log(soma2(8));

// const resultado = soma2(4, 2);
// console.log(resultado);

const raiz = function (n) { //funções anonimas precisam de ; após a chave.
    return Math.sqrt(n);
};

const raiz2 = n => Math.sqrt(n); //Arrow function, para facilitar, é uma forma de declarar uma função
   

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz2(25));
console.log(raiz2(36));