process.stdout.write("Quantos hobbies você tem?\n");

process.stdin.once("data", function(data) {
    numeroHobbies = parseInt(data.toString().trim());

    hobbies = [];

    process.stdout.write("Digite seus hobbies separando por um 'enter'\n");

    cont = 0;

    process.stdin.on("data", function(data) {
        hobby = data.toString().trim();
        hobbies.push(hobby);
        cont++;

        if (cont === numeroHobbies) {
            mostrarHobbies();
        }
    });

    mostrarHobbies = function() {
        process.stdout.write("Seus hobbies são:\n");
        hobbies.forEach(function(hobby) {
            process.stdout.write(hobby + "\n");
        });
        process.exit();
    };
});
