function solicitarNotas(callback) {
    process.stdout.write("Digite suas notas (separadas por vírgulas): ");

    //Escuta a entrada do usuário
    process.stdin.once('data', (data) => {
        const input = data.toString().trim();
        const notas = input.split(',').map(item => parseFloat(item.trim())).filter(num => !isNaN(num));
        callback(notas);
    });
}

module.exports = {solicitarNotas};