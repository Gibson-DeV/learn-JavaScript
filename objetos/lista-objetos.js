const estudante = {
    nome: 'Gibson',
    sobrenome: 'Cruz',
    idade: 27,
    matricula: '202203025',
    turma: 'JS',
    cpf: '45654585457',
    enderecos: [{
        rua: 'sdf',
        numero: 45,
        uf: 'RJ',
        cidade: 'Rio de Janeiro',
        bairro: 'Rio de Janeiro'
    }]
}

estudante.enderecos.push({
    rua: 'asd',
        numero: 56,
        uf: 'RJ',
        cidade: '',
        bairro: 'Rio de Janeiro'
})

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[0]);

const addressList = estudante.enderecos.filter((endereco) => endereco.cidade);
console.log(addressList);