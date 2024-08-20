process.stdout.write("Digite o seu nome: ");
process.stdin.once("data", function(data){
    nome = data.toString().trim();

    process.stdout.write("Digite a sua idade: ");
    process.stdin.once("data", function(data){
        idade = data.toString().trim();

        if(idade >=18){
            process.stdout.write("Você é maior de idade!")
        } else {
            process.stdout.write("Você é menor de idade!")
        }

        process.exit();
    })
})