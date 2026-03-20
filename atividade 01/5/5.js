let n = parseInt(prompt("Digite a quantidade de termos:"));

let termo = 0;
let soma = 0;
let serie = "";

for (let i = 1; i <= n; i++) {
    termo = termo * 10 + 1;
    soma += termo;

    serie += termo;
    if (i < n) {
        serie += " + ";
    }
}

console.log(serie);
console.log("A soma é:", soma.toLocaleString("pt-BR"));