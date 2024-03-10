process.stdout.write("Digite seu nome:");

process.stdin.once("data", function(data){

    var nome = data.toString().trim();
    process.stdout.write("Olá, " + nome + "!\n");

process.stdout.write("Digite sua idade:");

process.stdin.once("data", function(data){

    var idade = data.toString().trim();
    process.stdout.write("Olá, " + nome + ", você tem " + idade + " anos!\n");

process.stdout.write("Você possui CNH? S/N:");

process.stdin.once("data", function(data){

    var cnh = data.toString().trim();
    

    if(cnh == 'S' || cnh == 's'){
        var fraseCNH = (nome + ", você pode dirigir!\n")
    } 
    else if(cnh == 'N' || cnh == 'n'){
        fraseCNH = (nome + ", você não pode dirigir!\n")
    }
    else {
        fraseCNH = ("Resposta inválida!\n")
    }

    process.stdout.write(fraseCNH);



    process.exit();
})
})
})