function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

const numeroSecreto = getRandomInt(20);

let tentativa;
let acertou = false;

while (!acertou) {
    tentativa = Number(prompt("Adivinhe o número (entre 1 e 20):"));

    if (tentativa < numeroSecreto) {
        alert("O número secreto é maior!");
    } else if (tentativa > numeroSecreto) {
        alert("O número secreto é menor!");
    } else if (tentativa === numeroSecreto) {
        alert("Parabéns! Você acertou!");
        acertou = true;
    } else {
        alert("Digite um número válido.");
    }
}