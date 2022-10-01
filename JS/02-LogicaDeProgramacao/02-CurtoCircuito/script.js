/*
&& -> false && true -> false "O valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro "
*/


// console.log('Luiz Otavio' && true && false); 

// console.log('Luiz' && NaN && 'Maria');

// function falaOI() {
//     return 'OI';
// }

// let vaiExecutar = 'joaozinho ';

// console.log(vaiExecutar && falaOI());

// console.log(0 || false || null || 'Luiz Otavio' || true);

// const corUsuario = null;
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);