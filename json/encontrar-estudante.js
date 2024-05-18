const jsObject = require('./estudantes.json');

function encontrarEstudante (listaEstudante, chave, valor){
    return listaEstudante.find((estudante) => estudante[chave].includes(valor))
}

const telefoneEstudante = encontrarEstudante(jsObject, 'telefone', '97905299694')

console.log(encontrarEstudante(jsObject, 'nome', 'Emilee'));
console.log(telefoneEstudante);


