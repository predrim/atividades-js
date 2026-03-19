const opcoes = ["pedra", "papel", "tesoura"];

let usuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

const computador = opcoes[Math.floor(Math.random() * 3)];

console.log("Usuário escolheu:", usuario);
console.log("Computador escolheu:", computador);

if (usuario === computador) {
    console.log("Empate!");
} else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "papel" && computador === "pedra") ||
    (usuario === "tesoura" && computador === "papel")
) {
    console.log("Você venceu!");
} else if (
    (usuario === "pedra" && computador === "papel") ||
    (usuario === "papel" && computador === "tesoura") ||
    (usuario === "tesoura" && computador === "pedra")
) {
    console.log("Computador venceu!");
} else {
    console.log("Opção inválida!");
}