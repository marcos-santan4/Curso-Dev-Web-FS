function sistema() {
    const res = document.querySelector('.res');
    const form = document.querySelector('.form');

    const people = [];

    function cadastro(evento) {
        evento.preventDefault();
        const name = document.querySelector('.name');
        const age = document.querySelector('.age');

        people.push({
            name: name.value,
            age: age.value
        });

        console.log(people);

        res.innerHTML += `<p>${name.value} ${age.value}</p>`;
    
    }

    form.addEventListener('submit', cadastro);
}

sistema();