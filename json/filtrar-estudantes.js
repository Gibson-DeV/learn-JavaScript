const jsObject = require('./estudantes.json');

function filtrarPorPropriedade (listaEstudantes, chave){
    return listaEstudantes.filter((estudante ) => {
        return !estudante.endereco.hasOwnProperty(chave);
    })
}

const listaSemCep = filtrarPorPropriedade(jsObject, 'cep');

console.log(listaSemCep);