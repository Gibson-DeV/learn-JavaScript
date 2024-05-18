
const dadosJson = require('./dados.json');

// console.log(dadosJson);

// console.log(Object.keys(dadosJson));

// console.log(Object.values(dadosJson));

// console.log(dadosJson.produtos);

const produto = {
    id: 3,
    nome: "Camiseta",
    preco: 25.99
}

dadosJson.produtos.push(produto);

console.log(dadosJson);

const dadosJsonString = JSON.stringify(dadosJson);

console.log(dadosJsonString);