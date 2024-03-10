process.stdout.write("Qual o ano que você nasceu?\n");

process.stdin.once("data", function(data){
    anoNascimento = data.toString().trim();
    anoAtual = new Date().getFullYear();
    idade = anoAtual - anoNascimento;

    process.stdout.write("Você tem " + idade + " anos de idade.");

    process.exit();
})