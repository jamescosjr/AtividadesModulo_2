function mediaNotas(notas) {
    let soma = 0;
    for (let i in notas) {
        soma += notas[i];
    }

    const media = soma / notas.length;
    return media;
}
module.exports = {mediaNotas};