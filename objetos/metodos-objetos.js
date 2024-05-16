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

  const teste = {
    maca: 'asd',
    peruana: 52
  }

  const chavesObjetos = Object.keys(estudante);
  const valoresObjetos = Object.values(estudante);
  const entriesObjetos = Object.entries(estudante);
  const fusaoObjetos = Object.assign({}, estudante, teste)

//   console.log(chavesObjetos);
//   console.log(valoresObjetos);
//   console.log(entriesObjetos);
  console.log(fusaoObjetos);

//   if(!chavesObjetos.includes('enderecos')){
//     console.error('É necessário endereços')
//   }

const dadosEnvio = {
    nome: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);
  