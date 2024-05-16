const estudante = {
    nome: 'Gibson',
    sobrenome: 'Cruz',
    idade: 27,
    matricula: '202203025',
    turma: 'JS',
    cpf: '45654585457',
    media: 7.8,
    isAprovated: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}
console.log(estudante.isAprovated(5));

