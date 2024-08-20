function verificarNumero(lista, numero) {
    // Verifica se o número está na lista
    let encontrado = lista.includes(numero);
//exibe o resultado
    if (encontrado) {
        console.log("O número", numero, "está presente na lista.");
    } else {
        console.log("O número", numero, "não está presente na lista.");
    }
}
module.exports = verificarNumero;