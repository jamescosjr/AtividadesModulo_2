//solicita ao usuario um numero
function solicitarNumero(callback) {
    process.stdout.write("Escolha um número de 1 a 10: ");

//entrada de dados
    process.stdin.on('data', function (data) {
        const numero = parseInt(data.toString().trim());
        callback(numero);
    });
}
module.exports = solicitarNumero;