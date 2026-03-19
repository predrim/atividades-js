let linhas = Number(prompt("Digite o número de linhas do triângulo:"));

if (isNaN(linhas) || linhas <= 0) {
    console.log("Digite um número válido maior que 0.");
} else {
    for (let i = 1; i <= linhas; i++) {
        let linha = "";

        for (let j = 1; j <= i; j++) {
            linha += "*";
        }

        console.log(linha);
    }
}