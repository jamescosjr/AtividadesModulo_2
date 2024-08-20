process.stdout.write("Digite seu nome:");

process.stdin.once("data", function(data){

    var nome = data.toString().trim();
    process.stdout.write("Olá, " + nome + "!\n");

process.stdout.write("Digite sua idade:");

process.stdin.once("data", function(data){

    var idade = data.toString().trim();
    process.stdout.write("Olá, " + nome + ", você tem " + idade + " anos!\n");

    process.exit();

})
})