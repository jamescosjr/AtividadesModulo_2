let usuario = {
    nome: "",
    idade: 0,
    cnh: ""
}

process.stdout.write("Digite o seu nome: ");

process.stdin.once("data", function(data){
    usuario.nome = data.toString().trim();

process.stdout.write("Digite a sua idade: ");

process.stdin.once("data", function(data){
    usuario.idade = data.toString().trim();

process.stdout.write("Digite a sua CNH: ");

process.stdin.once("data", function(data){
    usuario.cnh = data.toString().trim();

process.stdout.write(usuario.nome + ", " + usuario.idade + " anos, CNH: " + usuario.cnh);

process.exit();

})
})
})