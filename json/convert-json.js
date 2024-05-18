const estudante = require('./estudante.json');

console.log(estudante);

const stringEstudante = JSON.stringify(estudante);

console.log(stringEstudante);

const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante);

console.log(typeof stringEstudante);

console.log(typeof objEstudante);