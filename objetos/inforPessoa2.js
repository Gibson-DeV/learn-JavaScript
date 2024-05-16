const pessoas = [{
    nome: 'Pedro',
    idade: '10',
    cidade: 'Rio de Janeiro'
},
{
    nome: 'Marcos',
    idade: '20',
    cidade: 'Santiago'
},
{
    nome: 'Jao',
    idade: '90',
    cidade: 'Punta Cana'
}]

pessoas.push(
    {
        nome: 'Vivian',
        idade: '25',
        cidade: 'Barra'
    },
    {
        nome: 'Carol',
        idade: '23',
        cidade: 'Rio de Janeiro'
    },
    {
        nome: 'Jéssica',
        idade: '25',
        cidade: 'São Paulo'
    })

function mostrarListaPessoas(pessoas) {
    console.log(pessoas);
}

function filtrarPorCidade(pessoasList, cidade) {
   return pessoasList.filter(pessoa => pessoa.cidade === cidade);
}

// mostrarListaPessoas(pessoas);

pessoas.push(
    {
        nome: 'Vitor',
        idade: '30',
        cidade: null
    }
)

console.log(filtrarPorCidade(pessoas, 'Rio de Janeiro'));


