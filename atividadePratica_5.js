process.stdout.write("Qual a sua idade?\n");

process.stdin.on("data", function(data){

    var idade = data.toString().trim();

    if(idade >= 18){
        var conclusao = ("Você é maior de idade!")
    } else {
        conclusao = ("Você não é maior de idade!")
    }

    process.stdout.write(conclusao);

    process.exit();
})