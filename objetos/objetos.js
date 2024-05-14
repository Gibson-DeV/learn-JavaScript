const Pessoa =  {
    nome: 'Gibson',
    idade: 27,
    cpf: '1654658'
}

console.log(Pessoa.nome);
console.log(Pessoa.nome.substring(0,3));

function exibeInfoEstudantes(estudante, infoEstudante){
    return estudante[infoEstudante];
}

console.log(exibeInfoEstudantes(Pessoa, 'idade'))
console.log(exibeInfoEstudantes(Pessoa, 'cpf'));

Pessoa.telefone = '21161856';
Pessoa.cpf = '54613515';

console.log(Pessoa);



