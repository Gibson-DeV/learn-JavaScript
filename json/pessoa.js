const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function objCopy(obj) {
    const copy = Object.assign(obj);
    
    return(copy);
}

console.log(objCopy(pessoaOriginal));