const estudantes = require('./estudantes.json');

function ordena(listaEstudante, chave) {
    return listaEstudante.sort((a, b) => {
        if(a[chave] < b[chave]) return -1;
        if(a[chave] > b[chave]) return 1;
        return 0;
    })
}
const listaOrdenadaPorNome = ordena(estudantes, 'nome');
console.log(listaOrdenadaPorNome);