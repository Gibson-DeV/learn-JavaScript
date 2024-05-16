const pessoa = {
    nome: 'Gibson',
    idade: 27,
    solteiro: false,
    hobbies: ['Academia','Animes','Games','Sair'],
    mostarInfoPessoa: function (pessoa) {
        console.log(`Nome: ${this.nome}
        Idade: ${this.idade}
        Soldeiro: ${this.solteiro}
        Hobbies: ${this.hobbies}
        Endereços: ${this.enderecos.rua}
        `)
    }
}

pessoa.enderecos =  {
    rua: 'Milicias',
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
}
pessoa.mostarInfoPessoa(pessoa);