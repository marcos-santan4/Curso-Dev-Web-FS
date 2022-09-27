let String = "Um texto";
let umaString = 'Um "Texto"'
let outraString = "Um \"Texto\"";
let tercString = 'Um \'Texto\'';
let texto = "O rato roeu a roupa do rei de roma.";

console.log(umaString);
console.log(outraString); 
console.log(tercString);

console.log(String[6]); // mostra a letra/consoante no local especificado dentro do colchete
console.log(String[-1]);
console.log(String.charAt(6));
console.log(String.charAt(-1)); // retorna um vazio

console.log(String.indexOf('texto')); //mostra a posicao do indice de uma palavra. 

console.log(texto.slice(32));
console.log(texto.slice(-5));
console.log(texto.substring(texto.length - 5, texto.length - 1));