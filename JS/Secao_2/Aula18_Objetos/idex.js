/*
const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
console.log(array);

const pessoa1 = {  //object
    nome: 'Marcos',
    sobrenome: 'Vinicius',
    idade: 22
};

*/

/*
function criaPessoa (nome, sobrenome, idade) { // parametro
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Marcos', 'Vinicius', 21); //argumento
const pessoa2 = criaPessoa('Emilly', 'Barbosa', 20); //argumento
const pessoa3 = criaPessoa('Marcelo', 'Junio', 41); //argumento
const pessoa4 = criaPessoa('Veronica', 'Santana', 39); //argumento
const pessoa5 = criaPessoa('Pedro', 'Henrique', 17); //argumento

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome, pessoa5.nome);
*/

function criaPessoa (nome, sobrenome, idade) { // parametro
    return { nome, sobrenome, idade };
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log('Olá mundo!');
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }, 

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa.fala();
console.log(pessoa.idade());
