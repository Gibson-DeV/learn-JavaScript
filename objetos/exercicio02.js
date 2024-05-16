const carros = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2024,
    cor: 'branco'
}

for (let key in carros){
    console.log(`${key}: ${carros[key]}`)
}

carros.motor = 2.0;

for (let key in carros){
    console.log(`${key}: ${carros[key]}`)
}

