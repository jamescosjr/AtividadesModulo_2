const {solicitarNotas} = require('./entradaNotas');
const {mediaNotas} = require('./mediaNotas');

solicitarNotas(notas => {
    if (notas.length === 0) {
        console.log("Nenhuma nota foi fornecida.");
    } else {
        const media = mediaNotas(notas);
        console.log("A média das notas é:", media);
    }
    process.exit();
});