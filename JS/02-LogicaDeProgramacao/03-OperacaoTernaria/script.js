const pontuacaoUsuario = 1000;

// (CONDIÇÃO) ? 'VALOR PARA VERDADEIRO' : 'VALOR PARA FALSO';

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario Normal');
// }

