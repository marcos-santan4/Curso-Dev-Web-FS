function clicar() {
    const number = Number(prompt(`Enter a number: `));
    const numeroTitulo = document.getElementById('numero-titulo');
    const texto = document.getElementById('texto');

    numeroTitulo.innerHTML = number;
    texto.innerHTML = '';
    texto.innerHTML += `Raiz quadrada: ${Math.sqrt(number)}<br>`;
    texto.innerHTML += `${number} é inteiro: ${Number.isInteger(number)}<br>`;
    texto.innerHTML += `É NaN: ${Number.isNaN(number)}<br>`;
    texto.innerHTML += `Arredondando para baixo: ${Math.floor(number)}<br>`;
    texto.innerHTML += `Arredondando para cima: ${Math.ceil(number)}<br>`;
    texto.innerHTML += `Com duas casas decimais: ${number.toFixed(2)}<br>`;
}



