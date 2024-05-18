const javaScriptObject = require('./animais.json');

// console.log(javaScriptObject);

const jsonString = JSON.stringify(javaScriptObject);

// console.log(jsonString);

const json = JSON.parse(jsonString);

// console.log(json);

json.animais.push(animal = {
    id: 4,
    nome: 'Jacare',
    tipo: '´Répitl',
    habitat: 'Pantano'
})
// console.log(json)

json.animais.filter(animal => animal.habitat === 'Pantano' ? animal.habitat = 'Barra' : false)

json.animais.splice(2,1)

console.log(json);

const stringJson = JSON.stringify(json);

console.log(stringJson);




