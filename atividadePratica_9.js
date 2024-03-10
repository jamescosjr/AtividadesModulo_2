process.stdout.write("Escreva uma frase: ");
process.stdin.once("data", function(data){
    numeroCaracteres = data.length

    process.stdout.write("Essa frase tem " + numeroCaracteres + " caracteres.")

    process.exit();
})