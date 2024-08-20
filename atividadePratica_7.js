process.stdout.write("Digite um número: ");

process.stdin.once("data", function(data){

    numero = data.toString().trim();

    if(numero % 2 == 0){
        paridade = ("Este número é par!")
    } else {
        paridade = ("Este número é ímpar!")
    }

    process.stdout.write(paridade);

    process.exit();
})