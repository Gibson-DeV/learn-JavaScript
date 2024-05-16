const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

for (let chave in estudante) {
    const type = typeof estudante[chave];
    if (type !== 'object' && type !== 'function') {

        console.log(`A chave ${chave} tem o valor ${estudante[chave]}`)
    }
}




