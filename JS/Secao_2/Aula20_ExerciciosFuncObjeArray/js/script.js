//IIFE - PESQUISAR
// . - classes || # - id

function atv () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    //  form.onsubmit = function (evento) {
    //     evento.preventDefault(); // funcao que impede que a pagina seja carraga após clicar me botao.
    //     alert(1);
    //     console.log('Form enviado!');
    //  }; 
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: Number(peso.value),
            altura: parseFloat(altura.value )
        });
         
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + 
        `${peso.value}  ${altura.value} </p>`;
    }


    form.addEventListener('submit', recebeEventoForm);
}
atv();
