process.stdout.write("Você gosta de café? S/N:\n");

process.stdin.once("data", function(data){

    resposta = data.toString().trim();

    if(resposta == 'S' || resposta == 's'){
        resultado = ("Você é uma pessoa normal!")
    } else if (resposta == 'N' || resposta == 'n'){
        resultado = ("Como isso é possível?")
    } else {
        resultado = ("Resposta inválida! Responda com 'S' ou 'N'.")
    }

    process.stdout.write(resultado);

    process.exit();
})