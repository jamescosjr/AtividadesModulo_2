const listaNumero = require('./listaNumero');
const solicitarNumero = require('./solicitarNumero');
const verificarNumero = require('./verificarNumero');

// Solicita um número do usuário
solicitarNumero((numero) => {
    // Verifica se o número está na lista
    verificarNumero(listaNumero, numero);
    
    // Fecha o processo
    process.exit();
});